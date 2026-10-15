# Rewrite spec: tailor a guide by industry

The guide will be rendered once per industry. Readers see ONLY the industry they picked on the form, so the
guide must read as if written for that one industry. Industry ids:
law-firms, elective-healthcare, home-improvement, senior-living, recruiting-staffing, estate-security, other
("other" = the general version for anyone who didn't pick, or picked Other).

## Mechanism
Wrap industry-specific Markdown in HTML comment markers, each on its own line with a blank line before and after:

<!-- industry:law-firms -->

...markdown for law firms only...

<!-- /industry -->

A block may list several ids: `<!-- industry:law-firms,elective-healthcare -->`. No nesting. Everything outside
blocks shows to everyone, so it must be industry-neutral or naturally general.

## What to change
1. Delete the `## What changes in your industry?` section entirely.
2. Every list or table that walks through all the niches (example prompts by industry, offer bank, topic bank,
   systems lists, etc.) becomes a set of blocks: one per industry with 3–6 examples specific to that industry,
   plus an `other` block with a mixed, general set. Keep the table/list format.
3. Add one industry section right after the first `##` section: one block per industry (six blocks, plus an
   `other` block that can be short or omitted), headed `## What this looks like for [plain-language audience,
   e.g. "law firms", "elective practices", "home improvement companies", "senior living communities and home
   care agencies", "recruiting and staffing firms", "estate security firms"]`. 150–250 words each. Fold in the
   industry's material from the deleted section, the relevant facts and rules, and the specific owner pain.
   Make it feel written for them, not a template.
4. Where general prose has an industry-specific aside (e.g. "Solar companies should..."), move it into a small
   block for that industry.
5. In the `## Where do most owners get stuck?` section, you may add one industry-specific gap per industry in blocks.
6. Keep the frontmatter unchanged except `updated: 2026-10-15`. Keep Sources; it's fine that some sources only
   appear in some versions.
7. All rules in guide-spec.md still apply: facts only from its FACTS list, labeled examples, no guarantees, no
   superlatives, bar/medical caution, no PHI in ads/texts, never mention financial advisors/RIAs/wealth management.
   Don't use first person singular ("I"); write as "we" for Perseverant Digital.
8. Each rendered version should land around 1,700–2,500 words. Don't pad.
