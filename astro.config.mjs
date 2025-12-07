import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://secureloop.de',
  integrations: [
    starlight({
      title: 'SECURELOOP',
      description: 'Der deutsche Wissenshub für Software Supply Chain Security',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: true,
      },
      components: {
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/rebaze',
      },
      sidebar: [
        {
          label: 'Das Framework',
          link: '/',
        },
        {
          label: 'Grundlagen',
          items: [
            { label: 'SBOM erklärt', link: '/knowledge/sbom/' },
            { label: 'Vulnerability Scanning', link: '/knowledge/vulnerability-scanning/' },
            { label: 'Software-Signierung', link: '/knowledge/software-signing/' },
          ],
        },
        {
          label: 'Compliance',
          items: [
            { label: 'NIS2', link: '/knowledge/nis2/' },
            { label: 'DORA', link: '/knowledge/dora/' },
          ],
        },
        {
          label: 'Über SECURELOOP',
          link: '/about/',
        },
        {
          label: 'Kontakt',
          link: '/contact/',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale',
            content: 'de_DE',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/logo.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/logo.png',
          },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/rebaze/secureloop-framework/edit/main/',
      },
    }),
  ],
});
