$(document).ready(function() {
  $('.add-task-header .input-task').on('click focusin', function() {
    var $el = $(this);
    $el.closest('.add-task').addClass('active');
  });

  $(document).on(
    'click',
    '.add-task .cancel-btn,.task .cancel-btn',
    function() {
      var $el = $(this);
      $el.closest('.add-task').removeClass('active');
      $el.closest('.task').removeClass('active');
    }
  );
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
  $(document).on('click', '.chbox-wrap .box-mask', function() {
    var $el = $(this);
    $el.closest('.add-task-header').toggleClass('checked');
  });

  $(document).on('click', '.fa-star-o', function() {
    $el = $(this);
    $el.closest('.task').toggleClass('task-star');
    $el.closest('.add-task').toggleClass('task-star');
  });

  $(document).on('click', '.fa-pencil', function() {
    $el = $(this);
    $el.closest('.task').toggleClass('active');
  });

  $(document).on('click', '.task .add-task-btn', function() {
    $el = $(this);
    $task = $(this).closest('.task');

    var task = {};

    task.is_new = false;

    task.is_star = $task.hasClass('.is_star');
    task.is_new = $task.hasClass('.is_star');
    task.checked = $task.find('input:checkbox').prop('checked');
    task.title = $task.find('.task-title').val();
    task.file = $task.find('input:file').val();
    task.date = $task.find('input[type=date]').val();
    task.textarea = $task.find('textarea').val();
    task.time = $task.find('input[type=time]').val();

    $task.html(render_task(task));

    $task.removeClass('active');

    console.log($task);
  });

  $(document).on('click', '.add-task .add-task-btn', function() {
    $el = $(this);
    $task = $(this).closest('.add-task');

    var task = {};

    task.is_new = true;

    task.is_star = $task.hasClass('task-star');
    task.checked = $task.find('input:checkbox').prop('checked');
    task.title = $task.find('.task-title').val();
    task.file = $task.find('input:file').val();
    task.date = $task.find('input[type=date]').val();
    task.textarea = $task.find('textarea').val();
    task.time = $task.find('input[type=time]').val();

    $('.tasks').prepend(render_task(task));

    $task.removeClass('active task-star');
    $task.find('.checked').removeClass('checked');
    $task.find('input').each(function(index, el) {
      if ($(el).is(':checkbox')) {
        $(el).prop('checked', false);
      } else {
        $(el).val('');
      }
    });

    console.log($task);
  });

  var render_task = function(task) {
    return `
    ${
      task.is_new
        ? '<div class="task ' + (task.is_star ? 'task-star' : '') + '">'
        : ''
    }
    <span class="sortable">::</span>
    <div class="add-task-header ${task.checked ? 'checked' : ''} flex-row">
        <div class="chbox-wrap">
            <label>
                <input class='task-checkbox' type="checkbox" ${
                  task.checked ? 'checked' : ''
                } >
                <div class="box-mask"></div>
            </label>
        </div>
        <input type="text" class="ft-title input-task task-title" placeholder="Add Task" value="${
          task.title
        }">
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
    <div class="task-sub ft-paragraph">
        <i class="fa fa-file-o  ${
          task.file ? '' : 'hide'
        }" aria-hidden="true"></i>
        <i class="fa fa-calendar ${
          task.date ? '' : 'hide'
        }" aria-hidden="true">${task.date.replace(/-/g, '/')}</i>
        <i class="fa fa-commenting-o ${task.textarea ? '' : 'hide'}"></i>
    </div>
    <div class="task-content">
        <label class="ft-subtitle">Deadline</label>
        <input class="ft-paragraph" type="date" value="${task.date}">
        <input class="ft-paragraph" type="time" value="${task.time}">
        <label class="ft-subtitle">File</label>
        <input type="file" name="" id="" value="${task.file}">
        <label class="ft-subtitle">Comment</label>
        <textarea class="ft-paragraph" name="" id="" cols="30" rows="10">${
          task.textarea
        }</textarea>
        <div class="cancel-btn ft-title">
            <span class="cancel-icon"></span>
            Cancel
        </div>
        <div class="add-task-btn ft-title">
            <span class="plus"></span>
            Save Task
        </div>
    </div>
    ${task.is_new ? '</div>' : ''}
    `;
  };

  Sortable.create(tasklist, {
    handle: '.sortable',
    animation: 150
  });
});
