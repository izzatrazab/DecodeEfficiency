<script lang="ts">
	import githubLogo from '$lib/logo/github.svg'
	import frontEndLogo from '$lib/logo/frontend-mentor.svg'
	import { categories } from '$lib/types'
	let dialog: boolean = false
</script>

<header>
	<nav class="container">
		<ol>
			<li class="home">
				<a href="/" title="HOME">DECODING EFFICIENCY</a>
			</li>
			<li class="filter">
				<button on:click={() => (dialog = true)}> CATEGORY </button>
			</li>
		</ol>
	</nav>
</header>
<main class="container">
	<slot />
</main>
<dialog open={dialog}>
	<div class="card" id="category-card" >
		<header>
			<span><strong>Categories:</strong></span>
			<button on:click={() => (dialog = false)}>
				✕
			</button>
		</header>
		<div>
			{#each categories as category}
				<a href="/category/{category}" style="display: contents;">
					<button class="outline" on:click={()=>dialog = false}>
						{category}
					</button>
				</a>
			{/each}
		</div>
	</div>
</dialog>

<footer>
	<div class="container" id="footer">
		<small>
			This website is built using
			<a
				href="https://svelte.dev"
				target="_blank"
				rel="noreferrer"
				style="color:#FF6432; text-shadow:0 0 1px #FF835A"
			>
				Sveltekit
			</a>
			<br />
			Feel free to email me for any inquiries at
			<b>
				<a href="mailto: izzatrazab@gmail.com">izzatrazab@gmail.com</a>
			</b>
			.
		</small>
		<div>
			<a href="https://github.com/izzatrazab" target="_blank">
				<img class="logo" src={githubLogo} alt="github" />
			</a>
			<a href="https://www.frontendmentor.io/profile/izzatrazab" target="_blank">
				<img class="logo" src={frontEndLogo} alt="github" />
			</a>
		</div>
	</div>
</footer>

<style>
	nav {
		justify-content: center;
	}
	ol {
		width: 100%;
		font-size: medium;
		font-weight: 700;
		text-align: center;
		position: relative;
	}
	.home {
		display: inline-block;
		position: relative;
	}
	.filter {
		position: absolute;
		right: 0;
	}
	.filter > button {
		background: none;
		border: 0;
		padding: 0;
		font-size: inherit;
		font-weight: inherit;
	}
	main {
		margin-top: 16px;
		flex-grow: 1;
	}
	footer {
		padding-top: 18px;
		padding-bottom: 18px;
	}

	footer > div {
		margin-bottom: 0;
	}

	#footer {
		display: flex;
	}
	#footer > small {
		flex: 0.8;
	}
	#footer > div {
		flex: 0.2;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;
	}
	.logo {
		box-sizing: content-box;
		aspect-ratio: 1;
		height: 24px;
		padding: 5px;
	}

	#category-card {
		aspect-ratio: 1;
		max-width: 400px;
		border-radius: var(--border-radius);
	}
	#category-card > header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#category-card > header > button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		aspect-ratio: 1;
		border-radius: 50%;
		border: none;
		font-weight:bolder;
		color: white !important;
		background-color: rgba(128, 128, 128, 0.244);
	}

	#category-card > div {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	@media (max-width: 400px) {
		ol {
			display: flex;
			justify-content: space-between;
		}
		.filter {
			position: static;
		}
	}
</style>
