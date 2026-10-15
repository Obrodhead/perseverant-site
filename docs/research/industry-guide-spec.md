# Industry guide spec (one lead magnet per industry)

Replaces the service-based guides. Each guide answers the question an OWNER in one industry is already
searching, in their words, about their business outcome (more signed cases, more move-ins, more employer
clients). It must never read like a marketing lesson for marketers. No service names as headings
("SEO", "AEO", "marketing automation", "paid social" don't appear as section titles). Marketing terms are
fine in passing when explained plainly. A competing agency should find little to take; an owner should find
a clear plan they can start this week, then see honestly where they'd want help.

Read first: docs/research/guide-spec.md (voice, hard rules, FACTS list — the only facts you may use) and
docs/research/owner-search-research-2026-10.md (what owners in each niche ask). The old service guides in the
scratchpad folder /tmp/claude-0/-home-claude-perseverant-site/dd556f28-923a-5ad4-b204-8bbdc76ff5ba/scratchpad/old-guides/ hold
industry blocks you can mine for ideas and wording (blocks look like <!-- industry:law-firms -->).

## File: src/content/guides/{industry-id}.md
```yaml
---
title: (given below)
industry: {industry-id}
hook: One sentence, max 220 chars, the promise in the owner's words.
summary: Under 160 characters.
answer: 40–70 words. Direct answer to the title question. Must make sense quoted alone.
inside:      # 4–5 concrete items in the guide
  - ...
callAgenda:  # 3–4 items the 25-minute call covers for this owner
  - ...
updated: 2026-10-15
---
```
Quote YAML strings containing ": ".

## Body: 1,300–1,700 words (excluding Sources)
- Open with the owner's situation in 2–3 short paragraphs (the real pain from the research), then the plan.
- 5–7 `##` sections phrased as the owner's sub-questions or steps. Lead each with its conclusion.
- Cover the levers that actually drive their outcome, in owner terms: where their next clients come from
  and the cost of each source; being the business Google and AI assistants name when a buyer asks; the offer
  that gets a hand raised; answering in minutes with a human; follow-up for the not-yet buyers; tracking cost
  per signed client/case/move-in/job order. Fit the order and emphasis to the industry.
- At least three usable worksheets or checklists (Markdown tables, `- [ ]` task lists, fill-in formulas).
  Example math only with "Example numbers, not benchmarks."
- Industry rules belong inline where they matter (bar rules, HIPAA and Meta health limits, FTC solar and
  review rules, Meta housing category and HOPA, CAN-SPAM and sender rules, TCPA), with "not legal advice".
- Search Essence Optimization can appear once, briefly, in plain words.
- End with `## Where do most owners get stuck?` (3 gaps as `> **Lead-in.** text` blockquotes, then one line
  inviting them to the 25-minute exploration call via [the short form at the end of this guide](#call)),
  then `## Sources`: `- Source name, "Title", Month Day, Year. [link](url)`, only sources you cite.
- No industry comment blocks. No raw HTML. "We" for Perseverant Digital, never "I".
