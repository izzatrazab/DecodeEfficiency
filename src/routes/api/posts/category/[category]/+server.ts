import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'

// export async function load({ params }) {
// 	try {
// 		const post: {metadata:Post,default:any} = await import(`../../lib/posts/${params.slug}.svelte`)
// 		post.metadata['slug'] = params.slug

// 		console.log(typeof post);
		
// 		return {
// 			component : post.default,
// 			metadata: post.metadata
// 		}
// 	} catch (e) {
// 		throw error(404, `Could not find ${params.slug}`)
// 	}
// }

async function getPosts(category:string) {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/lib/posts/*.svelte', { eager: true })
    
    
    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svelte', '')

        if(file && typeof file === 'object' && 'metadata' in file && slug){
            const metadata = file.metadata as Omit<Post,'slug'>

            if(!metadata.published) continue
			if(metadata.categories.indexOf(category)!== -1)
			for (let i = 0; i < metadata.categories.length; i++) {
				console.log(metadata.categories[i]);
				if (category === metadata.categories[i]) {
					
				}
			}

            const post = {...metadata, slug} satisfies Post
            posts.push(post)   
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts

}

export async function GET({params}) {
    const posts = await getPosts(params.category)
    return json(posts)
}