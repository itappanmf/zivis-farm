// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm the public domain before launch.
  site: 'https://zivisfarm.com',

  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },
});
