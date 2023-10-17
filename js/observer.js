let mainDiv = document.getElementById("scrollArea");

console.log(mainDiv)

let options = {
  root: mainDiv,
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (entries, observer) => {
  console.log("callback of observer");
  entries.forEach((entry) => {
    console.log("entry observed", entry);
    console.log(entry.isIntersecting)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.getElementById("listItem");
observer.observe(target);
