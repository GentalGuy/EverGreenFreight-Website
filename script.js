var tl = gsap.timeline();
var t2 = gsap.timeline();
tl.from("#nav1 .header-left img", {
  y: -50,
  opacity: 0,
  delay: 0,
  duration: 0.8,
});
tl.from("#nav1 .header-left h1", {
  y: -50,
  opacity: 0,
  delay: 0,
  duration: 0.8,
});

tl.from("#nav1 .nav1elem", {
  y: -50,
  opacity: 0,
  delay: 0,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".menubtn", {
  x: 50,
  delay: 2,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".headSec01 span", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.5,
});

tl.from(".sec01anim", {
  opacity: 0,
  delay: 0,
  duration: 0.8,
});

let headerleft = document.querySelector(".header-left");
let navElem = document.querySelector(".hoverHead");
let nav1 = document.querySelector("#nav1");

let menubtn = document.querySelector(".menubtn");
let menuInside = document.querySelector(".menu-inside");
let closebtn = document.querySelector(".closebtn");
let header = document.querySelector("header");

const toggleNavbar = () => {
  header.classList.toggle("active");
};

closebtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

menuInside.addEventListener("click", function () {
  header.classList.remove("active");
});

menubtn.addEventListener("click", () => toggleNavbar());




