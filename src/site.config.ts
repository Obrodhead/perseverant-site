// One source of truth for the brand entity. Schema, llms.txt, meta tags and the footer
// all read from here, so the name and description stay identical everywhere.
// Fields marked TODO need Owen's input before launch.

export const site = {
  name: 'Perseverant Digital',
  legalName: 'Perseverant Digital LLC',
  url: 'https://perseverant.com',
  tagline: 'Lead generation for high-value services, built for AI search.',
  description:
    'Perseverant Digital is a Cleveland-based lead generation firm for businesses where one client is worth a lot: law firms, elective healthcare practices, home improvement companies, senior living providers, and recruiting and staffing firms. We combine AI search visibility, SEO, paid social, event campaigns and automation to turn attention into booked appointments.',
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
  { href: '/industries/', label: 'Industries' },
  { href: '/insights/', label: 'Insights' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
