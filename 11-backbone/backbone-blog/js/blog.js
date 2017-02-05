// Backbone equivalents for an ActiveRecord class in Rails.
// Methods, "columns", validations, event handlers.
// MODEL ///////////////////////////////////////////////////////////////////////
var Post = Backbone.Model.extend({
  defaults: {
    id: 0,
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

// Like an AR collection giving us methods like .get() and .pluck()
var Posts = Backbone.Collection.extend({
  model: Post
});

// seeds.rb ////////////////////////////////////////////////////////////////////
// TODO: Move these posts to the Rails server
var p1 = new Post({id: 1, title: 'My First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});

var posts = new Posts([
  p1,
  new Post({
    id: 2,
    title: 'Something About Startups',
    content: 'Something About Mary'
  }),
  new Post({
    id: 3,
    title: 'Review of Gourmet Hotdogs and Fish Fingers',
    content: 'Something about condiments'
  })
]);

// VIEWS ///////////////////////////////////////////////////////////////////////
// Views have two main responsibilities:
//   present information to the user (usually with HTML)
//   respond to user interaction (i.e. events)
var AppView = Backbone.View.extend({
  el: '#main', // jQuery style CSS selector
  render: function () {
    this.$el.html('<ul id="posts"></ul>');
    this.collection.each(function (p) {
      var postList = new PostListView({model: p});
      postList.render();
    });
  }
});

var PostListView = Backbone.View.extend({
  tagName: 'li', // Backbone will create a <li/> for us
  events: {
    'click': 'showPost'
  },
  showPost: function () {
    router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }
});

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postTemplate').html();
    var postHTML = _.template(postTemplate);

    this.$el.html( postHTML(this.model.attributes) );
  }
});

// ROUTER //////////////////////////////////////////////////////////////////////
// A mad combination of router and controller
// The router connects a hash URL (#like_this) to some particular method.
// The router keeps track of the state of the application.
var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },
  index: function () {
    var appView = new AppView({collection: posts});
    appView.render();
  },
  show: function (id) {
    var post = posts.get(id);
    var postView = new PostView({model: post});
    postView.render();
  }
});

// We define the router instance as a global variable so we can use it in
// some of our views.
var router = new Router();

$(document).ready(function () {
  // Kicks off the BB routing and enables the browser back and forward buttons.
  Backbone.history.start();
});
