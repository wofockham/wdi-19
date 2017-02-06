var app = app || {};

// We use custom template tags so Rails ignores them.
_.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs code (for if statements, loops etc.)
    interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function () {
  app.router = new app.Router();
  app.posts = new app.Posts();

  // We can't start the router until we've loaded all our data asynchronously.
  app.posts.fetch().done(function () {
    Backbone.history.start();
  });
});
