// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vtanalyzer.site',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline small page stylesheets directly into the HTML instead of a
    // separate <link rel="stylesheet"> request, removing a render-blocking
    // network round trip before First/Largest Contentful Paint.
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
