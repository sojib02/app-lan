
    /*=========================================================================
            Slick Slider
    =========================================================================*/
    $( ".slick-dots" ).appendTo( "#showcase-dots" );

    $('.reviews-slide').slick({
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false
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
      focusOnSelect: true
    });

    $('.screenshots-01-wrap').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
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

    $('.screenshots-02-wrap').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 4,
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

    $('.screenshots-03-wrap').slick({
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 2000,
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

    