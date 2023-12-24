import { json } from "@sveltejs/kit"
import { list } from '$lib/posts/posts'
const postsNameList = list

async function getPosts() {
    let posts = []
    try {
        for await (const dir of postsNameList) {
            const file = await import(`../../../lib/posts/${dir}/${dir}.md`)
            if (file && typeof file === 'object' && 'metadata' in file) {
                const metadata = file.metadata

                if (!metadata.published) continue
                const post = { ...metadata, slug: dir }
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
