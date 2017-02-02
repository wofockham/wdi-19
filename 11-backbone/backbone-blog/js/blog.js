// MODEL ///////////////////////////////////////////////////////////////////////
var Post = Backbone.Model.extend({
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

var p1 = new Post({title: 'My First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});

// seeds.rb ////////////////////////////////////////////////////////////////////
// TODO: Move these posts to the Rails server
var posts = new Posts([
  p1,
  new Post({
    title: 'Something About Startups',
    content: 'Something About Mary'
  }),
  new Post({
    title: 'Review of Gourmet Hotdogs',
    content: 'Something about condiments'
  })
]);

// VIEWS ///////////////////////////////////////////////////////////////////////
var AppView = Backbone.View.extend({
  el: '#main', // jQuery style CSS selector
  render: function () {
    this.$el.html('<ul id="posts"></ul>');
    this.collection.each(function (p) {
      var title = p.get('title');
      var $li = $('<li/>').text( title ); // FIX THIS: Seperate our concerns
      $li.appendTo('#posts');
    });
  }
});

$(document).ready(function () {
  var appView = new AppView({collection: posts});
  appView.render();
});
