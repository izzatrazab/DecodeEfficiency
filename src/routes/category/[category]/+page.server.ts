import type { Categories, Post } from '$lib/types'
import { categories } from '$lib/types'
import { error } from '@sveltejs/kit'
import {list } from '$lib/posts/posts'
const directories = list

async function getPostsbyCategory(category: string) {
    let posts: Post[] = []

    for await (const dir of directories) {
        const file = await import(`../../../lib/posts/${dir}/${dir}.svelte`)

        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Post, 'slug'>

            if (!metadata.published) continue
            if (!metadata.categories.includes(category as Categories)) continue

            const post = { ...metadata, slug: dir } satisfies Post
            posts.push(post)
        }
    }
    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}


export async function load({ params }) {
    try {
        if (!categories.includes(params.category as Categories))
            throw new Error("Category not Available");

        const posts: Post[] = await getPostsbyCategory(params.category)
        return { posts }
    } catch (e) {
        console.log(e);

        throw error(404, {
            message: "Category not Available"
        })
    }
}


