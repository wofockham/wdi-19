$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  Backbone.history.start();

  app.secrets = new app.Secrets();
  app.secrets.fetch();
});
