$(document).ready(function () {
  $("header button").on("click", function () {
    $(".side-bar").toggleClass("active");
    $(".btn").toggleClass("toggle");
  })


  $(".nav div").on('click', function () {
    console.log("hello");
    ("div").addClass("active").siblings().removeClass("active");
  })

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

///////////////////////////////////////// fixsed navbar onscroll event 

let nav = document.querySelector(".navbar");

window.onscroll = function (e) {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    nav.classList.add("slide-down");
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    nav.classList.remove("slide-down");
  }
}


/////////////////////////////////////////////////////////////////////////////// TYPE-ANIME 
let list = document.querySelectorAll(".types ul li");
console.log(list);

list.forEach(function (ele) {

  ele.onclick = function () {
    list.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  }

});


/////////////////////////////////////////////////////////////////////////////// top button 
let btn = document.querySelector('.btn-up');
window.onscroll = function () {
  if (this.scrollY >= 400) {
    btn.classList.add('show-btn-top');
  } else {
    btn.classList.remove('show-btn-top');
  }
}

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};