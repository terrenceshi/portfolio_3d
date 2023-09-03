## To do:
### Fairly difficult tasks that will take an alternative approach for success:
 - Try to fix navbar blur transition
    - Not actually difficult, just have to overlay navbar on top of background with blur that fades in and out whenever needed
    - Could also see if animating blur box opacity would work
 - Should have boxes pop up on scroll (any page that requires scrolling should)
    - Just need to be able to tell when box is in view. Could technically do something with y scroll value (cant necessarily make it a 1:1 useState though)

 - look up use of chromatic abberation for fun

### Laptop Bugs
 - Due to smaller height, when moving to music page, footer displaces before fading out
    - This is because with smaller height, the content of music forces the footer out of its space between flex position
 - cs cards overlap with footer. (could look into having the font size scale with height of browser)
 - Fairly slow on laptop. 

 -------
 src: https://github.com/pmndrs/gltfjsx