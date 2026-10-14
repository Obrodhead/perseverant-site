---
title: Why Some Business Websites Are Invisible to ChatGPT and Claude
description: Many AI crawlers read only raw HTML and skip JavaScript. Here's how to check whether AI assistants can see your website.
answer: Crawlers from OpenAI, Anthropic and Perplexity read only the HTML your server sends and do not run JavaScript. If your website loads its main content with scripts, those AI assistants may see little or nothing, even when the page looks complete in a browser and ranks in Google. Serving content as finished HTML fixes it.
published: 2026-10-14
tags: [AI search, technical SEO]
faqs:
  - q: How can I tell if AI crawlers can read my site?
    a: View the raw page source rather than the inspected page, or load a page with JavaScript turned off. If your headings, service descriptions and bios are missing from the source, crawlers that skip JavaScript cannot see them either.
  - q: Does Google have the same problem?
    a: Less so. Googlebot renders JavaScript, though rendering can be delayed after the first crawl. Most other AI crawlers have no rendering step at all.
---

## The short version

When you open a website, your browser downloads the HTML, then runs JavaScript that may
add text, images and whole sections. A person sees the finished page. Many AI crawlers
stop after the first step.

A crawl-log study by Vercel and MERJ, published in December 2024, found that OpenAI's
GPTBot and Anthropic's ClaudeBot requested JavaScript files but did not execute them.
Perplexity's crawler behaves the same way. Googlebot is the major exception, because it
renders pages in a headless browser.

## Why service businesses are exposed

Many law firm, practice, contractor and agency websites are built on page builders or
templates that load reviews, team bios, service details or blog posts with scripts. Those
are exactly the pages an AI assistant would quote when someone asks who to hire in your city.

## What to do

1. **Check the source.** View the raw page source for your homepage, a service page and a
   team bio. Search for a sentence you can see on screen. If it isn't there, it's loaded by
   script.
2. **Serve important content as HTML.** Server-side rendering or a static site generator puts
   the full text in the first response.
3. **Allow AI crawlers in robots.txt.** Some security plugins and hosting defaults block them.
   Confirm that GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot and PerplexityBot are not
   disallowed, if you want to appear in their answers.
4. **Add schema markup.** Structured data tells crawlers who your business is, who your people
   are and what you offer, in a format they don't have to interpret.

This site follows all four. Every page is delivered as finished HTML with no client-side
JavaScript.
