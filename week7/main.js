$(function() {
  var ship = 45;
  $(document).on('keydown', function(event) {
    $ship = $('.ship');
    console.log(event.key);
    if (event.key == 'ArrowLeft') {
      ship += 3;
      $ship.css('transform', `translate(-25%, -25%) rotate( ${ship - 45}deg)`);
    } else if (event.key == 'ArrowRight') {
      ship -= 3;
      $ship.css('transform', `translate(-25%, -25%) rotate( ${ship - 45}deg)`);
    }
    console.log(ship);
  });

  var left = '+=10';
  var top = '+=10';

  var funt = function() {
    if ($('.red1').offset().left > window.innerWidth - $('.red1').width()) {
      left = '-=10';
    } else if ($('.red1').offset().left < 0) {
      left = '+=10';
    }

    if ($('.red1').offset().top > window.innerHeight - $('.red1').height()) {
      top = '-=10';
    } else if ($('.red1').offset().top < 0) {
      top = '+=10';
    }

    $('.red1').css({
      left: left,
      top: top
    });
    window.requestAnimationFrame(funt);
  };
  window.requestAnimationFrame(funt);
});
