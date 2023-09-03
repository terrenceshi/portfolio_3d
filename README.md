## To do:
### Fairly difficult tasks that will take an alternative approach for success:
 - Try to fix navbar blur transition
    - Not actually difficult, just have to overlay navbar on top of background with blur that fades in and out whenever needed
    - Could also see if animating blur box opacity would work
 - Should have boxes pop up on scroll (any page that requires scrolling should)
    - Just need to be able to tell when box is in view. Could technically do something with y scroll value (cant necessarily make it a 1:1 useState though)

 - look up use of chromatic abberation for fun

### Laptop Bugs
 - Fairly slow on laptop. 
   - to be honest though, the biggest thing would be to have it such that useFrame only happens when our useStates change (scene # and screen size)
   - could also try reducing use frame update rate
   - try turning off anti aliasing
   - try reducing pixel ratio (last resort)
   - src: https://en.threejs-university.com/2021/08/06/optimizing-a-three-js-application-tips-for-achieving-a-fluid-rendering-at-60-fps/

 -------
 src: https://github.com/pmndrs/gltfjsx