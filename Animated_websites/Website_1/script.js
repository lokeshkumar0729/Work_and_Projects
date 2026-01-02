function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "30vh",
      backgroundColor: "#111",
      opacity: 1,
      transition: "all ease 0.3s",
    });

    tl.set("#nav-part2 h5 ", {
      display: "block",
    });

    tl.to("#nav-part2 h5 span", {
      display: "block",
      transition: "all ease 0.5s",
      y: 20,
      stagger: {
        amount: 1.5,
      },
    });
  });

  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    tl.to("#nav-part2 h5", {
      display: "none",
      stagger: {
        amount: 0.3,
      },
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}
function cursorAniim() {
  let rightelem = document.querySelectorAll(".right-elem");
  rightelem.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 100,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}

function page3Animation() {
  let page3center = document.querySelector(".page3-center .icon");
  let video = document.querySelector("#page3 video");
  let command = document.querySelector(".page3-center h5");
  page3center.addEventListener("click", () => {
    video.play();

    gsap.to(video, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      borderRadius: 0,
      duration: 1,
      ease: "power2.out",
      zIndex: 11,
    });

    // Hide the icon after clicking
    page3center.style.visibility = "hidden";
    command.style.visibility = "hidden";
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      scaleX: "0.7",
      scaleY: 0,
      opacity: 0,
      borderRadius: "20px",
      duration: 0.8,
      ease: "power2.out",
      zIndex: 5,
    });
    page3center.style.visibility = "visible";
    command.style.visibility = "visible";
  });
}

function page4animation() {
  let sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    // Get video inside this specific section
    let video = section.querySelector("video");

    // Play on hover
    section.addEventListener("mouseenter", () => {
      video.muted = true;
      video.loop = true;
      video.play();
    });

    // Pause on leave
    section.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
}
function page6animation() {
  gsap.to("#btm6-part2 h4", {
    x: 120,
    duration: 1,
    stagger: {
      amount: -0.3,
    },
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "body",
      start: "top 60%",
      end: "top -40%",
      scrub: true,
    },
  });
  gsap.to("#btm6-part3 h4", {
    x: 40,
    duration: 1,
    stagger: {
      amount: -0.3,
    },
    scrollTrigger: {
      trigger: "#btm6-part3",
      scroller: "body",
      start: "top 60%",
      end: "top -40%",
      scrub: true,
    },
  });
  gsap.to("#btm6-part4 h4", {
    x: 60,
    duration: 1,
    stagger: {
      amount: -0.3,
    },
    scrollTrigger: {
      trigger: "#btm6-part4",
      scroller: "#main",
      start: "top 60%",
      end: "top -40%",
      scrub: true,
    },
  });
}
function scrolling() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
}
navAnimation();
cursorAniim();
page3Animation();
page4animation();
page6animation();
// scrolling()
