import { error } from "@sveltejs/kit"

export async function load({ params }) {

    try {
        const post = await import(`../../lib/posts/${params.slug}.svelte`)
        
        return {
            content: post.default,
            category: post.category
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }

}