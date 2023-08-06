
# Table of Contents

# Introduction

In this documentation, I will show you how I clone a typing speed test by [LiveChat](https://www.livechat.com/typing-speed-test/#/ "go to LiveChat typing speed test page"). I will divide this project to manageable chunks so it is easier to understand. I hope you will learn something out of this. Enjoy 🥳.

Screenshot below is the original application.

![Alt text](/src/lib/posts/livechat-typing-test-clone/LiveChat%20typing%20test.png "original typing speed test by LiveChat")

I used __Sveltekit__ (javascript framework) and __Pico CSS__ for the styles (note: demo above used Pico CSS but with slight modification, which I will not cover in this documentation as it is so small and does not changes much). 

# Setup

First, scaffold your Sveltekit project. Refer [here](https://kit.svelte.dev/docs/creating-a-project 'go to official documentation on how to scaffold a sveltekit project') if you don't know how. 

Next, we need a package called [random-words](https://www.npmjs.com/package/random-words?activeTab=readme 'go to random-words page by npmjs').

```shell
npm i random-words
```

# Major Layout

# Title

# Scoreboard

## Countdown

## Readings

# Input Field

- Chunks
1. major layout
2. title
3. scoreboard
    1. countdown
    2. readings
4. input field