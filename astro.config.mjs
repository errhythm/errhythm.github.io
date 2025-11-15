import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://errhythm.me',
  integrations: [
    react(),
    mdx({
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'nord',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@config': '/src/config',
        '@fonts': '/src/fonts',
        '@hooks': '/src/hooks',
        '@images': '/src/images',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
      },
    },
    ssr: {
      noExternal: ['styled-components'],
    },
  },
  output: 'static',
});
