import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post: {metadata:Post,default:any} = await import(`../../lib/posts/${params.slug}.svelte`)
		post.metadata['slug'] = params.slug

		return {
			component : post.default,
			metadata: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}