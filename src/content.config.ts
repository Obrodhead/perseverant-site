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

export const collections = { services, insights, industries };
