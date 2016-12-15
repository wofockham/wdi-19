var greet = function (event) {

  if (13 === event.which) { // 13 is the Enter key
    alert("Please do not press Enter");
  }

  var name = $('#name').val();
  $('#greeting').text("Hello " + name);
};

$('#useName').on('click', greet);
$('#name').on('keyup', greet);
