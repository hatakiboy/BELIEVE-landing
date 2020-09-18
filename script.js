$(function () {
  $('.toggles button').click(function () {
    let get_id = this.id;
    let get_current = $('.posts .' + get_id);

    $('.post').not(get_current).hide(700);
    get_current.show(700);
  });

  $('#showall').click(function () {
    $('.post').show(700);
  });
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 8,
  });
});

if ($(window).width() < 850) {
  $('.owl-carousel').owlCarousel({
    items: 3,
  });
}
