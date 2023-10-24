let mainDiv = document.getElementById("scrollArea");

let options = {
  rootMargin: "0px",
  //threshold before intersecting returns true (1 is full size). If zero will be intersecting when they are touching but not seeing it.
  threshold: 0.1,
};

let callback = (entries, _observer) => {
  entries.forEach((entry) => {
    const element = entry.target;
    if (entry.isIntersecting) {
      element.classList.add("intersecting");
      return;
    }

    element.classList.remove("intersecting");
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.getElementById("listItem");

observer.observe(target);
