# Roadmap

What's next for perseverantdigital.com. Claude: read this first, work from the top, and move items to Done with the date when finished.

## Before sharing the site
- [ ] Submit one test lead per form type (guide, call, contact) and confirm the email arrives with form and page
- [ ] Add Owen's personal LinkedIn URL to `founder.sameAs` and the company LinkedIn page to `sameAs` in `src/site.config.ts`
- [ ] Add a booking link (`bookingUrl`) so "Book a call" buttons appear
- [ ] Confirm the founder name display ("Owen Brodhead") and remove its TODO
- [ ] Owen reviews the About page copy for voice
- [ ] Shorten the homepage meta description (365 chars; add a separate SEO description under 160 in `src/site.config.ts`)
- [ ] Add shorter title tags (~60 chars) for the homepage, insights and industry pages; keep full question titles as H1s
- [ ] Strengthen the About title and the Contact meta description
- [ ] Add a social share image (Open Graph) so links preview well on LinkedIn and texts
- [ ] Finish Microsoft 365 email DNS records in Cloudflare (MX, SPF, autodiscover, DKIM) and update DMARC

## Launch
- [ ] Verify the site in Google Search Console; submit `/sitemap-index.xml`
- [ ] Verify in Bing Webmaster Tools (feeds Copilot and other AI products); submit the sitemap
- [ ] Turn on Cloudflare Web Analytics (free, no cookie banner needed)
- [ ] Run Google's Rich Results Test on the home, a service, an industry and an article page
- [ ] Create a Google Business Profile for Perseverant Digital (service-area business) with matching name and description

## Content engine
- [ ] Publish two question-led insights per month, rotating across the five industries
- [ ] Add industry-by-service pages for the strongest combinations (for example "AI search visibility for law firms")
- [ ] Turn each podcast appearance and new idea into an insight that credits Search Essence Optimization
- [ ] Build a monthly check of how ChatGPT, Claude, Perplexity and Google AI Overviews answer target questions, and log results

## Later
- [ ] Validate the estate security niche: keyword volumes and CPCs (safe room, panic room, residential security assessment) for Palm Beach County; check the local pack and AI answers; talk to 5 local architects or estate managers
- [ ] Consider a second estate security market page (Greater Los Angeles: wildfire rebuild hardening)
- [ ] Move lead forms from Web3Forms to the CRM (or a Cloudflare Worker) once a CRM is chosen; keep the `form` and `page` fields
- [ ] Add an automated reply email that sends the guide link (Web3Forms autoresponder is a paid feature, or do it in the CRM)
- [ ] Owen reviews the six industry guides for voice; legal and healthcare guides reviewed before running ads to them
- [ ] Case studies once clients approve them (real results only)
- [ ] Redirect perseverent.com to perseverantdigital.com if it isn't refunded

## Done
- 2026-10-15: Fixed large gaps on service, industry and article pages (prose rows were stretching to the sidebar's height)
- 2026-10-15: Homepage hero: new H1 ("Be understood before you're chosen") and growth-rings art with converging query lines (CSS/SVG only, desktop only, respects reduced motion)
- 2026-10-15: Added wrangler.jsonc (static assets from dist/) after newer wrangler versions began failing deploys without one
- 2026-10-15: Removed trailing periods from page H1s and made H1s 35% smaller
- 2026-10-15: Replaced the six service guides with one guide per industry, built on the question owners search (on industry pages; service pages link to them). Forms back to zero JavaScript. Old guide URLs redirect.
- 2026-10-15: Guides cut about 50%; every version downloadable as a branded PDF (`npm run pdfs`, files in public/downloads/, noindex via _headers)
- 2026-10-15: Guides now tailored by industry: the form sends each lead to the version for the industry they pick (/guides/{service}/{industry}/)
- 2026-10-15: Web3Forms access key added; lead forms live
- 2026-10-15: Six lead magnet guides, one per service page (`src/content/guides/`, served at /guides/{id}/, noindex), with a no-JS request form on each service page, a 25-minute exploration call form at the end of each guide, a contact page form and /thanks/. Every lead email names the form and page. Research in `docs/research/`.
- 2026-10-14: Site built and launched on perseverantdigital.com (Astro, Cloudflare, GitHub auto-deploy)
- 2026-10-14: Repositioned around five high-LTV niches; industries pages added
- 2026-10-14: Contact email set to connect@perseverantdigital.com
- 2026-10-14: About page rewritten around Search Essence Optimization; founder bio in schema and llms.txt
- 2026-10-14: Thoreau and Marcus Aurelius quotes paired to each page
- 2026-10-14: Added sixth industry, Estate security, plus a Palm Beach County local page (new `locations` collection at /industries/{industry}/{place}/)
- 2026-10-14: Drafted insight (unpublished, draft: true): Is HubSpot still worth it for a service business in 2026?
- 2026-10-14: New Growth rings logo in the header and as the favicon
- 2026-10-14: Removed the YouTube comment archive example from the Custom Tools service page
- 2026-10-14: Removed all GoHighLevel mentions from the site (Marketing Automation page now says CRM)
