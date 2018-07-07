//第一次進來
if (!location.hash) location.hash = '#1';
scrollTo(0, 0);
$('.page img').attr('src', $(':target img').attr('src'));
$(function() {
  $('.control-button').click(function() {
    $('body').toggleClass('dark');
  });
  $('.left').click(function() {
    location.hash =
      '#' +
      (parseInt(location.hash.substr(1)) - 1
        ? parseInt(location.hash.substr(1)) - 1
        : 1);
    $('.page img').attr('src', $(':target img').attr('src'));
  });
  $('.right').click(function() {
    location.hash =
      '#' +
      (parseInt(location.hash.substr(1)) + 1 <= $('.page-switch img').length
        ? parseInt(location.hash.substr(1)) + 1
        : location.hash.substr(1));
    $('.page img').attr('src', $(':target img').attr('src'));
  });
  window.addEventListener(
    'hashchange',
    () => {
      scrollTo(0, $('.page img').offset()['top']);
    },
    false
  );
  $('.page-switch .img').click(function() {
    location.hash = '#' + this.id;
  });
});
