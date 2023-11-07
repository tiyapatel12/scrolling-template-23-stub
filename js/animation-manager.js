const animatorButton = document.getElementById("animator")

animatorButton.onclick = (event)=> {
    animatorButton.parentNode.classList.add("right-to-left")
    animatorButton.disabled=true
    deanimatorButton.disabled=false
}

const deanimatorButton = document.getElementById("deanimator")

deanimatorButton.onclick = (event)=> {
    deanimatorButton.parentNode.classList.remove("right-to-left")
    deanimatorButton.disabled=true
    animatorButton.disabled=false
}

// INTERSECTION OBSERVER

const options = {
    rootmargin: "0px",
    threshold: 0.1
}

const callback = (entries, observer) => {
    // This is equivalent as:
    // for(let i=0; 1 < entries.;length; i++ ) {
    // const entry = entries[i];
    // }
    for(const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add("bottom-zig-zag");
        } else {
            entry.target.classList.remove('bottom-zig-zag');
        }
    }
}

const observer = new IntersectionObserver(callback, options);

const targetlist = document.getElementsByClassName("observable")

for(const target of targetlist) {
    observer.observe(target);
}