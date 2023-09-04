# terrenceshi.com

Classic victory lap documentation.

## Backlog:
 - Try to fix navbar blur transition
    - Not actually difficult, just have to overlay navbar on top of background with blur that fades in and out whenever needed
    - Could also see if animating blur box opacity would work
 - Should have boxes pop up on scroll (any page that requires scrolling should)
    - Just need to be able to tell when box is in view. Could technically do something with y scroll value (cant necessarily make it a 1:1 useState though)
 - Add mobile swipe listener to swap between pages
 - Improve laptop runtime
   - Turn off anti aliasing?
   - Reduce pixel ratio?
   - Possibly reduce useFrame tick rate?
 - look up use of chromatic abberation for fun

 ## Table of Contents

### Introduction
#### Mindset
After my website from last year (2022-2023 Winter), I wanted to make a website that was not only more efficient than what I had before, given that I had improved as a front-end developer a lot, but also just significantly more impressive. 

Throughout the Summer of 2023, I worked as a software engineer intern at LMI, and I realized that having a working frontend wasn't enough for me. I wanted it to be efficient, in that no line of code was useless, and robust, in that if you wanted to add something new to your website, it would be easy to do so. 

I already knew that I could make the previous website more robust, as all the art and other data was hardcoded in. Adding more art would require shifting the entire art gallery. The ideal solution would be to have a file with all the data and mapping that file to your web page.

#### Inspiration
In terms of significantly more impressive, the most impressive website I've seen was a fake one in a TV show titled "How to Sell Drugs Online (Fast)". 

https://www.youtube.com/watch?v=m1HU91k7aNw



 ### App.js


 -------
 src: https://github.com/pmndrs/gltfjsx