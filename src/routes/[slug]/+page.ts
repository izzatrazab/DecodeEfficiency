import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../lib/posts/${params.slug}.svelte`)

		return {
			content: post.default,
			post: post.post
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}