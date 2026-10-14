import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { activeServices, activeIndustries, publishedInsights, isoDate } from '../lib/content';

const faqBlock = (faqs: { q: string; a: string }[]) =>
  faqs.length ? ['', '### Questions', '', ...faqs.flatMap((f) => [`**${f.q}**`, '', f.a, ''])] : [];

export const GET: APIRoute = async () => {
  const services = await activeServices();
  const industries = await activeIndustries();
  const posts = await publishedInsights();

  const out = [
    `# ${site.name} — full text`,
    '',
    `> ${site.description}`,
    '',
    '---',
    '',
    '# Services',
    '',
    ...services.flatMap((s) => [
      `## ${s.data.title}`,
      '',
      `URL: ${site.url}/services/${s.id}/  `,
      `Last reviewed: ${isoDate(s.data.updated)}`,
      '',
      `**Short answer:** ${s.data.answer}`,
      '',
      `**Who it's for:** ${s.data.audience}`,
      '',
      '**Deliverables:**',
      '',
      ...s.data.deliverables.map((x) => `- ${x}`),
      '',
      (s.body ?? '').trim(),
      ...faqBlock(s.data.faqs),
      '---',
      '',
    ]),
    '# Industries',
    '',
    ...industries.flatMap((s) => [
      `## ${s.data.title}`,
      '',
      `URL: ${site.url}/industries/${s.id}/  `,
      `Last reviewed: ${isoDate(s.data.updated)}`,
      '',
      `**Short answer:** ${s.data.answer}`,
      '',
      `**Includes:** ${s.data.examples.join(', ')}`,
      '',
      (s.body ?? '').trim(),
      ...faqBlock(s.data.faqs),
      '---',
      '',
    ]),
    '# Insights',
    '',
    ...posts.flatMap((p) => [
      `## ${p.data.title}`,
      '',
      `URL: ${site.url}/insights/${p.id}/  `,
      `Author: ${site.founder.name}  `,
      `Published: ${isoDate(p.data.published)}`,
      '',
      `**Short answer:** ${p.data.answer}`,
      '',
      (p.body ?? '').trim(),
      ...faqBlock(p.data.faqs),
      '---',
      '',
    ]),
  ];
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
