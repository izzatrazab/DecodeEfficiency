import type { Post } from '$lib/types'

export async function load({ params}) {
	const response = await fetch('../../api/posts', {
		method: 'POST',
		body: JSON.stringify({
			category: params.category
		})
	})

	const posts: Post[] = await response.json()
	return {posts}
}