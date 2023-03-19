$(document).ready(function(){

    $('.service-slide-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: true,
        rows: 0,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: true,
        prevArrow: ".slider-bottom-arrow",
        nextArrow: ".slider-top-arrow"
      });


      $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: true,
        rows: 0,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: ".testimonial-slider-bottom-arrow",
        nextArrow: ".testimonial-slider-top-arrow",
        asNavFor: '.testimonial-text-slider',
      });

      $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false,
        rows: 0,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.testimonial-slider',
      });
      $('.price-plan-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: ".price-slider-right-arrow",
        nextArrow: ".price-slider-left-arrow"
      });
      $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    new VenoBox({
      selector: '.venobox',
      spinner: 'bounce'
    });
    $('.counter-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: "true",
    
      prevArrow: "true",
      nextArrow: "true",
    });
})