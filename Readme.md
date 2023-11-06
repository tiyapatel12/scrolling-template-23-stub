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
- Add a button inside one of the container divs of the html other than the first one which reads "Animate Me"
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
animator.onclick = (event) => {
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
const reset = document.getElementById('animation-reset');
reset.onclick = (event) => {
    event.target.parentNode.classList.remove('green-to-blue');
}
```
</details>

#### Challenge!
Would you be able to add some code to mark when the button is enabled and disabled? The styling for css has already been set up to mark when a button is enabled or not, so all you'd have to do is manage the 'disabled' property between `html` and `javascript`.