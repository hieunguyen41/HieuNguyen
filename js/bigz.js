/*
  [JS Index]
  
  ---
  
  Template Name: Bigz - Under Construction Template
  Author:  ex-nihilo
  Version: 1.0
*/

/*
  1. preloader
  2. show elements
    2.1. show fadeIn
    2.2. show borders
    2.3. show hero
  3. the calls
    3.1. call home
    3.2. call page
  4. highlight navigation
  5. to top arrow animation
    5.1. to top arrow scroll to top
  6. facts counter
  7. skills bar
  8. forms
    8.1. newsletter form
	8.2. contact form
  9. countdown
    9.1. countdown timer
	9.2. countdown SETUP
  10. launchers
    10.1. sign up modal
      10.1.1. sign up modal additional CLOSER
    10.2. contact modal
      10.2.1. contact modal additional CLOSER
    10.3. social icons launcher
    10.4. countdown launcher
      10.4.2. countdown launcher OPEN/CLOSE state
    10.5. menu launcher
      10.5.1. menu launcher additional CLOSER
  11. navigation
    11.1. navigation OPEN/CLOSE
    11.2. navigation hover state
    11.3. navigation animation
  12. YouTube player
  13. slick slider
    13.1. slick fullscreen slideshow
    13.2. slick fullscreen slideshow ZOOM/FADE
  14. swiper slider
    14.1. swiper parallax slider
*/

