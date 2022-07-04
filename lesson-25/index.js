$("#slick-container").slick({
  arrows: false,
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnFocus: false,
});

$("#second-slick-container").slick({
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#third-slick-container").slick({
  speed: 3000,
  arrows: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  speed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
  ],
});
