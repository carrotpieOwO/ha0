/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */


jQuery(document).ready(function() {
  var bodyOffset = jQuery('body').offset();
  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > bodyOffset.top) {
      jQuery('button').css('opacity','1');
    } else {
      jQuery('button').css('opacity','0');
    }
  });
});

$(window).scroll(function () {
  $(".skills__title").each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {
      $(this).css(
        "animation",
        "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      );
    }
  });

  $(".content_function_img").each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {
      $(this)
        .delay(i * 100)
        .queue(function (next) {
          $(this).css(
            "animation",
            "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
          );
          next();
        });
    }
  });

  $(".content-text").each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {
      $(this)
        .delay(i * 250)
        .queue(function (next) {
          $(this).css("animation", "bounce-top 0.9s both");
          next();
        });
    }
  });

  $(".content_function").each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {
      $(this).css(
        "animation",
        "fadeIn 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      );
     
    }
  });
});

$('.img-wrap--content').on('click',function(){
  location.href="project.html";
});

$('button').on('click',function(){
  location.href="project.html";
});





 
