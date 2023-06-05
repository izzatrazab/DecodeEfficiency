<script lang="ts">
	import '@picocss/pico';
	import githubLogo from '$lib/logo/github.svg';
	import frontEndLogo from '$lib/logo/frontend-mentor.svg';
	import { page } from '$app/stores';
</script>

<header>
	<nav class="container">
		<ol>
			<li>
				<a href="/">DECODING EFFICIENCY</a>
			</li>
		</ol>
	</nav>
</header>
<main class="container">
	<slot />
</main>
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
				Svelte
			</a>
			and
			<a
				href="https://picocss.com/"
				target="_blank"
				rel="noreferrer"
				style="color:lightsteelblue; text-shadow: 0 0 1px #99CCFF "
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
	header {
		background: #05070891;
	}
	nav {
		justify-content: center;
	}
	nav ol {
		font-size: medium;
		font-weight: 700;
	}

	main {
		margin-top: 16px;
		flex-grow: 1;
	}
	footer {
		background:#050708;
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
</style>
