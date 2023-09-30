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
	import TypingTest from './typing-test.svelte'
</script>

<TypingTest/>

This project is a clone of the typing speed test by LiveChat. You can check out the original application here: [LiveChat Typing Test](https://www.livechat.com/typing-speed-test/#/)

![LiveChat Typing Test screenshot](/src/lib/posts/livechat-typing-test-clone/LiveChat%20typing%20test.png)
*Screenshot of Typing Speed Test by LiveChat*

<!-- Here are explanations on some parts of this project.
## Typing Field:

Using 3 variables, I separate typed words, current word to be typed, and untyped words.
Each words is put inside a span element. 
It consist of span elements for each words. One span element will serve as the input text field by using contenteditable attributes.  -->