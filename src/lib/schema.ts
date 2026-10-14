// JSON-LD builders. Every node uses a stable @id so pages reference the same
// Organization and Person instead of redefining them, forming one connected graph.
import { site } from '../site.config';

export const ORG_ID = `${site.url}/#organization`;
export const PERSON_ID = `${site.url}/#founder`;
export const WEBSITE_ID = `${site.url}/#website`;

export function organization() {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    foundingDate: site.founded,
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    areaServed: { '@type': 'Country', name: site.areaServed },
    knowsAbout: [
      'Lead generation',
      'Answer engine optimization',
      'Generative engine optimization',
      'Search engine optimization',
      'Meta advertising',
      'Seminar marketing',
      'Marketing automation',
      'Law firm marketing',
      'Healthcare practice marketing',
      'Home improvement marketing',
      'Senior living marketing',
      'Recruiting and staffing marketing',
    ],
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function person() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    worksFor: { '@id': ORG_ID },
    url: `${site.url}/about/`,
    knowsAbout: ['Paid media', 'SEO', 'AI search visibility', 'Lead generation', 'Web development'],
    ...(site.founder.sameAs.length ? { sameAs: site.founder.sameAs } : {}),
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[], path: string) {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function graph(...nodes: (object | null)[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
