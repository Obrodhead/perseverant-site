import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { activeServices, activeIndustries, activeLocations, placeSlug, publishedInsights } from '../lib/content';
import { stages } from '../lib/stages';

// llms.txt: a concise, Markdown map of the site for AI assistants (llmstxt.org format).
// Generated from the same content files as the pages, so it can never go stale.
export const GET: APIRoute = async () => {
  const services = await activeServices();
  const industries = await activeIndustries();
  const posts = await publishedInsights();
  const locations = await activeLocations();

  const out = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} (legal name ${site.legalName}) was founded in ${site.founded} by ${site.founder.name} and is based in ${site.location.city}, ${site.location.region}. It serves high-value service businesses across the ${site.areaServed}. Contact: ${site.email}.`,
    '',
    site.founder.bio,
    '',
    '## Services',
    '',
    'The six services work as one system in three stages. Each stage makes the next one work harder.',
    '',
    ...stages.flatMap((st) => [
      `### ${st.num}. ${st.name}`,
      '',
      st.line,
      '',
      ...services.filter((s) => s.data.stage === st.id).map((s) => `- [${s.data.title}](${site.url}/services/${s.id}/): ${s.data.summary}`),
      '',
    ]),
    '',
    '## Industries',
    '',
    ...industries.map((s) => `- [${s.data.title}](${site.url}/industries/${s.id}/): ${s.data.summary}`),
    '',
    ...(locations.length
      ? ['## Local markets', '', ...locations.map((l) => `- [${l.data.title}](${site.url}/industries/${l.data.industry}/${placeSlug(l.id)}/): ${l.data.summary}`), '']
      : []),
    '## Insights',
    '',
    ...posts.map((p) => `- [${p.data.title}](${site.url}/insights/${p.id}/): ${p.data.description}`),
    '',
    '## Company',
    '',
    `- [About](${site.url}/about/): Founder background and the story behind the name`,
    `- [Contact](${site.url}/contact/): How to reach ${site.name}`,
    '',
    '## Optional',
    '',
    `- [Full text](${site.url}/llms-full.txt): Every service, industry page and article in one Markdown file`,
    '',
  ];
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
