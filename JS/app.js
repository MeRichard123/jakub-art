const nav = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
  console.log("Scroll test");
});

$(".menu-toggle").click(function () {
  $(".nav-items").toggleClass("close");
  $(".menu-toggle").toggleClass("open");
  $("html").toggleClass("scroll-lock");
  $("body").toggleClass("scroll-lock");
});
$(".nav-item").click(() => {
  $("html").toggleClass("scroll-lock");
  $("body").toggleClass("scroll-lock");
  $(".nav-items").toggleClass("close");
  $(".menu-toggle").toggleClass("open");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
});

function images(x) {
  if (x.matches) {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: false,
      positionFromTop: 1460,
      fitImagesInViewport: true,
      maxHeight: window.innerHeight - 60,
      disableScrolling: false,
    });
  } else {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: false,
      positionFromTop: 1460,
      fitImagesInViewport: false,
      maxHeight: window.innerHeight - 60,
      disableScrolling: true,
    });
  }
}
var x = window.matchMedia("(max-width:700px)");
images(x);
x.addListener(images);
