const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.04,
    spaceBetween: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      840: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      841:{
        slidesPerView:3.2,
        spaceBetween: 30,
      }
    }
  });
