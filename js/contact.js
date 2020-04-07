
$(document).ready(function(){
    $('#contact-start1').slideUp(500);
    $('#contact-start2').delay(500).slideUp(500);
   
    

    $('.contact-img').delay(1000).animate({
      opacity : 1},1000);
    $('textPath').delay(1000).animate({
      opacity : 1},1000);
    $('#nav').css('animation-delay','1.5s');
   
   

});

setTimeout(function() {
         $('body').css('display','flex');
      }, 1200);   

$('.contact').hover(function(){
        $('.sns').css('animation','slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both');
    }, function() {
        $('.sns').css('animation','slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both');
    });

  var btn = document.getElementById('email');

  var clipboard = new Clipboard(btn);
    clipboard.on('success', function(e) {
      $('.alert').css('opacity','1');
      $('.alert').delay(1500).animate({opacity:0});
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });

    

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


var scale = function scale(a, b, c, d, e) {
  return (a - b) * (e - d) / (c - b) + d;
};

var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');

var crazy = function crazy(e) {
  var x = e.clientX || e.touches[0].clientX;
  TweenMax.to(text1, .6, {
    attr: {
      startOffset: "".concat(scale(x, 0, window.innerWidth, 0, 75), "%")
    },
    ease: Power3.easeOut
  });
  TweenMax.to(text2, .8, {
    attr: {
      startOffset: "".concat(scale(x, 0, window.innerWidth, 75, 0), "%")
    },
    ease: Power3.easeOut
  });
};

['mousemove', 'touchstart', 'touchmove'].forEach(function (e) {
  window.addEventListener(e, crazy);
});