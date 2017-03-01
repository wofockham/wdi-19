$(document).ready(function () {
  $('#add-color').on('click', function () {
    var color = $('#color').val();
    var $swatch = $('<div/>').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation
  // We can listen for events on elements that haven't been created yet.
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // Here we use event delegation to reduce the number of event handlers.
  $('.canvas').on('mouseover', '.pixel', function (e) {
    console.log(e);
    var color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });

});
