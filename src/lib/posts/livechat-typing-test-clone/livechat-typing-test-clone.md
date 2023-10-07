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
I used __PicoCSS__ as the base style and customized the application using __vanilla CSS__. There are some slight differences here and there in the height and width of elements, but the appearance still remains similar to the originals.

## Countdown Timer
I used the __setInterval__ method with an interval of 1000 milliseconds (1 second). There is a variable called __'seconds'__ with a value of __60 that decrements by 1 in each interval__. If the player starts typing, the interval will begin. When 'seconds' reaches a value of __0, the interval will be terminated__ using the __clearInterval__ method.


<!-- Here are explanations on some parts of this project.
## Typing Field:

Using 3 variables, I separate typed words, current word to be typed, and untyped words.
Each words is put inside a span element. 
It consist of span elements for each words. One span element will serve as the input text field by using contenteditable attributes.  -->