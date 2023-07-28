import type { Post } from "$lib/types";
import fsp from 'fs/promises'
import path from 'path'
import { json } from "@sveltejs/kit"

async function getPosts() {
    let posts: Post[] = []
    try {
        const directory = path.join(process.cwd(), '*')
        // const directory = path.join(process.cwd(), 'src/lib/posts/')
        const dirs = await fsp.readdir(directory, { withFileTypes: true });
        console.log(dirs);
        
        // for await (const dir of dirs) {
        //     if (dir.isDirectory()) {
        //         const file = await import(`../../../lib/posts/${dir.name}/${dir.name}.svelte`)
        //         if (file && typeof file === 'object' && 'metadata' in file) {
        //             const metadata = file.metadata as Omit<Post, 'slug'>

        //             if (!metadata.published) continue
        //             const post = { ...metadata, slug: dir.name } satisfies Post
        //             posts.push(post)
        //         }
        //     }
        // }
        
        posts = posts.sort((first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
        )
        return posts
    } catch (error) {
        console.log(error);
    }
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
