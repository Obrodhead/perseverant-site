// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://perseverantdigital.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Ship CSS inside each page so crawlers and visitors get one complete response.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
});
