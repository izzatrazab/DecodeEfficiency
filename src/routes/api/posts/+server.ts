import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit"
import { list } from '$lib/posts/posts'
const postsNameList = list

async function getPosts() {
    let posts: Post[] = []
    try {
        for await (const dir of postsNameList) {
            const file = await import(`../../../lib/posts/${dir}/${dir}.md`)
            if (file && typeof file === 'object' && 'metadata' in file) {
                const metadata = file.metadata as Omit<Post, 'slug'>

                if (!metadata.published) continue
                const post = { ...metadata, slug: dir } satisfies Post
                posts.push(post)
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

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
