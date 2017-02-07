$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  Backbone.history.start();

  app.secrets = new app.Secrets();
  app.secrets.fetch();

  // Polling
  setInterval(function () {
    app.secrets.fetch();
  }, 1000);

  // Alternative recursive polling avoiding setInterval
  // https://zetafleet.com/blog/2010/04/why-i-consider-setinterval-to-be-harmful.html
  (function poll() {
    app.secrets.fetch();
    setTimeout(poll, 2000);
  })(); // Alman function (AKA IIFE)

});
