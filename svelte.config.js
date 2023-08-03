import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/**@type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkToc],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(),mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	},
	target: '#svelte'
}

export default config
