// One source of truth for the brand entity. Schema, llms.txt, meta tags and the footer
// all read from here, so the name and description stay identical everywhere.
// Fields marked TODO need Owen's input before launch.

export const site = {
  name: 'Perseverant Digital',
  legalName: 'Perseverant Digital LLC',
  url: 'https://perseverant.com',
  tagline: 'Growth marketing for financial advisors, built for AI search.',
  description:
    'Perseverant Digital is a Cleveland-based marketing firm that helps financial advisors and RIAs win clients through AI search visibility, SEO, paid social, seminar and webinar campaigns, and marketing automation.',
  email: 'hello@perseverant.com', // TODO: confirm once Google Workspace is set up
  bookingUrl: '', // TODO: paste a scheduling link (Calendly, GoHighLevel, etc.) to show a booking button
  location: { city: 'Cleveland', region: 'OH', country: 'US' },
  areaServed: 'United States',
  founded: '2026',
  sameAs: [
    // TODO: add the company LinkedIn page and any directory profiles
  ] as string[],
  founder: {
    name: 'Owen Brodhead', // TODO: confirm how you want your name to appear
    jobTitle: 'Founder',
    sameAs: [
      // TODO: add your personal LinkedIn URL. This is one of the strongest entity signals.
    ] as string[],
  },
};

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/insights/', label: 'Insights' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
