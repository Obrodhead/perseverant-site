import { getCollection } from 'astro:content';

export async function activeServices() {
  const all = await getCollection('services', ({ data }) => data.status === 'active');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function publishedInsights() {
  const all = await getCollection('insights', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function displayDate(d: Date) {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
