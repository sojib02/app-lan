

$('.screenshots-03-wrap').slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.reviews-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.reviews-nav'
  });
  $('.reviews-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.reviews-slide-2',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
  //Plugin
  AOS.init();