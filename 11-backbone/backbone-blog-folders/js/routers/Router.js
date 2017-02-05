var app = app || {};

// ROUTER //////////////////////////////////////////////////////////////////////
// A mad combination of router and controller
// The router connects a hash URL (#like_this) to some particular method.
// The router keeps track of the state of the application.
app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },
  index: function () {
    var appView = new app.AppView({collection: app.posts});
    appView.render();
  },
  show: function (id) {
    var post = app.posts.get(id);
    var postView = new app.PostView({model: post});
    postView.render();
  }
});
