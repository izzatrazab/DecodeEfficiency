
# Table of Contents

# Introduction

In this documentation, I will show you how I clone a typing speed test by [LiveChat](https://www.livechat.com/typing-speed-test/#/ "go to LiveChat typing speed test page"). I will divide this project to manageable chunks so it is easier to understand. I hope you will learn something out of this. Enjoy 🥳.

Screenshot below is the original application.

![Alt text](/src/lib/posts/livechat-typing-test-clone/LiveChat%20typing%20test.png "original typing speed test by LiveChat")

I used __Sveltekit__ (javascript framework) and __Pico CSS__ for the styles (note: demo above used Pico CSS but with slight modification, which I will not cover in this documentation as it is so small and does not changes much). 

Note: To add or remove html elements / lines of codes / functions, I use these annotations:

|Annotations|Means|
|---|---|
|✅|add|
|❌|remove|

# Setup

1. Scaffold your Sveltekit project. Refer [here](https://kit.svelte.dev/docs/creating-a-project 'go to official documentation on how to scaffold a sveltekit project') if you don't know how. 

2. Install packages, [Pico CSS](https://picocss.com/docs/ 'go to Pico CSS documentation') and [random-words](https://www.npmjs.com/package/random-words?activeTab=readme 'go to random-words page by npmjs').

```shell
pnpm install @picocss/pico random-words
```

3. Set up Pico CSS

I created +layout.svelte file in src directory and import pico here.

![+layout.svelte](/src/lib/posts/livechat-typing-test-clone/Lay%2003.png)

`src > routes > +layout.svelte`

```svelte
<script lang='ts'>
    import '@picocss/pico/css/pico.css'
</script>
```

Now setting up is done.

# Centering Contents

In `app.html`, I styled body element as below to center its contents:

`src > app.html`
```html
<style>
    body{
	    min-height: 100vh;/* stretch height to full viewport */
		display: flex;
		flex-direction: column;/* all contents in one column */
		align-items: center;/* center horizontally */
		justify-content: center;/* center vertically */
    }
</style>
```

It should center all contents now. But, I want to add main element (adding landmark is a good practice). So in +layout.svelte, I wrap `<slot/>` with main element. I also add `display:contents;` style to it (because body element already manage to center the children, so better ignore extra layout that main element has).

`src > routes > +layout.svelte`
```svelte
<main style="display: contents;">
    <slot/>
</main>
```

I add contents to `+page.svelte`:

`src > routes > +page.svelte`
```svelte
<h1>TITLE</h1>
<h1>SCOREBOARD</h1>
<h1>INPUT</h1>
```

the page will center them.

![contents are centered](/src/lib/posts/livechat-typing-test-clone/centering-contents%2001.png)

# Cloning the Title

from this:
![liveChat typing speed test title](/src/lib/posts/livechat-typing-test-clone/cloning-title-01.png)
to this:
![clone title](/src/lib/posts/livechat-typing-test-clone/cloning-title-02.png)

`src > routes > +page.svelte`

I add these two lines,

```svelte
<span class="title">typing speed test</span>✅
<h1 class="title">test your typing skills</h1>✅
<h1>TITLE</h1>❌
<h1>SCOREBOARD</h1>
<h1>INPUT</h1>
```
and style them as below.

```css
/* title */
.title{
    text-align: center; /* center text */
}
span.title{
    text-transform: uppercase; /* all uppercase */
}
h1.title::first-letter{ /* only first letter capitalize */
    text-transform:capitalize;
}
```

# Cloning the Scoreboard


## Scoreboard Layout

from this:
![LiveChat typing speed test scoreboard](/src/lib/posts/livechat-typing-test-clone/cloning-scoreboard-01.png)

to this:
![LiveChat typing speed test scoreboard](/src/lib/posts/livechat-typing-test-clone/cloning-scoreboard-02.png)

Notice in the original application's scoreboard, the countdown goes to the bottom in mobile view. I will use `flex-direction: row-reverse;` and arrange child elements in reverse so it behave the same way.


`src > routes > +page.svelte`

I add these elements (scores comes first):

```html
<div id="scoreboard">✅
	<div>
		<h1>Scores</h1>
	</div>
	<div>
		<h1>Countdown</h1>
	</div>
</div>
<h1>SCOREBOARD</h1>❌
```

and style it:

```css
#scoreboard {
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
    justify-content: center;
}

#scoreboard > div {
    padding-inline: 50px; /* temporary to add some gap*/
}

```

`flex-direction: row-reverse` __rearrange__ the children in __reverse__. That is why even though I put __Scores__ above __Countdown__, it displays __Countdown__ first. However, if __wrapping__ occurs (width is too small it push the children below) the reverse will not work and it will display __Scores__ first. This behaviour is exactly the same as the original application.

## Countdown

from this:
![LiveChat typing speed test scoreboard](/src/lib/posts/livechat-typing-test-clone/cloning-scoreboard-03.png)

to this:

## Readings

# Input Field

- Chunks
1. major layout
2. title
3. scoreboard
    1. countdown
    2. readings
4. input field