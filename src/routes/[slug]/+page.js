import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const app = await import(`../../lib/posts/${params.slug}/${params.slug}.svelte`)
		const post = await import(`../../lib/posts/${params.slug}/${params.slug}.md`)
		
		return {
			app: app.default,
			md: post.default,
			metadata: post.metadata
		}
	} catch (e) {
		throw error(404, {
			message: params.slug
		})
	}
}