export type Categories = 'clone'|'project'|'sveltekit' | 'svelte'  
export const categories : Categories[]= ['clone', 'project','sveltekit','svelte']
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
