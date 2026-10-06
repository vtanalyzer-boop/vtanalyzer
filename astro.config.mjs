// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vtanalyzer.site',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline ALL page CSS into the HTML <head>.
    //
    // `'auto'` only inlines stylesheets under ~4 KB. This site's Tailwind +
    // @font-face CSS is ~39 KB, so under `'auto'` it was still shipped as a
    // separate <link rel="stylesheet"> — a render-blocking request that also
    // sits at the top of the network dependency chain (HTML -> CSS -> fonts).
    // `'always'` removes that request entirely. With only ~13 small static
    // pages the lost cross-page CSS caching is a non-issue (brotli'd CSS is
    // ~7 KB per page).
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
