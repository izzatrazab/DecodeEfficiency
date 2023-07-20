<script lang="ts">
	import githubLogo from '$lib/logo/github.svg'
	import frontEndLogo from '$lib/logo/frontend-mentor.svg'

	let dialog: boolean = false
</script>
<header>
	<nav class="container">
		<ol>
			<li class="home">
				<a href="/" title="HOME">DECODING EFFICIENCY</a>
			</li>
			<li class="filter">
				<button on:click={() => (dialog = true)}>
					CATEGORY
				</button>
			</li>
		</ol>
	</nav>
</header>
<main class="container">
	<slot />
</main>
<dialog open={dialog}>
	<p>Greetings, one and all!</p>
	<form method="dialog">
		<button on:click={() => (dialog = false)}>OK</button>
	</form>
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
			and
			<a
				href="https://picocss.com/"
				target="_blank"
				rel="noreferrer"
				style="color:var(--contrast-hover); text-shadow: 0 0 1px #99CCFF "
			>
				Pico CSS.
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
