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
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/skills">Skills</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/about-me">About Me</a>
			</li>
		</ol>
	</nav>
	<hr />
</header>
<main class="container">
	<slot />
</main>
<hr />
<footer>
	<div class="container">
		<p>
			<small>
				Please feel free to email me for any inquiries at
				<b>
					<a href="mailto: izzatrazab@gmail.com">izzatrazab@gmail.com</a>
				</b>
				.
			</small>
		</p>
		<a href="https://github.com/izzatrazab" target="_blank">
			<img class="logo" src={githubLogo} alt="github" />
		</a>
		<a href="https://www.frontendmentor.io/profile/izzatrazab" target="_blank">
			<img class="logo" src={frontEndLogo} alt="github" />
		</a>
	</div>
</footer>

<style>
	header {
		background: #050708;
	}
	hr {
		margin: 0;
	}

	main {
		margin-top: 16px;
		flex-grow: 1;
	}

	footer {
		background: #050708;
		padding-top: 18px;
		padding-bottom: 18px;
	}
	footer > div {
		margin-bottom: 0;
	}
	footer > div > p {
		margin-bottom: 0;
	}
	.logo {
		aspect-ratio: 1;
		height: 24px;
        margin-right: 15px;
	}
</style>
