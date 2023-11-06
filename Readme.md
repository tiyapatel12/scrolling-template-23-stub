# Adding Animations with Intersectional Observer

## The Intersectional Observer
The intersectional observer is a javascript object that can detect when an item has come in contact with the viewport. We can use it to trigger animations as we scroll through a page. 

## Knowledge
In order to build the intersectional observer we will look at:
- Keyframes and animations
- Changing / Adding a css class from javascript

We will also refresh knowledge related to:
- Css classes
- Selecting elements from the page in javascript
- Using built in javascript objects

## Creating Animations Walkthrough

### Linking style and javascript files
Let's start by looking at the code that already exists in this repository. You should be able to see the following files:

```
project
└── css
    ├── animations.css
    └── base-style.css
└── js
    ├── audio.js
    └── animation-manager.js
└── pictures
    ├── grey_anatomy.webp
    ├── hp.avif
    └── under_skin.webp
└── sound
    └── scott_opening.mp3
├── index.html
├── Readme.md
└── .gitignore
```

If you open the `index.html`, there's some base structure for the `html`, which is stylized in the `css/base-style.css`. Some audio control is triggered from the `js/audio.js` script. We will not touch the `base-style.css` nor the `js/audio.js` files today, but feel free to play with them in your own time.

For today's workshop we will mainly work with:
- `index.html`
- `css/animations.css`
- `js/observer.js`

#### Task One:
    Your first task is to link these files in your html main file.


<details>
  <summary>Hint</summary>
  You will see that the html is already linked to the files `css/base-style` and `js/audio.js`. It is valid to link more than one style file and / or javascript file to one html. In fact, it is recommended to use different files to separate each bit of code. In this case, we want to separate the css base style file from the animation related style, and we want to separate the javascript file that is specific for audio from the javascript fille that is specific for animation management. You can use the lines that are already in use for `css` and `js` referencing as a guide.
</details>

<details>
  <summary>Soltuion</summary>
    You have to add the following lines on your html header:

    <link rel="stylesheet" href="./css/animation.css" />
    <script src="./js/animation-manager.js" defer></script>
  
</details>

### Multiple Classes
We will now learn to create an animation. Before getting into this, let's look at the `index.html` file. The html is structured in different div contaienrs, each of them containing fragments of text, buttons and / or images.

An example of this is the following:

```
<div class="container green">
      <img src="./pictures/hp.avif" />
      <p>
        But then Voldemort came and he tried to kill her but she was like nuh ha
        and became Harry Potter
      </p>
    </div>
```

If you take the first line `<div class="container green"` something noticeable happens here: this `div` has two classes attached to it: `container` and `green`. The `html`, `css` and `javascript` understand it as separate classes thanks to the blank space in between their names.

If you now look at the `base-style.css` file, you will see that there are two bits of code that reference this `div`.

First, the `.container` selector, in `line 57`, gives `container` properties to this `div`:
```
.container {
  width: 800px;
  height: 70vh;
  margin: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

Secondly, the `.green` selector, in `line 75`, gives a `green` background to this `div`:

```
.green {
  --green-bg: #d4ffd5;
  background-color: var(--green-bg);
}
```

<details>
    <summary>Note</summary>
    The line: "--green-bg: #d4ffd5;" is used to create a variable that stores the green background color. Feel free to look at the code and ask Diana to understand why it is set like this, but it is not necessary for the sake of this class.
</details>

#### Task Two

See what happens if you remove or change any of the classes. For example, try changing some of the `green` to `blue` and viceversa, or remove the `container` property, and see how that affects the `html`. You should see that these classes are independent and each affect the `div` in a different way.

## Let's animate!

### Html Changes

We will now create our first animation. We will make an animation that changes the color of the first `div`'s background from green to blue from the `css`.

To start, in the first html `div`:
- Replace the class `green` with the class `green-to-blue`

<details>
    <summary>Html Solution</summary>
    Your first div of the index.html file should look like this:

    <div class="container green-to-blue">
      <h1>Once upon a time...</h1>
      <button id="start-audio">Want Some Music?</button>
    </div>
</details>

### The Animation Code
To define the animation we are going to use a specific `css` rule called `keyframe`. A `keyframe` is defined by [W3 Schools](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.php) as follows:

> The @keyframes rule specifies the animation code.
> The animation is created by gradually changing from one set of CSS styles to another.
> During the animation, you can change the set of CSS styles many times.

An example fo a `@keyframe` is:

```css
@keyframes greentobluebackground {
  from {
    background-color: #dcedfc;
  }
  to {
    background-color: #d4ffd5;
  }
}
```

So, to continue:
- Add the code for this example `keyframe` at the top of the `animations.css` file.

This is telling `css` that we have now created a transitioning animation, but we have not yet linked the `keyframe` called `greentobluebackground` to any classes. 

To link it to the elements with class `green-to-blue`:
- Create a css selector using the `.green-to-blue` keyword
- Add the css property `animation: greentobluebackground;` to style the selected elements
- Add the css property `animation-duration: 5s;` to let css know we want a `5s` animation - otherwise it happens so quickly we don't even see it!

<details>
<summary>Solution</summary>
In the end, your `css` file should look like this:

```css
@keyframes greentobluebackground {
  from {
    background-color: #dcedfc;
  }
  to {
    background-color: #d4ffd5;
  }
}

