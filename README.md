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
 - Refactor 100vw 100vh box
 - look up use of chromatic abberation for fun

## Table of Contents
1. [Introduction](#introduction)

    1.1 [Mindset](#mindset)

    1.2 [Inspiration](#inspiration)

2. [Root Files](#rootfiles)

    2.1 [App.js](#app)

    2.2 [Index.css](#index)

3. [Pages](#pages)

    3.1 [About.js](#about)

    3.2 [Art.js](#art)

    3.3 [Cs.js](#cs)

    3.4 [Landing.js](#landing)

    3.5 [Music.js](#music)

4. [Components](#components)

    4.1 [Artbox.js](#artbox)

    4.2 [FakeLanding.js](#fakelanding)

    4.3 [Footer.js](#footer)

    4.4 [LightsAndCamera.js](#lightsandcamera)

    4.5 [Model.js](#model)

    4.6 [Navbar.js](#navbar)

    4.7 [Player.js](#player)

    4.8 [Scene.js](#scene)

5. [Data](#data)

6. [Deployment](#deployment)

7. [Custom Domain Name](#customdomainname)

8. [Git Bash Commands](#gitbashcommands)

## 1. Introduction <a name="introduction"></a>
Well, once again, I am humbled in realizing that I should've planned out my website's architecture more. What can I say, I just love going straight in and implementing. The website is not as efficient as I'd like it to be (still not bad and definitely better than the last website), but it gets the job done, and after about two weeks, I'm ready to just move on. 

### 1.1 Mindset <a name="mindset"></a>
After my website from last year (2022-2023 Winter), I wanted to make a website that was not only more efficient than what I had before, given that I had improved as a front-end developer a lot, but also just significantly more impressive. 

Throughout the Summer of 2023, I worked as a software engineer intern at LMI, and I realized that having a working frontend wasn't enough for me. I wanted it to be efficient, in that no line of code was useless, and robust, in that if you wanted to add something new to your website, it would be easy to do so. 

I already knew that I could make the previous website more robust, as all the art and other data was hardcoded in. Adding more art would require shifting the entire art gallery. The ideal solution would be to have a file with all the data and mapping that file to your web page.

### 1.2 Inspiration <a name="inspiration"></a>
In terms of significantly more impressive, the most impressive website I've seen was a fake one in a TV show titled "How to Sell Drugs Online (Fast)". 

https://www.youtube.com/watch?v=m1HU91k7aNw

For context, our main character is struggling to remake the frontend for his dark web drug trading business. He then gets a message which shows his competitor with a crazy good website. It's a little bit nonsensical, because the website was definitely made with visual effects and not made as an actual website, but this inspired me to try and put my website into a 3D environment.

However, that alone was not an idea. I had to rack my brain for something more. Somehow, I made the connection that I could look at TV show openings for inspiration. Then, I saw Arcane's intro.

https://www.youtube.com/watch?v=YDjVH8cxrCQ

I knew that I could make each web page a scene like how Arcane pans through sculptures of scenes. If I could match even a fraction of how cool Arcane's sculptures look, I would have a cool website. The rest is then history.

## 2. Root Files (in src) <a name="rootfiles"></a>
### 2.1 App.js <a name="app"></a>
Like any other react app, everything runs through App.js. App.js handles
 - Resizing window dimensions
 - Changing font size if your window height changes
 - Changing the 3D environment scene on page switches
 - Keeping track of when you've scrolled through the page

App.js is composed of your navbar, which is at an absolute position near the top, a flexbox which contains the page-you're-on's data, a footer at absolute positionining near the bottom, and a fake landing page to show when the 3D environment isn't loaded yet. In my experience, the 3D environment loads really quickly with Github's servers (faster than downloading the banner images from the last website).

The main improvement here is that by having app.js handle all window resizing, the other files don't have to.

My biggest mistake was putting the pages into a box with 100vw and 100vh (if you don't know, vw = % of width of window, vh = height). The issue is that because the footer and the navbar are not in that box, they must be a bigger zIndex than the box in order to not get blocked (the footer needs to be on top in order to be able to be hovered). This became an issue when the footer was blocking components in my CS page. 

I did do this to help center certain divs, as maybe a container as wide as the window and centering its objects equates to centering an object on your screen. I'll just need a new reliable way to do this without making the div as wide as the screen.

### 2.2 Index.css <a name="index"></a>
I've grown to dislike having css files, as separating the element and it's styling forces me to have to swap between files while debugging. Additionally, using sx or even inline styling makes it easier to have your styling be dynamic. I've tried to not use a single css file, but some exceptions had to have been made.

Here specifically, animations are established, which can be used by any file in the app, and the scrollbar is hidden for immersion purposes. I do keep the default index.css stuff because to be honest, I don't really customize my fonts much so I rely on react's default fonts a bit.

## 3. Pages <a name="pages"></a>
### 3.1 About.js <a name="about"></a>
About is pretty straightforward. It's a bunch of flexboxes set up together such that we have a bio and picture. One thing I could mention is how the image has a skeleton and fades in when it's loaded. Without this, before the image loads in, the box will be completely different. Thus, it's not just something for making your document pretty, it is mandatory. 

### 3.2 Art.js <a name="art"></a>
Well, I did manage to accomplish the data generative page. The page reads in ArtData.js, splits it into chunks of 3, and gives you back a bunch of flexbox rows of ArtBox.js's.

I managed loading the same way I did in the previous website: using a simple lst variable and modifying + checking it on imageload. To be honest, it's slightly better than doing an Array.fill(useState()) in this situation, as you care more about if all images are loaded then if they are individually loaded. Thus, we would then have to check if all 13 useStates are true every time we want to modify our component's style, which will only grow as our data grows.

Art.js does have it's own footer, while app.js's footer's opacity becomes 0. I can hard code this in because I'll never not have a lot of art on this page. I did used to have a system in app.js where the page content was in a box with the footer. If you give the box a justifyContent or alignItem property of "space between", you could have the footer at the bottom of the box whenever the two box items didn't intersect and have them be separated only by padding if the page's content was bigger than the box. 

I ended up abandoning it, as I went through a bunch of different versions of how I wanted the site to operate, but that system might be one of the best I had. If I wanted the page to be robust and be good even with little data, I should go back to that system.

### 3.3 Cs.js <a name="cs"></a>
This one was the worst. And that is simply because I never had a clear idea on how I wanted this page to look. It was definitely a challenge to design the overlay and honestly, I would be down to just redo this one completely. 

Here I used the Array.fill(useState()) method because I am fine with each image loading independently. 

I got this main gimmick from a youtube video:

https://www.youtube.com/watch?v=AVvSpROUvtk

In essence, the main image and the left / right image have certain styles (opacity, zIndex, transform: translate, scale) and with the transition property, you can make it look like they're genuinely flipping around. This works with even 3+ entries, as excess entries are just not shown. There is some modulus math to compute which images get the various styles. 

I wanted to give each entry a background with a blur filter. Because of this, the MUI fade transition would no longer work properly. The solution to this is to give the blur filter a fade animation directly. 

UPDATE 1/3/24:
So with the addition of KBAI movie recs, I reached > 3 entries. I ran into an issue where the 4th project would interact with the blur background poorly. I had a soft fix where if the projectIdx is not active nor left nor right, the image will simply have a display of none. However, this also does not transition perfectly when switching between projects. At this point, this fix is good enough for me, and if I wanted to make this page better, I'd be better off just redoing the whole thing.

### 3.4 Landing.js <a name="landing"></a>
Should've been super simple, but I ended up giving this one absolute positioning so that it would be between the Pig's arm and leg in as many window dimensions as possible. 

### 3.5 Music.js <a name="music"></a>
This one turned out okay. It works the same way as the old one. Use states for song, whether a song is playing, and volume. I made the song useState a dictionary so I didn't have to make like 5 different useStates for every aspect of the song. 

Because isPlaying became a variable shared with app.js and scene.js, I had to also add useState readyToPlay. Without it, the user can play a song, go to a different page, then come back and have the song play again. Because I did not want this behavior, in the useEffect (function called when page is rendered), I had to set isPlaying to false. However, this would then cause an error, as the audio source would want to play but also not want to play. Thus, I had to use readyToPlay as a buffer to avoid this error.

The rest of the page is just mapped out MusicData into tracks.

Other random things:
 - I made the player fixed positioning instead of absolute so that it would stick to the bottom.
 - I also passed in the current time of the song to the player as raw seconds, as the player wants both percentage of the song completed and "0:00" formatting.

## 4. Components <a name="components"></a>
### 4.1 Artbox.js <a name="artbox"></a>
Interestingly, you can use MUI styling with any div if you pass it into one of MUI's functions, making it easier to dynamically style images. 

Structurally, this is basically an image that opens a MUI dialog modal that includes a slider (images lined up horizontally but set that you only see one at a time) and description. 

For loading, I did the same thing I did in art.js, as we care more about whether ALL images are loaded.

The biggest challenge was trying to find image sizing such that you can get the most out of your window dimensions. I have everything influenced by one width variable (width of the image). It was a question of computing what that width should be. While, you could initially think to use vw, I had to also get height after the width, as I need it as a parameter to set how big the loading skeleton is. As vw and vh are different units, I had to start with pixels.
 - The objectMap function is so that we can calculate height from a dictionary of widths (eg: {sm: 40, xs: 20})

I ended up manually calculating vw by doing a percentage * the width. Then, we calculate the height and figure out if the image fits in the container. If not, then we use a percentage * the height, which should be guaranteed to work as our calculation proved that height is the limiting factor (haven't thought of any edge cases that break this yet).

### 4.2 FakeLanding.js <a name="fakelanding"></a>
This one I possibly could've created more robust-ly.

As of now, it's just the same as Landing.js + navbar and footer except all the text and parts of navbar + footer are replaced with rounded corner rectangular MUI skeletons. All the width and height values are hardcoded in. Maybe we can render some of navbar, footer, and landing's divs and grab the width / height values from there. 

### 4.3 Footer.js <a name="footer"></a>
Had this footer since last website. It's like all CSS. I think the linked spreadsheet basically gives us the icons, while the css file is all the hovering. With MUI styling, we can definitely put all the hovering code into one jsx file. As for the actual icons, MUI might have some if not all of these. However, my desire to not use CSS does not outweigh the ease of copy pasting everything.

### 4.4 Scene.js <a name="scene"></a>
Before we can talk about LightsAndCamera, we need to talk about Scene.js. 

React Three Fiber basically lets you put in a Canvas component, which is your 3D environment and everything. We set the scene to take up the entire window so that it can be our background. We then placed 2 planes to create half a room as well as all our models in every scene. 

Our two functions are simple enough:
 - RotatingBox: a rotating box. It rotates by setting its x rotation (maybe not x) proportional to the clock
 - Effects Composer: all our effects, which includes hue and saturation, brightness + contrast, and most importantly, Bloom. Bloom is what lets the planes that hit the light right look super shiny. The rest is just for yknow final touches.

In order to make the website not completely crash lower spec devices, our canvas has frameloop="demand". Usually in video games (and in everytime useFrame() is called here), you have a tick rate, which is where commands are executed literally every second the game is open. However, since our 3D environment is really about just visiting certain scenes, we don't want to have any tick rate when nothing is happening. Things only happen when react useStates() get updated.

The works in tandem with invalidate = useThree(). Whenever we need tickrate (the box should rotate when its on screen), we call this function so that it'll rotate.

Loading regular FBX files is easy enough. However, if you want your model to have an animation play, you should look at Model.js.

### 4.5 LightsAndCamera.js <a name="lightsandcamera"></a>
LightsAndCamera.js handles all the camera movements when you switch tabs and the music color lights changing. All it returns are just the lights of the scene, but what's important is what it does with them.

First off, we establish the vectors which our camera should move to for each page. These vectors get updated whenever the screen size changes (smaller window = different camera angle to fit our subject).

Whenever the page (and thus scene) changes, the camera lerps to that page's associated vector. Lerp = slowly get value a to value b. Each tick, value a slowly gets to value b. However, value a converges to value b; it never reaches it.

We want our 3D environment to have no tick rate, lerp towards it's new vector, and when it's close enough, have no tick rate again. That's what our isClose() function is for. 

For the music color rotation, we have a few different preset colors. If audioPlaying becomes true, our default gray color will lerp towards a random color. Each color has about one second before our light lerps to the next color. 

If at any time during this rotation isPlaying becomes false, the light lerps towards gray again. Once the light is close enough to gray, our tick rate turns off (this is what isCloseColor is for).

### 4.6 Model.js <a name="model"></a>
Most of this code is copy pasted from the internet. Basically, it'll extract the animation information from the model and play it. However, it initially had a useFrame() to keep playing the animation (for actual animations, I guess it'll make your model move). However, because our models are just posing here, I just removed this code to save computation.

React Three Fiber sings the praises of using gltfjsx (src: https://github.com/pmndrs/gltfjsx).

Basically, you can convert your gltf file to a jsx file while also creating a glb file that is massively compressed. The new model will be different enough to have you consider using the original occasionally.

If you were to use these jsx files for models with animation, I recommend using code from Model.js to get the animations to play. I forgot 100% why I didn't use them, but if I recall correctly, I was having issues having the models cast shadows (not sure why for the models that didn't have to cast shadows- maybe could still work). I still ended up using the compressed glb files, as they were smaller sizes and thus PROBABLY easier to load in. 

However, for some really weird reason, my deployed website DID NOT like the compressed wreck file. It was giving 404 errors on loading it. I just ended up using the original FBX, as it's a smaller size than it's GLTF brother.

### 4.7 Navbar.js <a name="navbar"></a>
I've iterated on some random navbar code I got about a year ago like three or four times now. This iteration is definitely the best in that it has the best buttons. Every button will work 100% of the time. I think in the previous code, the links would not wrap around the whole component, giving you parts of the button that'll not go to the link. This was prevalent in the mobile hamburger, which is terrible, as precision clicking is not synergistic with finger tapping. 

I made the navbar extend to full window width and have a swanky blur background whenever you were below a certain width threshold and not at the top (mainly so the navbar can cover scrolling parts like art.js better).

There is one bug where the blur background does not animate well when going from no blur background to blur background. This is more so the fault of whoever codes css stuff. However, there is a solution in just making the background a separate container and making it just fade-in when it's needed.

### 4.8 Player.js <a name="player"></a>
Not too much to say. I pretty much implemented this the same as last website, but just with better box formation. I gave it a blur background so it has to have a separate fade component from everything else in music.js.

I did learn that you could declare css for separate classes in the sx component here, whether it be hovering the current div or a predefined mui class already in the div.

## 5. Data <a name="data"></a>
All the data is pretty straightforward. If this were a dynamic and robust app, this data would probably be held in a database and queried through a backend. 

ArtData stores height and width, as having javascript find that information for you is a much bigger pain than it should be.

MusicData has an index for every entry, which while you could programatically find, makes it easier on your computation speed at the cost of storage space.

## 6. Deployment <a name="deployment"></a>
I don't know why, but including the hashrouter in the home page was giving me issues. So I recommend just doing:

```
"homepage": "./"
```

I think "." would also work, but I didn't test that past a few early iterations. 

Use gh-pages. I believe it's simply

```
npm i gh-pages
```

Add this to your package.json scripts:

```
"deploy": "gh-pages -d build"
```

Every time you want to deploy, run

```
npm run build
npm run deploy
```

Build produces a folder called "build", which is basically every you've done in a bundle. Deploy puts build into a branch on your repo called "gh-pages". 

After that, you can go to github --> settings --> pages and set the deployed branch to "gh-pages". 

Alternatively, you can change your deploy script to

```
"deploy": "gh-pages -b branchName -d build"
```

This'll put the build folder into a branch named "branchName". This is good for when you don't want to override your current production. To be honest, if you were working at a company, they would have you do this in case your new build is unknowingly bad. 

Do note that if the branch already exists, gh-pages will not overwrite it.

## 7. Custom Domain Name <a name="customdomainname"></a>
I personally didn't have to do anything special since my domains were already set up. Copy pasted from my previous readme:

Changing the domain name is as easy as simply following a list of steps.

* Go to the github settings tab and tell it to use your custom domain.

* Edit your custom domain's DNS settings so that they point to github pages.
* Add 185.199.111.153, 185.199.110.153, 185.199.109.153, 185.199.108.153 as an A record. (Check here if these values are outdated https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-records-with-your-dns-provider)
* Add a CNAME with a value of "www" that points to "terrenceshi.github.io."

* Keep your homepage value as "./" as that allows your code to be dynamic and able to be deployed onto any host name. 

Article source: https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58.

## 8. Git bash commands <a name="gitbashcommands"></a>
Not sure how much programming I'll be doing this semester so I'll just put down some useful git bash commands.

```
git add .
git commit -m "commit message"
git push
```

```
git diff
```

```
git pull
```

```
git stash
git stash apply
```

```
git reset --hard
```
Gets rid of all your local changes.

```
git branch -a
```
Gets all your branches.

```
git checkout branchName
```
Switches to branch.

```
git checkout -- filename.txt
```
Resets local changes to file.

Well. It's 9/4/23, 2:21 am. I have labor day monday tomorrow (today). Gonna enjoy myself and "catch up" on my low amount of assignments!