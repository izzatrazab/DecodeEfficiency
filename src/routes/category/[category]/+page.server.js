import { error } from '@sveltejs/kit'
import {list } from '$lib/posts/posts'
const directories = list
const categories = ['clone','sveltekit' , 'svelte' , 'css']

async function getPostsbyCategory(category) {
    let posts = []

    for await (const dir of directories) {
        const file = await import(`../../../lib/posts/${dir}/${dir}.md`)

        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata

            if (!metadata.published) continue
            if (!metadata.categories.includes(category)) continue

            const post = { ...metadata, slug: dir }
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
        if (!categories.includes(params.category))
            throw new Error("Category not Available");

        const posts = await getPostsbyCategory(params.category)
        return { posts }
    } catch (e) {
        console.log(e);

        throw error(404, {
            message: "Category not Available"
        })
    }
}


