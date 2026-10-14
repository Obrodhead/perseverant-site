# Perseverant Digital — Site Architecture

Working backwards from the goal: when the owner of a high-value service business asks Google,
ChatGPT, Claude, Perplexity or Gemini how to get more clients, the answer cites perseverantdigital.com. Every decision below serves that.

## What AI search and Google need from a page

1. **Content in the first HTML response.** OpenAI, Anthropic and Perplexity crawlers do not
   run JavaScript. This site ships finished HTML with zero client-side JS.
2. **A direct, quotable answer near the top.** Every service and article opens with a
   40–70 word "short answer" block. That paragraph is written to be lifted verbatim.
3. **Clear entities.** One consistent name, founder, location and description, connected in a
   single JSON-LD graph (`Organization` → `founder` `Person` → `Service` → `Article`).
4. **Freshness signals.** Every page shows and marks up a "last reviewed" date.
5. **Machine-readable summaries.** `/llms.txt` and `/llms-full.txt` are generated from the
   same Markdown files at build time, so they never drift from the site.
6. **Explicit crawler access.** `/robots.txt` names and allows the AI search crawlers.

## URL plan

| URL | Purpose | Schema |
|---|---|---|
| `/` | Positioning, services, proof, CTA | `ProfessionalService`, `WebSite`, `Person` |
| `/services/` | All active services | `ItemList`, `BreadcrumbList` |
| `/services/{slug}/` | One service: answer, who it's for, deliverables, FAQ | `Service`, `FAQPage`, `BreadcrumbList` |
| `/industries/` | All active industries | `CollectionPage`, `ItemList`, `BreadcrumbList` |
| `/industries/{slug}/` | One niche: answer, who, matching services, FAQ | `Service`, `FAQPage`, `BreadcrumbList` |
| `/insights/` | Articles index | `Blog`, `BreadcrumbList` |
| `/insights/{slug}/` | Question-led article | `BlogPosting`, `FAQPage` (if FAQs), `BreadcrumbList` |
| `/about/` | Founder, story, the name | `AboutPage`, `Person` |
| `/contact/` | Email and booking | `ContactPage` |
| `/llms.txt`, `/llms-full.txt` | AI-readable site summary and full text | — |
| `/sitemap-index.xml` | Generated sitemap | — |

## Content model (all Markdown in `src/content/`)

- **services/** — `status: active | paused` lets you add, pause or retire an offering without
  touching layouts. Paused services drop out of nav, sitemap and llms.txt automatically.
- **industries/** — the five niches, same `status` switch; each lists the services that fit.
- **insights/** — question-led articles. `draft: true` keeps one out of the build.

## Positioning (v1)

Lead generation for high-value, high-lifetime-value service businesses, built for the AI search
era. Five niches: law firms, elective healthcare, home improvement, senior living, and recruiting
and staffing. Channels (services) and niches (industries) are separate collections, so either can
change without a redesign.

## Stack

Astro (static output, no client JS) · Markdown content collections · `@astrojs/sitemap` ·
hosted on Cloudflare Pages (free) · deploys on every push to `main`.
