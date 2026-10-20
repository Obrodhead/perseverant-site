# Lead magnet guide spec (shared by all six guides)

Perseverant Digital (perseverantdigital.com) is a Cleveland-based lead generation firm for high-value service
businesses: law firms (PI, estate planning, family law, mass torts, criminal defense), elective healthcare
(implants, ortho, plastic surgery, med spa, LASIK), home improvement (roofing, remodeling, HVAC, solar, windows),
senior living and home care, recruiting and staffing (employer-side B2B), and estate security / safe room firms.
Founder Owen Brodhead. Signature idea: Search Essence Optimization — clients aren't just searching to find you,
they're searching to understand you; the work finds the essence of the brand and meets prospects in the middle.
Other principles: measure by booked appointments, not clicks; respond fast and stay human; fix fundamentals
before adding tools; trust is decided before the first conversation.

## The job of each guide
A lead magnet for business OWNERS. It must genuinely answer the question that brought them (real value, real
worksheets they can use today), then be honest about the last stretch that needs tools, repeated data
collection, engineering or experience they don't have — which is what the 25-minute exploration call is for.
Never withhold artificially or bait-and-switch. The page template automatically adds the call form after the
body, so the body should end with the "stuck" section then Sources. You may link to the form with
[the short form at the end of this guide](#call) once or twice.

## File format — write exactly one file: src/content/guides/{service-id}.md
```yaml
---
title: The guide name (short, concrete, e.g. "The AI Answer Audit")
service: {service-id}
hook: One sentence, max 220 chars, the promise to the owner.
summary: Under 160 characters. Meta description.
answer: 40–70 words. The direct answer to the core question. Must make sense quoted alone.
inside:            # 4–6 items, concrete deliverables in the guide (e.g. "A 12-prompt worksheet for your industry")
  - ...
callAgenda:        # 3–4 items, what the 25-minute call covers for this guide's reader
  - ...
updated: 2026-10-15
---
```
Quote YAML strings that contain a colon followed by a space.

## Body
- 1,800–2,600 words of Markdown. `##` headings phrased as steps or the owner's sub-questions. Lead each
  section with its conclusion. Short paragraphs, short sentences, active voice, no hype, no exclamation marks.
- Use worksheets: Markdown tables to fill in, task lists (`- [ ] item`), and fill-in formulas.
- Include a `## What changes in your industry?` section with a `###` for each of the six niches (law firms,
  elective healthcare, home improvement, senior living and home care, recruiting and staffing, estate security),
  2–4 sentences each, specific.
- Near the end: `## Where do most owners get stuck?` — 3–5 honest gaps (bolded lead-in each), written as
  `> ` blockquote paragraphs, then one plain line inviting them to the 25-minute exploration call.
- End with `## Sources` — bulleted list, each `Source name, "Title", Month Day, Year. [link](url)`.
- No raw HTML. No images. Do not repeat the answer text verbatim in the body.

## Hard rules (non-negotiable)
- Never invent statistics, client results, testimonials or quotes. Only use facts from the FACTS list below,
  attributed with source and date, and only the ones relevant. Vendor or agency studies are labeled as such.
- Example math is fine only when clearly labeled "Example numbers, not benchmarks."
- No guaranteed outcomes, no "best"/"#1"/unverifiable superlatives. No client names. Never mention financial
  advisors, advisory firms, RIAs, wealth management, or any past/current employer of Owen.
- Legal content stays reviewable under state bar advertising rules (no "specialist/expert" claims for lawyers,
  no outcome promises). Healthcare content never suggests using patient data in ads; keep PHI out of ad
  platforms, analytics and texts. Compliance items are factual, with a one-line "not legal advice" note.
- Do not use the "78% buy from the first responder" stat. Do not credit "21x"/"100x" to HBR. Do not say the
  FCC one-to-one consent rule is in effect.

## FACTS (verified; use only these, with attribution)
AI search & local
- Google: AI Mode surpassed 1 billion monthly users; AI Mode and AI Overviews brought together. Sundar Pichai, Alphabet Q2 2026 earnings remarks, July 22, 2026. https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/
- OpenAI: ChatGPT has more than 900 million weekly active users. OpenAI, "Scaling AI for everyone," Feb 27, 2026. https://openai.com/index/scaling-ai-for-everyone/
- Pew Research Center, July 22, 2025: Google users clicked a traditional result on 8% of visits when an AI summary appeared vs 15% without; clicked a link inside the summary on 1% of visits. https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- Ahrefs, Feb 4, 2026: AI Overviews correlated with a 58% lower click-through rate for the top-ranking page (Dec 2023 vs Dec 2025). Correlation, not cause. https://ahrefs.com/blog/ai-overviews-reduce-clicks-update
- Seer Interactive, Nov 4, 2025: brands cited in an AI Overview earned 35% more organic clicks than those not cited (3,119 informational queries, 42 clients). https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update
- BrightLocal Local Consumer Review Survey 2026, Feb 11, 2026 (1,002 US adults): use of ChatGPT and other AI tools for local recommendations rose from 6% to 45%; 97% read reviews for local businesses; 68% require at least 4 stars; 31% only use businesses rated 4.5+; 47% won't use a business with fewer than 20 reviews; 89% expect owners to respond to reviews; 50% put off by templated replies. https://www.brightlocal.com/research/local-consumer-review-survey/
- Vercel, Dec 17, 2024: none of the major AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot and others) render JavaScript; Gemini uses Googlebot's infrastructure and does. https://vercel.com/blog/the-rise-of-the-ai-crawler
- OpenAI crawler docs: sites opted out of OAI-SearchBot will not be shown in ChatGPT search answers; GPTBot (training) is controlled separately. https://developers.openai.com/docs/bots
- Google Business Profile Help: local results are based mainly on relevance, distance and prominence; more reviews and positive ratings can help; there's no way to request or pay for a better local ranking. https://support.google.com/business/answer/7091
Speed to lead & events
- Harvard Business Review, "The Short Life of Online Sales Leads" (Oldroyd, McElheran, Elkington), March 2011: audit of 2,241 US companies — 37% responded to a web lead within an hour, 23% never responded; average response 42 hours. Firms that contacted leads within an hour were nearly seven times as likely to qualify them as those that waited longer (from a separate data set of 1.25M leads). https://hbr.org/2011/03/the-short-life-of-online-sales-leads
- ON24 (enterprise webinar platform), June 19, 2026: average registrant-to-attendee conversion 60% in its 2025 data; mostly B2B enterprise events. https://www.on24.com/blog/key-takeaways-from-the-webinar-benchmarks-report/
- ON24 blog, Nov 26, 2025 (advice): promote 2–3 weeks out; remind one week, one day and 15 minutes before. https://www.on24.com/blog/best-time-day-of-the-week-to-host-a-webinar/
Meta, email, compliance
- Meta Marketing API docs: Special Ad Categories include housing, employment, credit (and financial products); for these, age targeting is fixed at 18–65+, gender/ZIP targeting restricted, lookalike audiences unavailable. https://developers.facebook.com/docs/marketing-api/audiences/special-ad-category
- Search Engine Land, Mar 11, 2025: Meta's 2025 restrictions on health and wellness advertisers can block optimization toward mid- and lower-funnel events (e.g. purchases, scheduling); in-app lead forms affected least. https://searchengineland.com/meta-ads-restrictions-health-wellness-campaigns-453094
- Google, email sender guidelines: from Feb 1, 2024, senders of 5,000+ messages a day to Gmail need SPF, DKIM and DMARC, one-click unsubscribe, and spam rate under 0.30% (aim below 0.10%). https://support.google.com/mail/answer/81126 ; Yahoo similar, honor unsubscribes within 2 days. https://senders.yahooinc.com/best-practices/
- FTC CAN-SPAM guide: the law makes no exception for business-to-business email; requires accurate headers, a postal address and an opt-out honored within 10 business days. https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- TCPA: Eleventh Circuit vacated the FCC one-to-one consent rule on Jan 24, 2025 (Kelley Drye). Prior express written consent still required for autodialed/prerecorded marketing calls and texts. Since April 11, 2025 consumers can revoke consent by any reasonable means (e.g. replying STOP or QUIT) and opt-outs must be honored within 10 business days; the "revoke-all" provision is delayed to Jan 31, 2027. https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/eleventh-circuit-vacates-tcpa-11-consent-rule ; https://www.burr.com/telephone-consumer-protection-act/the-fcc-delays-effective-date-of-tcpa-revoke-all-rule-until-january-31-2027
- FTC rule on consumer reviews and testimonials, finalized August 2024: bans fake reviews (including AI-generated), buying reviews, incentives conditioned on positive sentiment, undisclosed insider reviews and review suppression. (Morgan Lewis, Aug 26, 2024) https://www.morganlewis.com/pubs/2024/08/ftc-issues-final-rule-on-consumer-reviews-and-testimonials
Law firms
- iLawyer Marketing (a legal marketing agency) 2026 consumer survey of 1,110 US adults: share using ChatGPT to research attorneys rose from 28.1% (2025) to 41.9% (2026); Google fell from 86.7% to 71.9%. (press release, 2026) https://napavalleyregister.com/online_features/press_releases/google-usage-for-attorney-research-drops-15-points-as-chatgpt-climbs-to-42/article_01abf5f7-54f7-5f3a-bd97-5d9d739b88bf.html
- Clio (UK), Legal Trends client intake guide, Mar 24, 2025: in a secret-shopper test of 500 firms, 48% could not be reached by phone; 33% of emailed firms responded. https://www.clio.com/uk/guides/client-intake-legal-trends/
- ABA Model Rules: 7.1 no false or misleading communications; 7.2 may pay reasonable costs of advertising but not for recommendations; specialist claims need certification; 7.3 limits live person-to-person solicitation. Florida Bar requires most ads be filed for review at least 20 days before first use (websites exempt). https://www.floridabar.org/ethics/etad/advertising-filing-requirements/ Texas requires filing with the Advertising Review Committee within 10 days of first use. https://www.legalethicstexas.com/resources/rules/texas-disciplinary-rules-of-professional-conduct/filing-requirements-for-advertisements-and-solicitation-communications/ Florida Bar Ethics Opinion 24-1 (Jan 2024): AI intake chatbots should disclose they are AI and not give legal advice (Hinshaw, Feb 5, 2024). https://www.hinshawlaw.com/en/insights/lawyers-for-the-profession-alert/florida-bar-advisory-opinion-24-1-gives-green-light-to-generative-ai-use-by-lawyers-with-four-ethical-caveats Texas HB 2733 (eff. Sept 1, 2025) extends barratry law to social media and electronic messages. https://capitol.texas.gov/tlodocs/89R/billtext/html/HB02733S.htm
Elective healthcare
- ASPS, Sept 1, 2026: cosmetic surgical procedure volume rose 7% in 2025 vs 2024; facelifts +13%; patients 66+ up 24%; ages 36–55 nearly half of cosmetic procedures. https://www.plasticsurgery.org/news/press-releases/lift-procedures-led-growth-as-demand-for-restoration-drove-plastic-surgery-in-2025-new-asps-report-reveals
- ADA Health Policy Institute (ADA News, Oct 1, 2025): capacity is opening up and dentists are less busy; appointment wait times falling. https://adanews.ada.org/ada-news/2025/october/fiscal-squeeze-on-dental-practices-continues/
- HHS OCR tracking technology guidance: on June 20, 2024 a federal court (AHA v. Becerra) vacated the part covering unauthenticated public pages; HHS withdrew its appeal Aug 29, 2024. Tracking on patient portals, scheduling and other pages that transmit PHI is still covered; vendors handling PHI need a BAA. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html
Home improvement
- Harvard JCHS LIRA, Apr 15, 2026: owner-occupied improvement and repair spending projected from $509B (Q4 2025) to $518B (Q4 2026), growth around 1.6–2.1%. https://www.jchs.harvard.edu/press-releases/remodeling-growth-set-downshift-late-2026
- FTC business blog, Aug 7, 2024: solar sellers must disclose total cost and financing terms; no overstated savings or tax credits; "free solar" claims flagged as scams. https://search.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam
Senior living & home care
- NIC MAP, July 20, 2026: senior housing occupancy 89.9% in Q2 2026; assisted living 88.4%, independent living 91.3%. https://www.nic.org/blog/senior-housing-occupancy-climbs-in-second-quarter-2026/
- Senior Housing News, Feb 12, 2024, on Bild & Co. mystery shops (250+ in 2023): 53% of web inquiries got no response within 2 hours; 13% never got a response; inquiry-to-tour averaged 22%. https://seniorhousingnews.com/2024/02/12/senior-living-operators-level-up-sales-to-beat-alarming-trends-in-conversions/
- Aline (senior living CRM vendor) 2024 Benchmark Report, Mar 4, 2025: web leads often need 3–4 touches to get a response; a move-in takes about 28 sales activities. https://alineops.com/blog/takeaways-2024-aline-benchmark-report/
- Senior Housing News: one operator received 465 referral-site leads in 2024 that produced 12 move-ins and cancelled the contracts. https://seniorhousingnews.com/?p=49827
- Senior housing ads can fall under Meta's housing Special Ad Category (see Meta). 55+ housing claims depend on the Housing for Older Persons Act exemption (NAHB, Nov 30, 2021). https://www.nahb.org/blog/2021/11/Advertising-Guidelines-for-Age-Restricted-Communities-Under-the-FHA
- Activated Insights (formerly Home Care Pulse) 2024 Benchmarking Report via Home Health Care News, Aug 2024: caregiver turnover 79.2%; 63.3% of providers turned down cases in 2023 because they couldn't staff them. https://homehealthcarenews.com/2024/08/caregiver-turnover-referral-rejections-continue-to-increase-in-home-care/
Recruiting & staffing
- Staffing Industry Analysts, US Staffing Industry Forecast Sept 2026 update (Sept 6, 2026): US staffing market to grow 2.4% in 2026 to $183.1 billion. https://www.staffingindustry.com/research/research-reports/americas/us-staffing-industry-forecast-september-2026-update
- Bullhorn GRID 2025 (1,500+ recruitment professionals) via SIA, Mar 25, 2025: firms focused on full-cycle automation in 2024 were more than twice as likely to see revenue growth. https://www.staffingindustry.com/editorial/engineering-staffing-report/staffing-firms-using-automation-twice-as-likely-to-grow-revenue-study-finds
- Job ads on Meta fall under the employment Special Ad Category; ads selling services to employers generally don't, but check each campaign.
Estate security
- ASIS International, April 2025: a professional threat assessment typically costs $25,000 to $50,000. https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2025/april/enterprise-ep-spending/
Industrial services (added October 20, 2026)
- TREW Marketing and GlobalSpec, 2026 State of Marketing to Engineers (press release Mar 25, 2026): engineers spend 62% of the buying journey researching online; 53% say brand familiarity influenced their most recent purchase; 70% more likely to choose the better-known brand between technically similar solutions; trust in generative AI answers 4.7/10 (4.4 in 2025). https://www.prnewswire.com/news-releases/engineers-spend-62-of-the-buying-journey-researching-online-new-study-by-trew-marketing-globalspec-shows-how-ai-brand-visibility-expertise-drive-vendor-selection-302724650.html
- Napier, May 27, 2026, on the same report: more than 1,100 engineers and technical professionals surveyed; 69% use generative AI during some part of the purchasing process; engineers favor email over phone outreach. https://www.napierb2b.com/2026/05/new-state-of-marketing-to-engineers-report-reveals-insights-into-ai/
- 6sense 2025 B2B Buyer Experience Report (nearly 4,000 B2B buyers; vendor study): first contact at 61% of the journey (down from about 69%); 79% of engagements buyer-initiated; about 3.6 shortlist spots filled on day one; winner came from the day-one shortlist 95% of the time; first vendor contacted won 77% of the time. https://6sense.com/buyer-experience-report/
- ISNetworld contractors page (accessed Oct 20, 2026): 90,000 contractor and supplier subscribers, searchable by 900 hiring clients; contractors submit safety, quality, insurance and training information. https://www.isnetworld.com/contractors
- Siemens, The True Cost of Downtime 2024: a large plant loses an average of 27 hours a month to unplanned downtime, down from 39 in 2019; unplanned downtime costs the world's 500 biggest companies 11% of revenue (about $1.4 trillion). https://assets.new.siemens.com/siemens/assets/api/uuid:1b43afb5-2d07-47f7-9eb7-893fe7d0bc59/TCOD-2024_original.pdf
- LinkedIn Marketing Solutions (accessed Oct 20, 2026): targeting by job title, company, industry and seniority; company and contact list targeting; retargeting and matched audiences. https://business.linkedin.com/marketing-solutions/ad-targeting
