// One source of truth for the brand entity. Schema, llms.txt, meta tags and the footer
// all read from here, so the name and description stay identical everywhere.
// Fields marked TODO need Owen's input before launch.

export const site = {
  name: 'Perseverant Digital',
  legalName: 'Perseverant Digital LLC',
  url: 'https://perseverantdigital.com',
  tagline: 'Lead generation for high-value services, built for AI search.',
  description:
    'Perseverant Digital is a Cleveland-based lead generation firm for businesses whose clients research carefully before they call: law firms, elective healthcare practices, home improvement companies, senior living providers, recruiting and staffing firms, and estate security firms. We combine AI search visibility, SEO, paid social, event campaigns and automation to turn attention into booked appointments.',
  email: 'connect@perseverantdigital.com',
  bookingUrl: '', // TODO: paste a scheduling link (Calendly, etc.) to show a booking button
  // Lead forms. Plain HTML forms (no JavaScript) post to Web3Forms, which emails every
  // submission to the inbox the access key was created with (connect@perseverantdigital.com).
  // Each email says which form and which page it came from. The key is public by design.
  // If the key is ever removed, forms fall back to a pre-addressed email link.
  leads: {
    web3formsKey: '001bfb3f-9795-400a-837c-9b0cd7175655',
    endpoint: 'https://api.web3forms.com/submit',
    callMinutes: 25,
  },
  location: { city: 'Cleveland', region: 'OH', country: 'US' },
  areaServed: 'United States',
  founded: '2026',
  sameAs: [
    // TODO: add the company LinkedIn page and any directory profiles
  ] as string[],
  founder: {
    name: 'Owen Brodhead', // TODO: confirm how you want your name to appear
    jobTitle: 'Founder',
    // Used in Person schema and llms.txt. Keep it factual and under ~300 characters.
    bio: 'Owen Brodhead is the founder of Perseverant Digital. He has worked across paid media, SEO, web design, content and sales since 2016, including as an integration systems architect, and approaches SEO as Search Essence Optimization: making a brand understood, not just found, by people and AI search.',
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
