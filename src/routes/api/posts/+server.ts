import type { Post } from "$lib/types";
import fsp from 'fs/promises'
import { json } from "@sveltejs/kit"

async function getPosts() {
    let posts: Post[] = []
    try {
        const dirs = await fsp.readdir('src/lib/posts/', { withFileTypes: true });
        for await (const dir of dirs) {
            if (dir.isDirectory()) {
                const file = await import(`../../../lib/posts/${dir.name}/${dir.name}.svelte`)
                if (file && typeof file === 'object' && 'metadata' in file) {
                    const metadata = file.metadata as Omit<Post, 'slug'>

                    if (!metadata.published) continue
                    const post = { ...metadata, slug: dir.name } satisfies Post
                    posts.push(post)
                }
            }
        }
        posts = posts.sort((first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
        )
        return posts
    } catch (error) {
        console.log(error);
    }
}

async function getPostsbyCategory(category: string) {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/lib/posts/*/*.svelte', { eager: true })
    for (const path in paths) {
        console.log(path);
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