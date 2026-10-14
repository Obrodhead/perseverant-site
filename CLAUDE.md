# Working on perseverant.com

Instructions for Claude (and anyone else) editing this site. Read ARCHITECTURE.md for the why.

## Publishing workflow

Publishing = committing a Markdown file to `main`. Cloudflare Pages rebuilds and deploys.
Never hand-edit HTML for content. Layouts, schema, sitemap and llms.txt all regenerate.

## Add an article

Create `src/content/insights/{question-as-slug}.md`:

```yaml
---
title: The question a prospect would actually ask, phrased naturally
description: Under 160 characters. Used for meta description and llms.txt.
answer: 40–70 words. Answer the question completely in the first sentence, then add the key qualifier. Must make sense quoted alone, with no "as mentioned above".
published: YYYY-MM-DD
updated: YYYY-MM-DD   # set whenever the substance changes
tags: [topic, topic]
faqs:
  - q: A follow-up question
    a: A complete two- or three-sentence answer.
draft: false
---
```

Body rules:
- Use `##` headings phrased as the sub-questions readers have.
- Lead each section with its conclusion. Short paragraphs.
- Cite specific facts with a named source and date. Never invent statistics, client results or quotes.
- No guaranteed outcomes, unverifiable superlatives ("best lawyer in Ohio") or invented testimonials.
  Legal content must stay reviewable under state bar advertising rules; healthcare content never
  implies patient data use and avoids promising results.

## Add, pause or retire an industry

Industries live in `src/content/industries/`, one file each, with the same `status: active | paused`
switch as services. `services:` lists the service file ids that fit, in priority order; those pages
cross-link automatically. Never mention financial advisors or advisory firms anywhere on the site.

## Add, pause or retire a service

- Add: copy any file in `src/content/services/`, edit frontmatter and body, set `order`.
- Pause: set `status: paused`. It disappears from nav, sitemap and llms.txt; the file stays.
- Retire: delete the file, and add a redirect in `public/_redirects` (`/services/old/ /services/ 301`).

## Entity consistency

Brand name, legal name, founder, location and description live only in `src/site.config.ts`.
Change them there, never in page copy, so schema and llms.txt stay identical to the page.

## Before committing

Run `npm run build`. The build fails on frontmatter that breaks the schema in
`src/content.config.ts` (for example a `summary` over 160 characters).

## Never

- Add client-side JavaScript that renders content. AI crawlers do not run it.
- Block AI crawlers in `robots.txt` without Owen's explicit say-so.
- Remove the short-answer block from a service or article template.
