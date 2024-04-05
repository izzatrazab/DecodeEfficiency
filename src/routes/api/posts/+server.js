import { json } from '@sveltejs/kit';
import { list } from '$lib/posts/posts';
import { dev } from '$app/environment';
import fs from 'fs';
import path from 'path';

// Function to check if a file exists
function fileExists(filePath) {
 // Construct the full path to the file
 const fullPath = path.join(process.cwd(), 'static', filePath);
 return fs.existsSync(fullPath);
}

const postsNameList = list;

async function getPosts() {
	let posts = [];
	try {
		for await (const dir of postsNameList) {
			const file = await import(`../../../lib/posts/${dir}/${dir}.md`);
			let thumbnail = `/posts/thumbnails/${dir}-thumbnail.png`;

            if(dev && !fileExists(thumbnail)){
                thumbnail = `/posts/thumbnails/no-image.png`
            }

			if (file && typeof file === 'object' && 'metadata' in file) {
				const metadata = file.metadata;

				if (metadata.published || dev) {
					const post = { ...metadata, slug: dir, thumbnail: thumbnail };
					posts.push(post);
				}
			}
		}

		posts = posts.sort(
			(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
		);
		return posts;
	} catch (error) {
		console.log(error);
	}
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
