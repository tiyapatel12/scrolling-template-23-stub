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

## Step by step guide

### Step One - Linking style and javascript files
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

### Step Two - Creating one animation
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