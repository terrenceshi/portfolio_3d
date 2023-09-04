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

## Introduction
### Mindset
After my website from last year (2022-2023 Winter), I wanted to make a website that was not only more efficient than what I had before, given that I had improved as a front-end developer a lot, but also just significantly more impressive. 

Throughout the Summer of 2023, I worked as a software engineer intern at LMI, and I realized that having a working frontend wasn't enough for me. I wanted it to be efficient, in that no line of code was useless, and robust, in that if you wanted to add something new to your website, it would be easy to do so. 

I already knew that I could make the previous website more robust, as all the art and other data was hardcoded in. Adding more art would require shifting the entire art gallery. The ideal solution would be to have a file with all the data and mapping that file to your web page.

### Inspiration
In terms of significantly more impressive, the most impressive website I've seen was a fake one in a TV show titled "How to Sell Drugs Online (Fast)". 

https://www.youtube.com/watch?v=m1HU91k7aNw

For context, our main character is struggling to remake the frontend for his dark web drug trading business. He then gets a message which shows his competitor with a crazy good website. It's a little bit nonsensical, because the website was definitely made with visual effects and not made as an actual website, but this inspired me to try and put my website into a 3D environment.

However, that alone was not an idea. I had to rack my brain for something more. Somehow, I made the connection that I could look at TV show openings for inspiration. Then, I saw Arcane's intro.

https://www.youtube.com/watch?v=YDjVH8cxrCQ

I knew that I could make each web page a scene like how Arcane pans through sculptures of scenes. If I could match even a fraction of how cool Arcane's sculptures look, I would have a cool website. The rest is then history.

### App.js
Like any other react app, everything runs through App.js. App.js handles
 - Resizing window dimensions
 - Changing font size if your window height changes
 - Changing the 3D environment scene on page switches
 - Keeping track of when you've scrolled through the page

App.js is composed of your navbar, which is at an absolute position near the top, a flexbox which contains the page-you're-on's data, a footer at absolute positionining near the bottom, and a fake landing page to show when the 3D environment isn't loaded yet. In my experience, the 3D environment loads really quickly with Github's servers (faster than downloading the banner images from the last website).

Nothing too special really. The main improvement here is that by having app.js handle all window resizing, the other files don't have to.

### Index.css
I've grown to dislike having css files, as separating the element and it's styling forces me to have to swap between files while debugging. Additionally, using sx or even inline styling makes it easier to have your styling be dynamic. I've tried to not use a single css file, but some exceptions had to have been made.

Here specifically, animations are established, which can be used by any file in the app, and the scrollbar is hidden for immersion purposes. I do keep the default index.css stuff because to be honest, I don't really customize my fonts much so I rely on react's default fonts a bit.

### Pages
#### About.js


 -------
 src: https://github.com/pmndrs/gltfjsx