$(document).ready(function () {
  setInterval(function () {

    $.get('/info').done(function (data) {
      $('#brother').text(data.brother);
      $('#uptime').text(data.uptime);
      $('#time').text(data.time);
    });

    // $.get('/brother').done(function (name) {
    //   name = name.toUpperCase();
    //   $('#brother').text(name);
    // });
    //
    // $.get('/time').done(function (data) {
    //   $('#time').text(data);
    // });
    //
    // $('#uptime').load('/uptime');

  }, 1000);

});
