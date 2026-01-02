// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page2Animation() {
  let page2C = document.querySelectorAll("#page2-container");
  let fixed = document.querySelector("#fixed-image");

  page2C.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
      let image = elem.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
    elem.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });
  });
}
function SwiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
function loaderAnimation() {
  let loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3000);
}
page2Animation();
SwiperAnimation();
loaderAnimation();
