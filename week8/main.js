$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({ deg: 0 }).animate(
      { deg: angle },
      {
        duration: duration,
        easing: easing,
        step: function(now) {
          $elem.css({
            transform: 'rotate(' + now + 'deg)'
          });
        },
        complete: complete || $.noop
      }
    );
  });
};

$(function() {
  var $d = $.Deferred();

  $('.poa').animateRotate(1080, 5000);
  $('.rect').animateRotate(-1080, 5000);
  for (let index = 0; index < 4; index++) {
    $('.circle')
      .animate({
        width: 534,
        height: 534
      })
      .animate({
        width: 634,
        height: 634
      });
  }
  $('.circle').animate({
    width: 534,
    height: 534
  });
  setTimeout(function() {
    $('.rect').animate({
      width: '100vw',
      height: '100vh'
    });
  }, 5000);
  setTimeout(function() {
    $('.circle').animate({
      width: '100vw',
      height: '100vh'
    });
    $('.circle').css({ 'border-radius': 0 });
  }, 6000);
  setTimeout(function() {
    $('.poa').css({
      transition: '2s all',
      transform: 'scale(1)'
    });
    $('.poa')
      .css({ transform: 'scale(100)' })
      .delay(2000)
      .add('.into')
      .fadeOut(500);
  }, 7000);
});
