let mainDiv = document.getElementById("scrollArea");

let options = {
  //root: mainDiv,
  
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (entries, _observer) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting)
    if(entry.isIntersecting) {
      const element = entry.target
      element.classList.add('intersecting')
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.getElementById("listItem");
observer.observe(target);
