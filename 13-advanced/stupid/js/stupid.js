$(document).ready(function () {

  // Parallax //////////////////////////////////////////////////////////////////
  var $body = $('body');
  var $bill = $('.bill');
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 2); // Entire background
    $bill.css('background-position-y', -scrollTop * 0.75); // Just Bill
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', function (e) {
    var size = 10 + Math.random() * 150;

    var $bubble = $('<div class="bubble" />').css({
      left: e.pageX,
      top: e.pageY,
      width: size + 'px',
      height: size + 'px'
    });

    $bubble.appendTo($body); // Alternatively: $body.append($bubble);

    $bubble.animate({top: -200}, 2000, function () {
      $bubble.remove(); // Clean up after ourselves (and conserve memory)
    });
  });
});
