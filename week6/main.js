$(function() {
  $('.step-2,.step-3,.step-4,.step-5').hide();

  // $('.btn').on('click', function() {
  //   //動畫切換特效
  //   var s_x = $(this).offset().left;
  //   $(this)
  //     .closest('[class*=step]')
  //     .animate({
  //       left: '-100vw'
  //     })
  //     .hide(0)
  //     .next('div')
  //     .show()
  //     .css({
  //       left: '+100vw'
  //     })
  //     .animate(
  //       {
  //         left: s_x
  //       },
  //       {
  //         duration: 600
  //       }
  //     );

  //   $('.form-status ul > :not(li.ok):first').addClass('ok');
  // });

  var make_validate = function(class_form, rules) {
    var setting = {
      rules: rules,
      submitHandler: function() {
        var el = this.currentForm;
        console.log(this.currentForm);
        var s_x = $(el).offset().left;
        $(el)
          .closest('[class*=step]')
          .animate({
            left: '-100vw'
          })
          .hide(0)
          .next()
          .show()
          .css({
            left: '+100vw'
          })
          .animate(
            {
              left: s_x
            },
            {
              duration: 600
            }
          );

        $('.form-status ul > :not(li.ok):first').addClass('ok');
      }
    };

    $(class_form).validate(setting);
  };
  make_validate('.step-1', {
    password2: {
      equalTo: '[name=password]'
    }
  });

  make_validate('.step-2', {
    phone: {
      required: true,
      phoneTW: true
    },
    birthdate_Y: 'year',
    birthdate_M: 'month',
    birthdate_D: 'day',
    // required 好像只能用在:checked上面(待確認)
    // city: {
    //   required: '[name=dist],[name=address]'
    // }
    city: 'required',
    dist: 'required',
    address: 'required'
  });
  make_validate('.step-3', {
    file: {
      required: true,
      // accept: 'image/*'
      accept: 'image/jpeg, image/jpeg'
    }
  });

  make_validate('.step-4', {
    card: {
      required: true
      // creditcard: true  不能過...?
    }
  });

  $.validator.addMethod(
    'phoneTW',
    function(value, element) {
      var str = value;
      var result = false;

      if (str.length > 0) {
        var patt_phone = /^[\d\-\(\)\#]{10}$/;
        result = patt_phone.test(str);
      } else {
        result = true;
      }

      return result;
    },
    '電話號碼不符合格式，僅接受數字、#-()等符號'
  );

  $.validator.addMethod(
    'year',
    function(value, element) {
      var str = value;
      var result = false;

      if (str.length > 0) {
        var patt_phone = /^(1[0-9]{3}|20[0-9]{2})$/;
        result = patt_phone.test(str);
      } else {
        result = true;
      }

      return result;
    },
    '不是正確日期格式(年份)'
  );

  $.validator.addMethod(
    'month',
    function(value, element) {
      var str = value;
      var result = false;

      if (str.length > 0) {
        var patt_phone = /^(0?[1-9]|1[012])$/;
        result = patt_phone.test(str);
      } else {
        result = true;
      }

      return result;
    },
    '不是正確日期格式(月份)'
  );

  $.validator.addMethod(
    'day',
    function(value, element) {
      var str = value;
      var result = false;

      if (str.length > 0) {
        var patt_phone = /^(0?[1-9]|[12]\d|3[01])$/;
        result = patt_phone.test(str);
      } else {
        result = true;
      }

      return result;
    },
    '不是正確日期格式(日)'
  );
});
