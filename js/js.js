$(document).ready(function () {
  // $("header i").on("click" , function(){
  //     $(this).toggleClass("fa-align-right fa-times");
  // })
  $("header button").on("click", function () {
    $(".side-bar").toggleClass("active");
    $(".btn").toggleClass("toggle");
  })


  $(".nav div").on('click', function () {
    console.log("hello");
    ("div").addClass("active").siblings().removeClass("active");
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

/// fixsed navbar And side-bar onscroll event 

let nav = document.querySelector(".navbar");
let sidebar = document.querySelector(".side-bar");
console.log(sidebar);

window.onscroll = function (e) {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    nav.classList.add("fixed-nav");
    sidebar.classList.add("sidebar-tow")
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    nav.classList.remove("fixed-nav");
    sidebar.classList.remove("sidebar-tow")
  }
}