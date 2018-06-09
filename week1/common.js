$(document).ready(function() {
  $('.add-task-header .input-task').on('click focusin', function() {
    var $el = $(this);
    $el.closest('.add-task').addClass('active');
  });

  $('.add-task .cancel-btn,.task .cancel-btn').click(function() {
    var $el = $(this);
    $el.closest('.add-task').removeClass('active');
    $el.closest('.task').removeClass('active');
  });
  $('nav ul li').click(function() {
    $(this)
      .parent()
      .children('.active')
      .removeClass('active');
    $(this).addClass('active');
  });

  //預設值設定
  $('.chbox-wrap input:checked').each(function() {
    var $el = $(this);
    $el.closest('.add-task-header').addClass('checked');
  });
  $('.chbox-wrap .box-mask').click(function() {
    var $el = $(this);
    $el.closest('.add-task-header').toggleClass('checked');
  });

  $(document).on('click', '.fa-star-o', function() {
    $el = $(this);
    $el.closest('.task').toggleClass('task-star');
  });

  $(document).on('click', '.fa-pencil', function() {
    $el = $(this);
    $el.closest('.task').toggleClass('active');
  });
});
