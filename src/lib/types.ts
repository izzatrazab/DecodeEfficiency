export type Categories = 'clone'|'project'|'sveltekit' | 'svelte' | 'css'  
export const categories : Categories[]= ['clone', 'project','sveltekit','svelte', 'css']
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
