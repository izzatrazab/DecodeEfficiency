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

- `<span>` element with contenteditable attribute. It is a good choice because it adjusts its width as the content changes (during typing). Typed words on the left of the input field the will transition smoothly from right to left.

I used 3 types of event handler on the `<span>` element:

1. ClipboardEventHandler, `on:paste`
	- block text pasting event 
	
2. KeyboardEventHandler, `on:keydown`:
	- detect player starts typing
	- prevent some default event such as hitting <kbd>Enter</kbd> key or hitting <kbd>spacebar</kbd> when input is empty
	- count total key pressed

3. FormEventHandler, on:input

I will explain no. 2, and 3 when I have the time. Bye for now.
