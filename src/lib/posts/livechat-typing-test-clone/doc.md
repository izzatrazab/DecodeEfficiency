
# Table of Contents

# Introduction
## LiveChat Typing Test

![Alt text](/src/lib/posts/livechat-typing-test-clone/LiveChat%20typing%20test.png "a title")

- original application (liveChat typing test)
- tools

# Setup

## 1. Scaffold
```shell
pnpm create svelte@latest livechat-typing-test-clone
cd livechat-typing-test-clone
pnpm install
pnpm run dev
```

## Package
random-word

# Major Layout

```javascript
function preventSpacebarScrolling(e: any) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault()
	}
}
```

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