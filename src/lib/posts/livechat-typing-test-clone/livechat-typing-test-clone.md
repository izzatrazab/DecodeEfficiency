---
title: 'LiveChat Typing Test clone'
meta:
- {name: description, content: 'Typing Test'}
- {name: keywords, content: 'typing test, learn by cloning app, countdown, randomWords pakcage'}
description: 'LiveChat Typing Test app.'
date: '2024-08-03'
categories:
- sveltekit
- svelte
- clone
- css
published: true
---

<script>
	import image01 from '$lib/posts/livechat-typing-test-clone/LiveChat typing test.png';
</script>

This project is a clone of the typing speed test by LiveChat. You can check out the original application here: [LiveChat Typing Test](https://www.livechat.com/typing-speed-test/#/)

<img alt="LiveChat Typing Test screenshot" src={image01} />

__*Screenshot of Typing Speed Test by LiveChat*__

## Interface Design
- __PicoCSS__ and some customized CSS

## Countdown Timer
- __setInterval__ method with an interval of 1000 milliseconds (1 second)
- starts when a player starts typing
- in each interval, a variable with initial value of 60 will decrements by 1
- at value of 0 the interval will be terminated

## Input Field

I used a `<span>` with 'editable content' instead of an `<input>` because the `<input>` has a fixed width that can only be changed with JavaScript, making things more complicated. Using a `<span>` is a better choice because it adjusts its width as the content changes (when typing), allowing the text to move smoothly from right to left.

I used 3 types of event handler on the `<span>` element:
1. ClipboardEventHandler, on:paste
2. KeyboardEventHandler, on:keydown
3. FormEventHandler, on:input

I will explain each of the event handler I used later when I have the time. Bye for now.