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
