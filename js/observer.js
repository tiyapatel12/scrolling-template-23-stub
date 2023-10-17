let options = {
    root: document.getElementById("scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  let observer = new IntersectionObserver(callback, options);