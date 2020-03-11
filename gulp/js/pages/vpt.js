//= ../libs/jquery.sticky-kit.min.js

$(document).ready(function () {

  function stickAside() {
    var $element = $('.fixed_right_block');

    if ($(window).width() > 1024) {
      $element.stick_in_parent({
        parent: '.page__wrapper',
        inner_scrolling: false,
        recalc_every: 0
      });
    } else {
      $element.trigger('sticky_kit:detach');
    }
  }
  $(window).on("click", ".landing--block_left--small_p", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".landing--block_left").on("click", "a", function (event) {

    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top,

        // высот плавающей шапки
        head = $(".header").height() + 30;

    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".seven").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top,

        // высот плавающей шапки
        head = $(".header").height() + 30;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });


});

