var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    // Self rendering secrets
    this.on('add', function (s) {
      var secretView = new app.SecretView({model: s});
      secretView.render();
    });
  }
})
