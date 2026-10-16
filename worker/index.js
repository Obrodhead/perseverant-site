// Edge entry for the static site. Every request passes through here first so we can
// send "perseverantdigital.com." (fully qualified, trailing dot) to the clean hostname.
// Without this, relative links keep visitors on the dotted host and every URL shows the dot.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith('.')) {
      url.hostname = url.hostname.replace(/\.+$/, '');
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