$(function () {
  "use strict";

  $(window).on("load", function () {
    // 1. preloader
    $("#preloader").fadeOut(600);
    $(".preloader-bg").delay(400).fadeOut(600);

    // 2. show elements
    // 2.1. show fadeIn
    setTimeout(function () {
      $(".fadeIn-element")
        .delay(1400)
        .css({
          display: "none",
        })
        .fadeIn(1600);
    }, 0);
    // 2.2. show borders
    setTimeout(function () {
      $(".logo, #menu-mobile-btn").removeClass("top-position");
    }, 800);
    setTimeout(function () {
      $(".social-icons-launcher, .progress-clock").removeClass(
        "bottom-position"
      );
    }, 800);
    // 2.3. show hero
    $(".hero-bg").addClass("hero-bg-show");
  });

  // 3. the calls
  // 3.1. call home
  $(".call-home").on("click", function () {
    $(".hero-bg")
      .removeClass("hero-bg-show-secondary")
      .addClass("hero-bg-show-primary");
    $(".logo")
      .removeClass("logo-position-secondary")
      .addClass("logo-position-primary");
    $("#menu-mobile-btn")
      .removeClass("menu-mobile-btn-position-secondary")
      .addClass("menu-mobile-btn-position-primary");
    $(".social-icons-launcher")
      .removeClass("social-icons-launcher-position-secondary")
      .addClass("social-icons-launcher-position-primary");
    $(".progress-clock")
      .removeClass("progress-clock-position-secondary")
      .addClass("progress-clock-position-primary");
    $(".progress-clock-hidden")
      .removeClass("progress-clock-hidden-position-secondary")
      .addClass("progress-clock-hidden-position-primary");
  });
  // 3.2. call page
  $(".call-page").on("click", function () {
    $(".hero-bg")
      .removeClass("hero-bg-show-primary")
      .addClass("hero-bg-show-secondary");
    $(".logo")
      .removeClass("logo-position-primary")
      .addClass("logo-position-secondary");
    $("#menu-mobile-btn")
      .removeClass("menu-mobile-btn-position-primary")
      .addClass("menu-mobile-btn-position-secondary");
    $(".social-icons-launcher")
      .removeClass("social-icons-launcher-position-primary")
      .addClass("social-icons-launcher-position-secondary");
    $(".progress-clock")
      .removeClass("progress-clock-position-primary")
      .addClass("progress-clock-position-secondary");
    $(".progress-clock-hidden")
      .removeClass("progress-clock-hidden-position-primary")
      .addClass("progress-clock-hidden-position-secondary");
  });

  // 4. highlight navigation
  $("a.menu-state").on("click", function () {
    $("a.menu-state").removeClass("active");
    $(this).addClass("active");
  });

  $(window).on("scroll", function () {
    // 5. to top arrow animation
    if ($(this).scrollTop() > 100) {
      $(".to-top-arrow").addClass("show");
    } else {
      $(".to-top-arrow").removeClass("show");
    }
  });
  // 5.1. to top arrow scroll to top
  $(".scrollToTop, #menu-mobile-btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // 6. facts counter
  $(".facts-counter-number").appear(function () {
    var count = $(this);
    count.countTo({
      from: 0,
      to: count.html(),
      speed: 1200,
      refreshInterval: 60,
    });
  });

  // 7. skills bar
  $(".show-skillbar").appear(function () {
    $(".skillbar").skillBars({
      from: 0,
      speed: 4000,
      interval: 100,
      decimals: 0,
    });
  });

  // 8. forms
  // 8.1. newsletter form
  $("form#subscribe").on("submit", function () {
    $("form#subscribe .subscribe-error").remove();
    var s = !1;
    if (
      ($(".subscribe-requiredField").each(function () {
        if ("" === jQuery.trim($(this).val()))
          $(this).prev("label").text(),
            $(this)
              .parent()
              .append(
                '<span class="subscribe-error">Please enter your Email</span>'
              ),
            $(this).addClass("inputError"),
            (s = !0);
        else if ($(this).hasClass("subscribeemail")) {
          var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          r.test(jQuery.trim($(this).val())) ||
            ($(this).prev("label").text(),
            $(this)
              .parent()
              .append(
                '<span class="subscribe-error">Please enter a valid Email</span>'
              ),
            $(this).addClass("inputError"),
            (s = !0));
        }
      }),
      !s)
    ) {
      $("form#subscribe input.submit").fadeOut("normal", function () {
        $(this).parent().append("");
      });
      var r = $(this).serialize();
      $.post($(this).attr("action"), r, function () {
        $("form#subscribe").slideUp("fast", function () {
          $(this).before(
            '<div class="subscribe-success">Thank you for subscribing.</div>'
          );
        });
      });
    }
    return !1;
  });
  // 8.2. contact form
  $("form#form").on("submit", function () {
    $("form#form .error").remove();
    var s = !1;
    if (
      ($(".requiredField").each(function () {
        if ("" === jQuery.trim($(this).val()))
          $(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">This field is required</span>'),
            $(this).addClass("inputError"),
            (s = !0);
        else if ($(this).hasClass("email")) {
          var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          r.test(jQuery.trim($(this).val())) ||
            ($(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">Invalid email address</span>'),
            $(this).addClass("inputError"),
            (s = !0));
        }
      }),
      !s)
    ) {
      $("form#form input.submit").fadeOut("normal", function () {
        $(this).parent().append("");
      });
      var r = $(this).serialize();
      $.post($(this).attr("action"), r, function () {
        $("form#form").slideUp("fast", function () {
          $(this).before(
            '<div class="success">Your email was sent successfully.</div>'
          );
        });
      });
    }
    return !1;
  });

  // 9. countdown
  $(document).on("ready", function () {
    // 9.1. countdown timer
    $(".countdown").countdown({
      until: new Date(Date.parse(setting.counter.lastDate)),
      layout: $(".countdown").html(),
      timezone: setting.counter.timeZone,
    });
  });
  // 9.2. countdown SETUP
  var setting = {
    counter: {
      lastDate: "10/21/2019 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
      timeZone: null,
    },
  };

  // 10. launchers
  // 10.1. sign up modal
  $(".sign-up-modal-launcher, .sign-up-modal-closer").on("click", function () {
    if ($(".sign-up-modal").hasClass("open")) {
      $(".sign-up-modal").removeClass("open").addClass("close");
      $(".introduction")
        .removeClass("introduction-off")
        .addClass("introduction-on");
    } else {
      $(".sign-up-modal").removeClass("close").addClass("open");
      $(".introduction")
        .removeClass("introduction-on")
        .addClass("introduction-off");
    }
  });
  // 10.1.1. sign up modal additional CLOSER
  $("#menu-mobile-btn, .social-icons-launcher, .progress-clock-wrapper").on(
    "click",
    function () {
      $(".sign-up-modal").removeClass("open").addClass("close");
    }
  );
  // 10.2. contact modal
  $(".contact-modal-launcher, .contact-modal-closer").on("click", function () {
    if ($(".contact-modal").hasClass("open")) {
      $(".contact-modal").removeClass("open").addClass("close");
    } else {
      $(".contact-modal").removeClass("close").addClass("open");
    }
  });
  // 10.2.1. contact modal additional CLOSER
  $("#menu-mobile-btn").on("click", function () {
    $(".contact-modal").removeClass("open").addClass("close");
  });
  // 10.3. social icons launcher
  $(".social-icons-launcher").on("click", function () {
    if (
      $(".social-icons-wrapper").hasClass("social-icons-wrapper-reveal-show")
    ) {
      $(".social-icons-wrapper")
        .removeClass("social-icons-wrapper-reveal-show")
        .addClass("social-icons-wrapper-reveal-hide");
      $(".introduction")
        .removeClass("introduction-off")
        .addClass("introduction-on");
    } else {
      $(".social-icons-wrapper")
        .removeClass("social-icons-wrapper-reveal-hide")
        .addClass("social-icons-wrapper-reveal-show");
      $(".introduction")
        .addClass("introduction-off")
        .removeClass("introduction-on");
      $("nav.navigation-menu").removeClass("show");
      $(".countdown-wrapper")
        .removeClass("countdown-wrapper-reveal-show")
        .addClass("countdown-wrapper-reveal-hide");
    }
  });
  // 10.4. countdown launcher
  $(".progress-clock-wrapper").on("click", function () {
    if ($(".countdown-wrapper").hasClass("countdown-wrapper-reveal-show")) {
      $(".countdown-wrapper")
        .removeClass("countdown-wrapper-reveal-show")
        .addClass("countdown-wrapper-reveal-hide");
      $(".introduction")
        .removeClass("introduction-off")
        .addClass("introduction-on");
    } else {
      $(".countdown-wrapper")
        .removeClass("countdown-wrapper-reveal-hide")
        .addClass("countdown-wrapper-reveal-show");
      $(".introduction")
        .addClass("introduction-off")
        .removeClass("introduction-on");
      $("nav.navigation-menu").removeClass("show");
      $(".social-icons-wrapper")
        .removeClass("social-icons-wrapper-reveal-show")
        .addClass("social-icons-wrapper-reveal-hide");
    }
  });
  // 10.4.2. countdown launcher OPEN/CLOSE state
  $(".progress-clock-wrapper").on("click", function () {
    if ($(".progress-clock").hasClass("open")) {
      $(".progress-clock").removeClass("open").addClass("close");
      $(".progress-clock-hidden").removeClass("close").addClass("open");
    } else if ($(".progress-clock-hidden").hasClass("open")) {
      $(".progress-clock").addClass("open").removeClass("close");
      $(".progress-clock-hidden").addClass("close").removeClass("open");
    } else {
      $(".progress-clock").removeClass("close").addClass("open");
      $(".progress-clock-hidden").removeClass("open").addClass("close");
    }
  });
  // 10.5. menu launcher
  $("#menu-mobile-btn").on("click", function () {
    if ($(".introduction").hasClass("introduction-off")) {
      $(".introduction")
        .removeClass("introduction-off")
        .addClass("introduction-on");
      $("nav.navigation-menu").removeClass("show");
    } else {
      $(".introduction")
        .removeClass("introduction-on")
        .addClass("introduction-off");
      $("nav.navigation-menu").addClass("show");
    }
  });
  // 10.5.1. menu launcher additional CLOSER
  $("#menu-mobile-btn").on("click", function () {
    $(".social-icons-wrapper")
      .removeClass("social-icons-wrapper-reveal-show")
      .addClass("social-icons-wrapper-reveal-hide");
    $(".countdown-wrapper")
      .removeClass("countdown-wrapper-reveal-show")
      .addClass("countdown-wrapper-reveal-hide");
  });

  // 11. navigation
  // 11.1. navigation OPEN/CLOSE
  $("nav.navigation-menu a").on("click", function () {
    if ($("nav.navigation-menu").hasClass("show")) {
      $("nav.navigation-menu").removeClass("show");
      $(".introduction")
        .removeClass("introduction-off")
        .addClass("introduction-on");
    } else {
      $("nav.navigation-menu").addClass("show");
    }
  });
  // 11.2. navigation hover state
  hoverMenu();
  imgMenu();
  function hoverMenu() {
    $(".menu li a").on("mouseenter", function () {
      var ref = $(this).data("ref"),
        menuImg = $('.menu-img[data-ref="' + ref + '"]');
      $(".menu li a").removeClass("active");
      $(this).addClass("active");
      $(".menu-img").removeClass("active");
      menuImg.addClass("active");
    });
  }
  function imgMenu() {
    $("[data-bg]").each(function () {
      var bg = $(this).data("bg");
      $(this).css({
        "background-image": "url(" + bg + ")",
        "background-position": "center center",
        "background-size": "cover",
      });
    });
  }
  // 11.3. navigation animation
  $(".line-box").on("mouseenter", function () {
    $(this).addClass("animated");
    setTimeout(function () {
      $(".animated").removeClass("animated");
    }, 2000);
  });

  // 12. YouTube player
  $("#bgndVideo").YTPlayer();

  // 13. slick slider
  // 13.1. slick fullscreen slideshow
  $(".slick-fullscreen-slideshow").slick({
    arrows: false,
    initialSlide: 0,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    speed: 1600,
    draggable: true,
    dots: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  // 13.2. slick fullscreen slideshow ZOOM/FADE
  $(".slick-fullscreen-slideshow-zoom-fade").slick({
    arrows: false,
    initialSlide: 0,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    speed: 1600,
    draggable: true,
    dots: false,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  // 14. swiper slider
  // 14.1. swiper parallax slider
  var swiper = new Swiper(".parallax .swiper-container", {
    autoplay: 4000,
    speed: 800,
    parallax: true,
    mousewheelControl: false,
    keyboardControl: false,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    paginationClickable: true,
  });
});
