$(document).ready(function () {
  // $("header i").on("click" , function(){
  //     $(this).toggleClass("fa-align-right fa-times");
  // })
  $("header button").on("click", function () {
    $(".side-bar").toggleClass("active");
    $(".btn").toggleClass("toggle");
  })

  $(".item").on("click", function () {
    (this).addClass("active").siblings().removeClass("active");
  })


  //   var scrollButtom = $("#buttom-up");
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() >= 300) {
  //         scrollButtom.fadeIn(1000);
  //     } else if ($(this).scrollTop() <= 300) {
  //         scrollButtom.fadeOut(1000);
  //     }
  // })
  // scrollButtom.click(function () {
  //     $("html,body").animate({
  //         scrollTop: 0
  //     }, 1000);
  // })


  $('.creat').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, 1500);
  });

})

setTimeout(() => {

  // alert("Hello");

}, 10000);

$('.top-anime').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// var typed = new Typed('.type', {
//     strings: [

//         '',
//         'You Are Welcome',
//         'Anime Club'
//         ],

//         typeSpeed: 60   ,
//         startDelay: 300,
//         backSpeed: 60,
//         smartBackspace: true,
//         backDelay: 700,
//         fadeOut: true,
//         fadeOutClass: 'typed-fade-out',
//         fadeOutDelay: 500,
//         showCursor: true,
//         cursorChar: ':',
//         autoInsertCss: true,
// });