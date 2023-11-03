let options = {
  rootMargin: "0px",
  // threshold before intersecting returns true (1 is full size). If zero will be intersecting when they are touching but not seeing it
  threshold: 0.1,
};

/**
 * Callback that is fired every time the viewport moves
 * @param {Array<HTMLElement>} entries all elements that the observer is watching
 * @param {HTMLElement} _observer root observer element - in this case the viewport
 */
const callback = (entries, _observer) => {
  // loop through entries. Each entry has information linked to the element that it refers to
  for (entry of entries) {
    //get element from entry as we'll be modifying it's class
    const element = entry.target;

    // entry.isIntersecting tells us if this particular entry is intersecting with the viewport

    // if intersecting -> let css know this element is in view
    if (entry.isIntersecting) {
      element.classList.add("intersecting");
      continue;
    }

    // if not intersecting -> let css know this element is out of view
    element.classList.remove("intersecting");
  }
};

/**
 * define observer object -> this object is in charge of watching out for intersections
 * As you can see we are giving it two elements:
 * 1. - The callback to know what it needs to do when an intersection happens
 * 2. - The options defining rootMargin and threshold which define what an intersection means for us
 */
const observer = new IntersectionObserver(callback, options);

// define the elements that we want to observe against the viewport
const targets = document.getElementsByClassName("animate");

// Let the observer know we want to start observing right away
for (const target of targets) {
  observer.observe(target);
}