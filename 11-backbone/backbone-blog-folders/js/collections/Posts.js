var app = app || {};

// Like an AR collection giving us methods like .get() and .pluck()
app.Posts = Backbone.Collection.extend({
  model: app.Post
});
