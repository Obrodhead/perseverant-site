// Edge entry for the static site. Every request passes through here first.
//
// 1. Redirect the trailing-dot hostname (perseverantdigital.com.) to perseverantdigital.com.
//    Without this, relative links keep visitors on the dotted host and every URL shows the dot.
// 2. Lead path tracking, done on the server so the site stays free of client-side JavaScript.
//    On each HTML page view we keep two small first-party cookies:
//      pd_first  where the visit started: landing page, source (referring site, or "direct"),
//                UTM tags and ad click ids, and the date. Set once, kept 90 days.
//      pd_trail  the last few pages viewed on this site, oldest first. Kept 30 days.
//    Then we add hidden fields to every lead form (`form.lead-form`), so each lead email shows
//    where the person came from and the path they took to the form:
//      came_from   the page they were on just before this one
//      path        recent pages, oldest first
//      landing     first page of the visit
//      source      referring site or "direct"
//      campaign    UTM tags and ad click ids, if any
//      first_seen  date of the first visit
//    No personal data is stored. Values are page paths, hostnames and campaign tags only.

const FIRST = 'pd_first';
const TRAIL = 'pd_trail';
const TRAIL_MAX = 6;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const CLICK_IDS = { gclid: 'Google Ads click', gbraid: 'Google Ads click', wbraid: 'Google Ads click', fbclid: 'Meta click', li_fat_id: 'LinkedIn click', msclkid: 'Microsoft Ads click' };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith('.')) {
      url.hostname = url.hostname.replace(/\.+$/, '');
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    if (request.method !== 'GET' || !isHtml(response)) return response;
    try {
      return trackAndTag(request, url, response);
    } catch {
      // Tracking must never break a page.
      return response;
    }
  },
};

function isHtml(response) {
  return response.status === 200 && (response.headers.get('content-type') || '').includes('text/html');
}

function trackAndTag(request, url, response) {
  const cookies = parseCookies(request.headers.get('cookie') || '');
  const here = cleanPath(url.pathname);
  const prev = sameSiteReferrer(request, url);

  let first = readJson(cookies[FIRST]);
  const isNewVisit = !first;
  if (isNewVisit) {
    first = {
      l: here,
      s: externalSource(request, url),
      c: campaignTags(url),
      d: new Date().toISOString().slice(0, 10),
    };
  }

  const trail = (readJson(cookies[TRAIL]) || []).filter((p) => typeof p === 'string').map(cleanPath);
  if (trail[trail.length - 1] !== here) trail.push(here);
  while (trail.length > TRAIL_MAX) trail.shift();

  const fields = {
    came_from: prev || (isNewVisit ? `${first.s} (entry page)` : 'unknown'),
    path: trail.join(' → '),
    landing: first.l,
    source: first.s,
    campaign: first.c || 'none',
    first_seen: first.d,
  };
  const hidden = Object.entries(fields)
    .map(([name, value]) => `<input type="hidden" name="${name}" value="${escapeAttr(String(value).slice(0, 300))}" />`)
    .join('');

  const tagged = new HTMLRewriter()
    .on('form.lead-form', { element(el) { el.prepend(hidden, { html: true }); } })
    .transform(response);

  const out = new Response(tagged.body, tagged);
  // Per-visitor HTML: let browsers revalidate, and never let a shared cache store it.
  out.headers.set('Cache-Control', 'private, no-cache');
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  out.headers.append('Set-Cookie', `${TRAIL}=${encodeURIComponent(JSON.stringify(trail))}; Path=/; Max-Age=2592000; SameSite=Lax; HttpOnly${secure}`);
  if (isNewVisit) {
    out.headers.append('Set-Cookie', `${FIRST}=${encodeURIComponent(JSON.stringify(first))}; Path=/; Max-Age=7776000; SameSite=Lax; HttpOnly${secure}`);
  }
  return out;
}

// Paths only: no query strings or fragments, so nothing a visitor typed into a URL is kept.
function cleanPath(p) {
  const path = String(p || '/').split(/[?#]/)[0];
  return /^\/[\w\-./~%]*$/.test(path) ? path.slice(0, 120) : '/';
}

function sameSiteReferrer(request, url) {
  const ref = request.headers.get('referer');
  if (!ref) return '';
  try {
    const r = new URL(ref);
    return r.hostname.replace(/\.+$/, '') === url.hostname ? cleanPath(r.pathname) : '';
  } catch {
    return '';
  }
}

function externalSource(request, url) {
  const ref = request.headers.get('referer');
  if (!ref) return 'direct';
  try {
    const host = new URL(ref).hostname.replace(/^www\./, '').replace(/\.+$/, '');
    if (host === url.hostname.replace(/^www\./, '')) return 'direct';
    return /^[a-z0-9.-]+$/i.test(host) ? host.slice(0, 80) : 'unknown';
  } catch {
    return 'unknown';
  }
}

function campaignTags(url) {
  const parts = [];
  for (const k of UTM_KEYS) {
    const v = url.searchParams.get(k);
    if (v) parts.push(`${k.replace('utm_', '')}=${v.replace(/[^\w\- .:/]/g, '').slice(0, 60)}`);
  }
  for (const [k, label] of Object.entries(CLICK_IDS)) {
    if (url.searchParams.has(k) && !parts.includes(label)) parts.push(label);
  }
  return parts.join(', ');
}

function parseCookies(header) {
  const out = {};
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

function readJson(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch {
    return null;
  }
}

function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
