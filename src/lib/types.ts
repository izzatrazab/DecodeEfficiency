export type Categories = 'clone'|'sveltekit' | 'svelte' | 'css'  
export const categories : Categories[]= ['clone','sveltekit','svelte', 'css']
export type Post = {
	title: string
	meta: {name:string, content:string}[]
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
