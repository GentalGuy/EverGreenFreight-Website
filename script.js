function smoothScroll() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
    syncTouch: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    function hoverMenuClick(e) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));

          if (target) {
            lenis.scrollTo(target);
          }
        });
      });
    }

    hoverMenuClick();
  });
}

function scrollFixed() {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

function scrollerElement() {
  let btnright = document.querySelector(".arrow-right");
  let btnleft = document.querySelector(".arrow-left");
  let slider = document.querySelector(".lower-sec04");

  btnright.onclick = () => {
    slider.append(slider.querySelector(".slider-sec04:first-child"));
  };

  btnleft.onclick = () => {
    slider.prepend(slider.querySelector(".slider-sec04:last-child"));
  };
}

function mouseHover() {
  const elems = document.querySelectorAll(".elem");

  elems.forEach((val) => {
    const image = val.childNodes[3]; // Ensure this is the correct reference

    val.addEventListener("mouseenter", () => {
      image.style.opacity = "1";
    });

    val.addEventListener("mouseleave", () => {
      image.style.opacity = "0";
    });

    let isMoving = false; // Throttling flag

    val.addEventListener("mousemove", (dets) => {
      if (!isMoving) {
        isMoving = true;

        const rect = val.getBoundingClientRect();
        const x1 = dets.x - rect.left;
        const y1 = dets.y - rect.top;

        image.style.left = `${x1}px`;
        image.style.top = `${y1}px`;

        setTimeout(() => {
          isMoving = false;
        }, 16); // ~60fps (1000ms / 60 = ~16ms)
      }
    });
  });
}
function currentYear() {
  let Year = document.querySelectorAll("#current-year");
  Year.forEach((val) => {
    val.textContent = new Date().getFullYear();
  });
}

function videoHover() {
  let videoContainer = document.querySelector(".video-div");
  let imgVideo = document.querySelector(".video-div img");
  let video = document.querySelector("#video");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mouse-circle", {
        left: dets.x - 50,
        top: dets.y - 400 + window.scrollY,
      });
    });
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to(".mouse-circle", {
        left: "50%",
        top: "50%",
      });
    });
  });

  var flag = 0;

  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      imgVideo.style.display = "none";
      document.querySelector(
        ".mouse-circle"
      ).innerHTML = `<i class="ri-pause-fill"></i>`;
      gsap.to(".mouse-circle", {
        scale: 0.8,
      });
      flag = 1;
    } else {
      video.pause();
      imgVideo.style.display = "block";
      document.querySelector(
        ".mouse-circle"
      ).innerHTML = `<i class="ri-play-fill"></i>`;
      gsap.to(".mouse-circle", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

function toggleMenu() {
  const menu = document.querySelector(".menubtn");
  const menuContent = document.querySelector(".menu-content");
  const openMenu = document.querySelector(".menu-open");
  const closeMenu = document.querySelector(".menu-close");
  const liElements = document.querySelectorAll(".menu-content ul li");

  menu.addEventListener("click", function () {
    // Toggle states
    menuContent.classList.toggle("menu-active");
    document.body.classList.toggle("no-scroll");

    // GSAP animation based on the presence of the 'menu-active' class
    gsap.to(menuContent, {
      top: menuContent.classList.contains("menu-active") ? "0%" : "-100%",
      duration: 0.5,
      display: "block",
      ease: "power2.inOut",
    });

    // Toggle the visibility of the menu icons
    if (menuContent.classList.contains("menu-active")) {
      openMenu.style.display = "none"; // Hide the open menu icon
      closeMenu.style.display = "block"; // Show the close menu icon
    } else {
      openMenu.style.display = "block"; // Show the open menu icon
      closeMenu.style.display = "none"; // Hide the close menu icon
    }
  });
  liElements.forEach(function (liElement) {
    liElement.addEventListener("click", function () {
      // Remove the 'menu-active' class to close the menu
      menuContent.classList.remove("menu-active");
      document.body.classList.remove("no-scroll");

      // GSAP animation to close the menu
      gsap.to(menuContent, {
        top: "-200%", // Slide out the menu
        duration: 0.5,
        display: "none",
        ease: "power2.inOut",
      });

      // Reset menu icon visibility
      openMenu.style.display = "block"; // Show the open menu icon
      closeMenu.style.display = "none"; // Hide the close menu icon
    });
  });
}

function loadingPage() {
  var tl = gsap.timeline();
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
    let typeSplit = new SplitType("#animateText", {
      types: "lines, words, chars",
      tagName: "span",
    });
    var tl = gsap.timeline();
    tl.from(".child span", {
      x: 100,
      delay: 1,
      stagger: 0.2,
      duration: 2,
      ease: Power3.easeInOut,
    })
      .to(".parent .child", {
        y: "100%",
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to("#fs", {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to("#fs2", {
        height: "100%",
        duration: 1,
        top: 0,
        delay: -1,
        ease: Expo.easeInOut,
      })
      .to("#fs2 h1", {
        delay: -1,
        duration: 1,
        display: "block",
      })
      .to("#fs2", {
        height: "0%",
        delay: -0.2,
        bottom: 0,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to("#fs2 h1", {

        display: "none",
      })
      .to("#fs2, #fs1, .parent", {

        display: "none",
      })

      .to("header", {
        display: "flex",
      })
      .to(".menu-content", {
        display: "flex",
      })
  });
}

smoothScroll();
revealToSpan();
// loadingPage();
mouseHover();
scrollFixed();
scrollerElement();
currentYear();

videoHover();

toggleMenu();
