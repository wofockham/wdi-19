$(document).ready(function () {
  $.get('/brother').done(function (name) {
    $('#brother').text(name);
  });
});
