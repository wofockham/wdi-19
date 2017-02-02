$(document).ready(function () {
  setInterval(function () {

    $.get('/brother').done(function (name) {
      name = name.toUpperCase();
      $('#brother').text(name);
    });

    $.get('/time').done(function (data) {
      $('#time').text(data);
    });

    $('#uptime').load('/uptime');

  }, 1000);

});
