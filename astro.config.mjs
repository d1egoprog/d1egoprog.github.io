// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { SITE_URL } from './src/consts.ts';

const deploymentBase = process.env.ASTRO_BASE_PATH || "/";

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: deploymentBase,
	// Accept both URL forms so unknown paths reach the custom 404 page.
	trailingSlash: "ignore",
	redirects: {
        "/projects": `${deploymentBase.replace(/\/$/, "")}/artifacts/`,
        "/resume-preview": `${deploymentBase.replace(/\/$/, "")}/resume/`,
        "/research-preview": `${deploymentBase.replace(/\/$/, "")}/research/`,
        "/supervising-preview": `${deploymentBase.replace(/\/$/, "")}/supervising/`,
    },
    // Development copies are noindex; publish sitemaps only for the root production build.
    integrations: [mdx(), ...(deploymentBase === "/" ? [sitemap()] : [])],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif']
		},
	],
});
