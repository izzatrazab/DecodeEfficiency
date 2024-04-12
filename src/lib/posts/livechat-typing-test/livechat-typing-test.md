---
title: 'LiveChat Typing Test'
meta:
- {name: description, content: 'Typing Test'}
- {name: keywords, content: 'typing test, learn by cloning app, countdown, randomWords pakcage'}
description: 'Inspired by LiveChat typing test.'
date: '2023-11-24'
categories:
- sveltekit
- svelte
- clone
- css
published: true
---

<script>
	import image01 from '$lib/posts/livechat-typing-test/LiveChat typing test.png';
	import gif01 from '$lib/posts/livechat-typing-test/word transition right to left.gif';
</script>

This project is inspired by a __[typing speed test by LiveChat](https://www.livechat.com/typing-speed-test/#/)__.

 <figure>
<img alt="LiveChat Typing Test screenshot" src={image01} />
  <figcaption>Screenshot of Typing Speed Test by LiveChat</figcaption>
</figure> 


## Interface Design
- __[PicoCSS](https://picocss.com/)__ and some customized CSS

## Countdown Timer
- __setInterval__ function with an interval of 1000 milliseconds (1 second)
- starts when a player starts typing (detected using keyboardEventHandler)
- in each interval, a variable with initial value of 60 will decrements by 1
- at value of 0 the interval will be terminated

## Input Field

- The `<span>` element with the `contenteditable` attribute is a good choice because it adjusts its width as the content changes (during typing). Typed words on the left of the input field will transition smoothly from right to left.
- <img alt="word transition from right to left" src={gif01}/>

Two types of event handler is used for the `<span>` element:
	
1. KeyboardEventHandler, `on:keydown`:
	- detect player starts typing
	- modify the events of hitting <kbd>Enter</kbd> or <kbd>Space</kbd> key
		- when `Input` is empty, hitting <kbd>Enter</kbd> and <kbd>Space</kbd> key should not register `Input` value as answer.
	<!-- - count total key pressed -->

2. FormEventHandler, `on:input`:
	- detect registered words and check for correctness
	- count total correct key pressed
