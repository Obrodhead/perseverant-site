# perseverantdigital.com

The Perseverant Digital website. Astro, static HTML, zero client-side JavaScript.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Deploy (Cloudflare Pages, free)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: **Astro**. Build command `npm run build`. Output directory `dist`.
4. Under the project's Custom domains, add `perseverantdigital.com` and `www.perseverantdigital.com`.
   If the domain's DNS is not on Cloudflare, follow the prompt to add the CNAME records at your registrar.
5. Every push to `main` deploys automatically. Pull requests get preview URLs.

## After launch

- Verify the site in Google Search Console and Bing Webmaster Tools and submit `/sitemap-index.xml`.
  Bing matters beyond Bing: its index feeds Copilot and other AI products.
- Test pages in Google's Rich Results Test.

## Before launch checklist

Search the repo for `TODO` and fill each in. The important ones are in `src/site.config.ts`
(email, booking link, LinkedIn URLs) and the About page copy.

## Where things live

| Path | What |
|---|---|
| `src/site.config.ts` | Brand entity: name, founder, location, links |
| `src/content/services/` | One Markdown file per service |
| `src/content/insights/` | One Markdown file per article |
| `src/lib/schema.ts` | JSON-LD builders |
| `src/pages/llms.txt.ts`, `llms-full.txt.ts`, `robots.txt.ts` | Generated AI-facing files |
| `CLAUDE.md` | Writing and publishing rules for Claude |
