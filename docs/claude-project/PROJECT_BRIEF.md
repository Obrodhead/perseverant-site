# Perseverant Digital – Project Brief

Last updated: October 14, 2026. Living reference for the Claude project. Update it when facts change.

## The business
- **Legal entity:** Perseverant Digital LLC, Ohio domestic LLC. Articles filed October 13, 2026 (Document ID 202628605660). Single member: Owen Brodhead. Awaiting state approval and entity number.
- **Statutory agent:** Owen (home address on public record). Can switch to a commercial agent later.
- **Purpose clause:** left blank (any lawful purpose), so the LLC can serve as an umbrella for future ventures.
- **Location:** Cleveland, Ohio area. Serves clients nationwide.
- **First engagement:** contracting through the LLC as client services lead with a friend's marketing company (joint venture).

## The founder
- Owen Brodhead. Since 2016: paid media, SEO, web design, content, B2B and B2C sales, ecommerce (Shopify, Amazon).
- Has run paid media and content for as many as 15 accounts at once, including B2B lead generation.
- Builds seminar and webinar campaigns, GoHighLevel automation, custom tools (for example an automated YouTube comment archive that replaced a paid archiving service).
- Integration systems architect experience. Full stack web development certificate.
- Featured guest on marketing podcasts (website and SEO essentials, lead follow-up systems, INBOUND takeaways).
- **Signature idea: Search Essence Optimization.** SEO is about how people and AI search understand a brand, not only whether they find it. "Your clients aren't just searching to find you. They're searching to understand you." The work finds the essence of the brand and meets prospects in the middle.

## Positioning
Lead generation for high-value, high-lifetime-value service businesses, built for AI search.

**Five niches:** law firms (PI, estate planning, family law, mass torts, criminal defense); elective healthcare (implants, ortho, plastic surgery, med spa, LASIK); home improvement (roofing, remodeling, HVAC, solar, windows); senior living and home care; recruiting and staffing (employer-side B2B).

**Six services:** AI Search Visibility (AEO/GEO), SEO, Paid Social Lead Generation, Seminar and Webinar Campaigns, Marketing Automation and CRM Workflows, Custom Tools and Integrations.

**Principles on the site:** match the path to the intent; respond fast and stay human; trust is decided before the first conversation; stories beat service lists; fix fundamentals first; measure by booked appointments, not clicks.

**Brand story:** the name comes from perseverance and Thoreau ("I have great faith in a seed…"). The site pairs each page with a verified Thoreau or Marcus Aurelius (George Long translation) quote, defined in `src/lib/quotes.ts`.

## Website
- **Domain:** perseverantdigital.com (bought at GoDaddy; DNS on Cloudflare). perseverent.com was bought by mistake; refund or redirect.
- **Not ours:** perseverant.com belongs to an unrelated pipeline-compliance company.
- **Stack:** Astro 7 static site, zero client-side JS, Markdown content collections, JSON-LD schema graph, generated llms.txt, llms-full.txt, robots.txt (all AI crawlers allowed) and sitemap.
- **Repo:** github.com/Obrodhead/perseverant-site (Claude GitHub App installed for push access).
- **Hosting:** Cloudflare Worker "perseverant-site" with static assets, auto-builds on push to `main`. Custom domains: perseverantdigital.com and www.
- **Contact email:** connect@perseverantdigital.com (Microsoft 365 through GoDaddy).

## Email setup (Microsoft 365 via GoDaddy, DNS at Cloudflare)
- Done: MS verification TXT `MS=ms18160923` in Cloudflare; `_dmarc` TXT kept.
- Remaining: get exact MX, SPF TXT, autodiscover CNAME (and DKIM if offered) from the Microsoft 365 admin center (Settings → Domains → perseverantdigital.com → DNS records) and add them in Cloudflare as **DNS only**. Never let GoDaddy switch DNS back to GoDaddy. Update DMARC reporting address once mail works.

## Business setup sequence (from the launch checklist)
1. LLC approval → download stamped articles.
2. EIN on IRS.gov (free) using "Perseverant Digital LLC".
3. Chase Business checking plus a "Taxes" savings account; set aside 25–30% of every payment.
4. Chase Ink Business Unlimited after the bank account exists.
5. W-9 to the joint-venture partner's company; Wave (free) for books, QBO later.
6. Solo 401(k) opened in November; 2026 employee deferral by December 31 (limit $24,500 shared with any employer 401(k)).
7. First estimated taxes January 15, 2027 (federal plus city via CCA or RITA).
8. One-hour CPA meeting before filing: Ohio Business Income Deduction, QBI, solo 401(k) employer contribution, S-corp timing.
