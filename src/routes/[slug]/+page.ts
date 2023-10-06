import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const app: {default:any} = await import(`../../lib/posts/${params.slug}/${params.slug}.svelte`)
		const post: {metadata:Post,default:any} = await import(`../../lib/posts/${params.slug}/${params.slug}.md`)
		
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