.green-to-blue {
    animation: greentobluebackground;
    animation-duration: 5s;
}

```
</details>


With this new code in place, check your live page!

### Polishing

Let's do some polishing. As the animation is working now, the step by step `css` changes are:

- The div initially has transparent background color
- The animation is triggered to change the background from green to blue
- The style changes back to the original transparent style

Let's do it so the style at the end of the animation is the same as the last animation frame. To do so, we can add the css property `animation-fill-mode: forwards;`.

### Animating other divs

Select a few random divs from the `html` and replace the color related class with the `green-to-blue` class. Let's see how the page evolves!

....

Unfortuantely, after looking at the live page, we cannot see the animations. This is because the animations are happening all at once, just after the page is loaded, before the divs are inside the viewport. We need to find a way to only trigger the animation code when an element is in viewport.

To keep the code clean, remove the class `green-to-blue` from all `div`s except the first one.


## Changing classes on javascript

We can use `javascript` to change the style of our `html` live by changing the class of an `html element`. This trigger can happen at the click of a button, after a chain of events or, even, when the element appears in the viewport. We will begin by using a button to see the raw mechanics, to then add a viewport functionality.

### Class Changing through Button Click

To begin:
- Add a button inside the third container div, the one that reads "But then Voldemort came and he tried to kill her..."
- Give the id `animator` to this button 
- Create a constant variable in the `animation-manajger.js` pointint to that button called `animationTriggerButton`
- Add an event listener for the `onclick` event linked to a function that simply logs in the console 'The animation was triggered'

<details>
<summary> Solution - HTML</summary>
In your html you should have added a line inside one of the div containers like so:

```html
    <button id="animator">Animate Me</button>
