import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    // Meta description and llms.txt line. Keep it under 160 characters.
    summary: z.string().max(160),
    // The quotable answer shown first on the page: 40–70 words.
    answer: z.string(),
    audience: z.string(),
    deliverables: z.array(z.string()).min(1),
    faqs: z.array(faq).default([]),
    order: z.number().default(100),
    // active = live everywhere; paused = removed from nav, sitemap and llms.txt
    status: z.enum(['active', 'paused']).default('active'),
    updated: z.coerce.date(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    answer: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),
    draft: z.boolean().default(false),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    // Short label for grids and nav, e.g. "Law firms"
    label: z.string(),
    summary: z.string().max(160),
    answer: z.string(),
    examples: z.array(z.string()).min(1),
    // Service file ids that fit this industry best, in priority order
    services: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),
    order: z.number().default(100),
    status: z.enum(['active', 'paused']).default('active'),
    updated: z.coerce.date(),
  }),
});

// Local market pages for an industry, served at /industries/{industry}/{place}/.
// File path: src/content/locations/{industry id}/{place slug}.md
const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    // Place name for nav and breadcrumbs, e.g. "Palm Beach County"
    label: z.string(),
    // Industry file id this market belongs to
    industry: z.string(),
    // Used for areaServed in schema, e.g. "Palm Beach County, Florida"
    region: z.string(),
    summary: z.string().max(160),
    answer: z.string(),
    faqs: z.array(faq).default([]),
    status: z.enum(['active', 'paused']).default('active'),
    updated: z.coerce.date(),
  }),
});

// Lead magnet guides, one per industry, built around the question owners in that industry ask.
// File id must match the industry file id. The industry page shows the offer and form; the full
// guide lives at /guides/{id}/ (noindex, left out of the sitemap and llms.txt).
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    // Industry file id this guide belongs to
    industry: z.string(),
    // One line shown above the form on the service page
    hook: z.string().max(220),
    summary: z.string().max(160),
    // 40–70 words, shown at the top of the guide
    answer: z.string(),
    // What's inside, shown on the service page offer
    inside: z.array(z.string()).min(3).max(6),
    // What the 25-minute exploration call covers for this guide
    callAgenda: z.array(z.string()).min(2).max(5),
    status: z.enum(['active', 'paused']).default('active'),
    updated: z.coerce.date(),
  }),
});

export const collections = { services, insights, industries, locations, guides };
