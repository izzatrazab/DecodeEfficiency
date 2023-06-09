import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit"

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/lib/posts/*.svelte', { eager: true })


    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svelte', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>

            if (!metadata.published) continue

            const post = { ...metadata, slug } satisfies Post
            posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

async function getPostsbyCategory(category: string) {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/lib/posts/*.svelte', { eager: true })
    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svelte', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>

            if (!(metadata.categories as string[]).includes(category)) continue
            if (!metadata.published) continue
            const post = { ...metadata, slug } satisfies Post
            posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )
    
    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

export async function POST({ request }) {
    const data = await request.json()
    const posts = await getPostsbyCategory(data.category)
    return json(posts)
}