// Public-domain quotes from Henry David Thoreau and Marcus Aurelius (George Long translation, 1862),
// each paired with the page whose message it fits. Every page shows one in the footer.
// Verify wording against a primary source before adding new ones.

export type Quote = { text: string; author: string; source: string };

export const quotes = {
  seed: {
    text: 'I have great faith in a seed. Convince me that you have a seed there, and I am prepared to expect wonders.',
    author: 'Henry David Thoreau',
    source: 'The Dispersion of Seeds',
  },
  see: {
    text: 'The question is not what you look at, but what you see.',
    author: 'Henry David Thoreau',
    source: 'Journal, August 5, 1851',
  },
  aim: {
    text: 'In the long run men hit only what they aim at.',
    author: 'Henry David Thoreau',
    source: 'Walden',
  },
  simplify: {
    text: 'Simplify, simplify.',
    author: 'Henry David Thoreau',
    source: 'Walden',
  },
  lookWithin: {
    text: 'Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.',
    author: 'Marcus Aurelius',
    source: 'Meditations 7.59',
  },
  beSuch: {
    text: 'No longer talk about the kind of man that a good man ought to be, but be such.',
    author: 'Marcus Aurelius',
    source: 'Meditations 10.16',
  },
  fewThings: {
    text: 'Occupy thyself with few things, says the philosopher, if thou wouldst be tranquil.',
    author: 'Marcus Aurelius',
    source: 'Meditations 4.24',
  },
  promontory: {
    text: 'Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.',
    author: 'Marcus Aurelius',
    source: 'Meditations 4.49',
  },
  convince: {
    text: 'If any man is able to convince me and show me that I do not think or act right, I will gladly change.',
    author: 'Marcus Aurelius',
    source: 'Meditations 6.21',
  },
  morning: {
    text: 'In the morning when thou risest unwillingly, let this thought be present—I am rising to the work of a human being.',
    author: 'Marcus Aurelius',
    source: 'Meditations 5.1',
  },
} satisfies Record<string, Quote>;

// Exact paths first, then prefixes. Anything unmatched gets the seed.
const byPath: Record<string, keyof typeof quotes> = {
  '/': 'seed',
  '/about/': 'beSuch',
  '/contact/': 'morning',
  '/services/': 'aim',
  '/services/ai-search-visibility/': 'see',
  '/services/seo/': 'seed',
  '/services/paid-social/': 'aim',
  '/services/seminar-webinar-campaigns/': 'beSuch',
  '/services/marketing-automation/': 'fewThings',
  '/services/custom-tools/': 'simplify',
};

const byPrefix: [string, keyof typeof quotes][] = [
  ['/industries/', 'promontory'],
  ['/insights/', 'convince'],
];

export function quoteFor(path: string): Quote {
  const exact = byPath[path];
  if (exact) return quotes[exact];
  const prefix = byPrefix.find(([p]) => path.startsWith(p));
  return quotes[prefix ? prefix[1] : 'seed'];
}
