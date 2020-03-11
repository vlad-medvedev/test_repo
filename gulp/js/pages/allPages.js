
// aside
$(document).ready(function () {
  var $effect = {

    init: function () {
      var $this = this;

      $('.slideup_button--js').each(function () {
        var text = $(this).html();
        $(this).attr('data-text', text);
      });
      $(window).on('load resize', function () {
        $this.effect();
      });
    },
    effect: function () {
      $('.slideup_button--js').each(function () {
        var text = $(this).attr('data-text');
        $(this).html(text);
        $(this).html('<div style="height: 16px"><span>' + text + '</span><span>' + text + '</span></div>');
      });
    }

  };
  $effect.init();
  if ($(window).width() > 1024) {
    function changeSize() {
      var height = $(window).height() - $(".aside_body").outerHeight() - $(".top_panel").height();
      $(".aside_menu").css("height", height);
      $(".aside_menu").perfectScrollbar('update');
    }
    $(function () {
      $(".aside_menu").perfectScrollbar();
    });
    $(window).on('load', function () {
      changeSize();
    });
    $(window).on('resize', function () {
      changeSize();
    });
  }
  $('.aside_toggler__btn').on('click', function () {
    var _ = $(this);
    var $aside = $('.aside');
    var $asideBody = $('.aside_body');
    var $asideFooter = $('.aside-footer');

    if ($("body").hasClass('menu-opened')) {

      _.removeClass('aside_toggler__btn--active');
      $asideBody.removeAttr('style').removeClass('-active');
      $("body").removeClass('menu-opened');


    } else {

      _.addClass('aside_toggler__btn--active');
      $asideBody
      .addClass('-active')
      .css({
        height: $(window).height() - $(".aside_mobile").height() - $(".top_panel").height()
      });
      $("body").addClass('menu-opened');

    }
  });
});

$(document).ready(function () {

  $('input[type="tel"]').inputmask('+7 (999) 999-99-99');

  $('.js-popup').magnificPopup({
    type: 'inline',
    midClick: true,
    closeBtnInside: true,
    removalDelay: 300,
    mainClass: 'mfp-fade mfp-custom',
    fixedContentPos: true
  });

  function criteoCodeCallback() {
    window.criteo_q = window.criteo_q || [];

    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    var day = new Date();
    var time = day.getTime();
    var productId = randomNumber + time;

    var deviceType = /iPad/.test(navigator.userAgent)?"t":/webOS|Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)?"m":"d";

    window.criteo_q.push(
        { event: "setAccount", account: 42578 },
        { event: "setEmail", email: "" },
        { event: "setSiteType", type: deviceType },
        { event: "trackTransaction", ecpplugin: "1cbitrix", id: productId, item: [
            { id: "1", price: 1, quantity: 1 },
          ]});
  }

  function recall_ajax() {
    if ($('.call_back__form .call_back__form_field--notError').length == 2) {
      $.magnificPopup.open({
        items: {
          src: '#callback-success'
        },
        type: 'inline'
      });

      var $form = $(this);

      $.ajax({
        type: 'POST',
        url: '/ajax/get_call.php',
        data: $form.serialize(),
        dataType: 'json'
      });

      if ((typeof mindbox !== 'undefined') && (typeof Pixel !== 'undefined')) {

        var $name = $(this).find("input[name='name']").val();
        var $phone = $(this).find("input[name='phone']").val();
        var $micID = Pixel.uid;

        mindbox("async", {
          operation: "Registration",
          data: {
            customer: {
              ids: {
                micid: $micID
              },
              firstName: $name,
              mobilePhone: $phone,
              subscriptions: [
                {
                  pointOfContact: "SMS",
                  valueByDefault: "false",
                  isSubscribed: "true"
                }
              ]
            },
            pointOfContact: "novogradpavlinoru"
          }
        });
        mindbox("async", {
          operation: "RequestCallBackPavlino",
          data: {
            customer: {
              mobilePhone: $phone,
              ids: {
                micid: $micID
              }
            },
            pointOfContact: "novogradpavlinoru"
          }
        });

      }


      $('.call_back__form_field').val('');

    }
    event.preventDefault();
    return false;
  };

  $('.call_back__form').on('submit', recall_ajax);


  $('.call_back__form_field').blur(function () {
    var id = $(this).attr('name');
    var val = $(this).val();

    switch (id) {
      case 'name':
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;

        if (val.length > 2 && val != '' && rv_name.test(val)) {
          $(this).addClass('call_back__form_field--notError').removeClass('call_back__form_field--hasError');
        } else {
          $(this).addClass('call_back__form_field--notError').addClass('call_back__form_field--hasError');
        }
        break;
      case 'phone':
        var rv_phone = /^[0-9()\-+ ]+$/;
        if (val != '' && rv_phone.test(val)) {
          $(this).addClass('call_back__form_field--notError').removeClass('call_back__form_field--hasError');
        } else {
          $(this).removeClass('call_back__form_field--notError').addClass('call_back__form_field--hasError');
        }
        break;
    }
  });

});




//STAROSELE-279
/*  */
Pixeltimer = setInterval(function() {
  if (Pixel.uid) {
    $(".mic-id").html(Pixel.uid);
    $(".input-mic-id").val(Pixel.uid);
    clearInterval(Pixeltimer);
  }
}, 1000);

//STAROSELE-279