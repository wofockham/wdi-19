var app = app || {};

// seeds.rb ////////////////////////////////////////////////////////////////////
// TODO: Move these posts to the Rails server
var p1 = new app.Post({id: 1, title: 'My First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});

app.posts = new app.Posts([
  p1,
  new app.Post({
    id: 2,
    title: 'Something About Startups',
    content: 'Something About Mary'
  }),
  new app.Post({
    id: 3,
    title: 'Review of Gourmet Hotdogs and Fish Fingers',
    content: 'Something about condiments'
  })
]);

$(document).ready(function () {
  // We define the router instance as a global variable so we can use it in
  // some of our views.
  app.router = new app.Router();
  // Kicks off the BB routing and enables the browser back and forward buttons.
  Backbone.history.start();
});
