import type { Post } from '$lib/types'

export async function load({ params, fetch}) {
	const response = await fetch('../../api/posts', {
		body: JSON.stringify({
			category: params.category
		})

	})
	console.log(params.category);

	const posts: Post[] = await response.json()
	return {posts}
}