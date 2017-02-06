var app = app || {};

_.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs code (for if statements, loops etc.)
    interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function () {
  app.router = new app.Router();
  app.posts = new app.Posts();

  app.posts.fetch().done(function () {
    // We define the router instance as a global variable so we can use it in
    // some of our views.
    // Kicks off the BB routing and enables the browser back and forward buttons.
    Backbone.history.start();
  }); // AJAX: Async


});
