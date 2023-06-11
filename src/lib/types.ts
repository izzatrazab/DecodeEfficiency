export type Categories = 'sveltekit' | 'svelte' | 'project'
export const categories : string[]= ['sveltekit','svelte', 'project']
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
