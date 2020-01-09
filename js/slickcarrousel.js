    // CARROUSEL
    $(document).ready(function() {
        $(".single-item").slick({
          slidesToShow: 2,
        //   autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: '10px',
        prevArrow: '<div type="button" class="slick-prev"><i class="fa fa-caret-left"></i></div>', 
        nextArrow: '<div type="button" class="slick-next"><i class="fa fa-caret-right"></i></div>',
        //   lazyLoad: 'ondemand'
        responsive: [
            {
            breakpoint: 2900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            },
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
        });
    });