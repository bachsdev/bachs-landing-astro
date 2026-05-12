// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dualmark from '@dualmark/astro';

export default defineConfig({
  output: 'static',
  site: 'https://bachs.io',
  integrations: [
    react(),
    dualmark({
      siteUrl: 'https://bachs.io',
    }),
  ],
  redirects: {
    '/beta': '/early-access',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
