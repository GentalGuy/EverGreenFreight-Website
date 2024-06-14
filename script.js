var tl = gsap.timeline();


tl.from(".headSec01 span", {
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


const menuButton = document.querySelector("#menu-button");
const rootElement = document.documentElement;

menuButton.addEventListener("click", () => {
  rootElement.toggleAttribute("menu-open");
  
});

const menuel = document.querySelectorAll('.nav2el');
menuel.forEach(el => {
  el.addEventListener('click', function() {
      rootElement.toggleAttribute('menu-open');
  });
});

const loaderContainer = document.querySelector('.loader-container');
const pageContent = document.querySelector('#page-content');
window.addEventListener('load',()=>{
  loaderContainer.classList.add('hidden');
  pageContent.classList.add('visible');
})

