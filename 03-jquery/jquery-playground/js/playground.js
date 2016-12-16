$(document).ready(function () {

  var greet = function (event) {

    if (13 === event.which) { // 13 is the Enter key
      alert("Please do not press Enter");
    }

    var name = $('#name').val();
    $('#greeting').text("Hello " + name);
  };

  $('#useName').on('click', greet);
  $('#name').on('keyup', greet);

  ////////////////////////////////////////////////////////////////////////////////
  // Calculator

  var addition = function () {
    var first = $('#first-number').val();
    var second = $('#second-number').val();
    var result = parseFloat(first) + parseFloat(second);
    $('#result').text( result );
  };

  $('#calculate').on('click', addition);

  ////////////////////////////////////////////////////////////////////////////////
  // Slideshow

  var fadeBill = function () {
    $('.bill').fadeToggle(3000, fadeBill); // Recursion
  };

  fadeBill();

  ////////////////////////////////////////////////////////////////////////////////
  // Magic Numbers

  // Callback to calculate and show a random number
  var doMagic = function () {
    var magicNumber = Math.random();
    $(this).closest('.magic').find('h3').text(magicNumber);
  }
  // Attach the callback to the button
  $('.magic button').on('click', doMagic);

  ////////////////////////////////////////////////////////////////////////////////
  // Apply funText
  $('h1').funText(100, 'candy');


});
