jQuery(function ($) {
  var mainColor="#729D39"
  //declare slider (owl-carousel slider)
  $('.galleryCarusel').owlCarousel({
    autoplay: true,
    loop: false,
    rtl: true,
    nav: true,
    dotsContainer: '.sliderDots',
    items: 1,
  });
  $('.menuSlider').owlCarousel({
    autoplay: true,
    loop: false,
    rtl: true,
    nav: true,
    margin:45,
    dotsContainer: '.menuDots',
    responsive:{
   0:{
     items:1,
     margin:0
   },
   600:{
    items:2,
    margin:30
  },
  1025:{
    items:3,
    margin:45,


  }
 }
  });
  $('.clientsSlider').owlCarousel({
    autoplay: true,
    loop: false,
    rtl: true,
    nav: false,
    margin:45,
    dots:true,
 responsive:{
   0:{
     items:1,
   },
   600:{
    items:2,
  },
  1000:{
    items:3,
  }
 }
  });
  function onScroll(event) {

    var scrollPosition = $(document).scrollTop();
    //add class active when select item from navbar 
    $('.navbar-collapse .nav-item a[href^="#"').each(function () {
      console.log($(this).attr('href'));
      var refElement = $($(this).attr("href"));
      if (refElement.length && refElement.position().top <= scrollPosition) {
        $('.navbar-collapse .nav-item ').removeClass("active");
        $(this).parent().addClass("active");
      }
      else {
        $(this).removeClass("active");
      }

    });
  }
  $(document).on("scroll", onScroll);
  // animate to the section when click  on it
  $('.navbar-collapse ul li a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
    $('.navbar-collapse.collapse.in').removeClass('in');
    return false;
  });

  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    //add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');


    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  //close menu when choose item
  $(".navbar .nav-link").click(function () {
    $(".collapse").removeClass("show");
  })
  // declare rating 
  $(".my-rating").starRating({
    starSize: 18,
    rtl: true,
    activeColor: mainColor,
    hoverColor: mainColor,
    ratedColor: mainColor,
    emptyColor: '#DCDCDC',
    starShape: 'rounded',
    useGradient: false,
    disableAfterRate: false,
    initialRating: 4,
    strokeColor: mainColor,
    readOnly: true,

    callback: function (currentRating, $el) { }
  });
  
});