```
</details>


<details>
<summary> Solution - Javascript</summary>
Your animation-manager.js file should look similar to this: 

**Note**: There are different ways to define an event function so the second line may look different for you. As long as you can see the log in the console when you click the button, you know that it is working.

```javascript
const animationTriggerButton = document.getElementById("animator");
animationTriggerButton.onclick = (event) => {
    console.log('The animation was triggered')
}
```
</details>


With this log working, let's now add the code that will change the class when the button is clicked. To do so, add this code inside the `onclick` event function, instead of the `console.log`:

```javascript
event.target.parentNode.classList.add('green-to-blue');
```

This bit of code will do the following:
- Wait for the button to be clicked
- When the button is clicked, add the 'green-to-blue' class to the background
- Since this class has only just now been added to the html element, the `css` animation only gets triggered now

### Retriggering

The problem though is that the animation is only triggered once. Can you think of a way to "retrigger" the animation every time the button gets clicked?

**First Hint:** The method remove('class-name') might be useful. You can read about it in [this W3School article](https://www.w3schools.com/howto/howto_js_remove_class.asp). 

**Second Hint:** You will need to use a second button.

**Third Hint:** You can remove classes using the function `remove('class-name')`

<details>
<summary>Solution</summary>
You can add a secondary button to reset the animation. You will have to add this button first in the html, and then add code in the `javascript` to remove the class list when that button is clicked.
</details>


<details>
<summary>Solution - Html</summary>
You can add a button reset in your html by adding this on the following line of the animation trigger button:

```html
<button id="animation-reset">Reset Animation </button>
```
</details>

<details>
<summary>Solution - Javascript</summary>
You can add a button selection and a reset onclick trigger like so:

```javascript
const resetAnimationButton = document.getElementById('animation-reset');
resetAnimationButton.onclick = (event) => {
    event.target.parentNode.classList.remove('green-to-blue');
}
```
</details>

#### Challenge!
Would you be able to add some code to mark when the button is enabled and disabled? The styling for css has already been set up to mark when a button is enabled or not, so all you'd have to do is manage the 'disabled' property between `html` and `javascript`.

## Triggering class change upon viewport intersection

Now that we've seen it's possible to trigger and retrigger animations through class changing, let's add functionality to the code to do so upon viewport intersection, i.e., when an element comes into view.

For this we will use the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) object. Let's' start with some theroy to understand how this object works. 

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

To build this Intersection Observer interaction, we have to define some elements in the javascript. These elements will be:
- The **observer**, which is the parent object that is observing interactions. In our case the observer will be the viewport, i.e., the full screen.
- The **targets**, which are each of the objects that we want to change every time they intersect with the observer. In our case, the targets will be each of the divs that are linked to an animation.
- The **callback**, which is a specific type of function that is triggered every time an interaction between the observer and any of the targets happens. This function will manage the change of classes to trigger the animation.

Let's open the `animation-manager.js` and start coding!

#### Target Options

In order to define the `observer` object we need to have some options predefined as well, to let the Intersection Observer API know what counts as an interaction. We will use the following object to define the `options`.

```javascript
const options = {
  rootMargin: "0px",
  // threshold before intersecting returns true (1 is full size). If zero will be intersecting when they are touching but not seeing it
  threshold: 0.1,
};
```
- The `rootMargin: 0px` indicates that the observer size matches the object to which it is linked to (in our case the viewport). If we added a margin, the observer would be a little bit smaller.
- The `threshold: 0.1` (which can range from 0 to 1) indicates that we will interpret an intersection when the object is slightly in view. If this was set at `0`, the triggering would happen when the targeted object touches the observer but is not yet in view.

I encourage you to play with these options at the end of today's class, to see what happens with each different possible setting!

#### The Callback

After defining the options we can define the callback, which is the funciton that will be triggered when each intersection happpens. For now, let's use a simple `console.log`. You can define the callback function like so:

```javascript
const callback = () => {
    console.log('an intersection has been detected');
}
```


#### The Observer Object

With the `options` and the `callback` set up, we can now create the observer object with the following code:

```javascript
const observer = new IntersectionObserver(callback, options);
```

 As you can see, were not letting `javascript` know that this observer object should be link to the viewport. This is because we don't need to! The default Observer is the viewport. We could choose a different observer if we wanted to... for example, a floating square in the screen, by changing the options. Luckily, we do not need to do so in our case.

 #### The Targets

We need now to select which targets are going to be relevant to the observer. For this, we can use yet a new class, which we're gonna call `animate-on-view`. Head to the `index.html` file and add this class to the second and fifth `div`s, the one that reads `"Scarlet Johanson was walking round town..."` and the one that reads`"But AH WELL in the end all was good ..."`.

Having done so, in the javascript, you can select all elements with class `animate-on-view` like so:
```javascript
const targets = document.getElementsByClassName("animate-on-view");
```

Finally, all we need to do is observe these elements with the `observer` object. We can loop through the array of targets with a special for loop:

```javascript
for(const target of targets) {
    observer.observe(target);
}
```

The javascript file, below the buttons settings, should now look like this:

```javascript
const options = {
    rootMargin: "0px",
    // threshold before intersecting returns true (1 is full size). If zero will be intersecting when they are touching but not seeing it
    threshold: 0.1,
  };

const callback = () => {
    console.log('an intersection has been detected');
}


const observer = new IntersectionObserver(callback, options);

const targets = document.getElementsByClassName("animate-on-view");


for(const target of targets) {
    observer.observe(target);
}
```

If you check the console, you will see that the message `'an intersection has been detected'` os logged every time each of these `div` either ENTERS or LEAVES the viewport.

## Changing Classes in the Callback

Let's now focus on how the `callback` interacts with each of these. Modify the `callback` to include a first parameter that will point to the `targets`. You can do so like this:

```javascript
const callback = (callbackTargets) => {
    console.log('an intersection has been detected');
}
```

Each time the callback is called, an array with modified `callbackTargets` is given to us. Each entry to this array corresponds to one of the original `target` objects we had defined. However, these `callbackTargets` contain additionel information referring to the state of the `target` in relation to the `observer`. We can check this state by iterating through the `callbackTargets` and logging by changing the `callback` definition like so:

```javascript
const callback = (callbackTargets) => {
  console.log("an intersection has been detected");
  for (const callbackTarget of callbackTargets) {
    console.log(
      "current target intersecting status is: " + callbackTarget.isIntersecting
    );
  }
};
```

The `isIntersecting` value will either be `true` or `false` depending on whether the object that has triggered an intersection is in view or not. To try it, head over to your live page and check the logs.

We will use this `isIntersecting` property to trigger the change of `class`, like we were doing before with the two different buttons. 

We can do so by modifying the callback code once again like so:

```javascript
const callback = (callbackTargets) => {
    for (const callbackTarget of callbackTargets) {
      if(callbackTarget.isIntersecting) callbackTarget.target.classList.add('green-to-blue');
      else callbackTarget.target.classList.remove('green-to-blue');
    }
  };
```
In this case, each `callbackTarget` element is the target that the callback uses to store additional information. This element has a `callbackTarget.target` property which is used to directly reference the `html` object and thus be able to interact with it's classes.