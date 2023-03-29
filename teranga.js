let items = document.querySelectorAll("#edition .carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
let navBar = document.querySelectorAll(".nav-link");
console.log(navBar);

navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navBar.forEach(function(b){
            b.classList.remove("active");
        })
        a.classList.add("active");
    })
})

let itemsbachir = document.querySelectorAll("#Galery .carousel .carousel-item");

itemsbachir.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
let nav = document.querySelector(".navbar")
console.log(nav);
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}