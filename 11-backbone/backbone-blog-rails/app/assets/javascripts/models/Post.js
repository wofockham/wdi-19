var app = app || {};

// Backbone equivalents for an ActiveRecord class in Rails.
// Methods, "columns", validations, event handlers.
// MODEL ///////////////////////////////////////////////////////////////////////
app.Post = Backbone.Model.extend({
  urlRoot: '/posts',
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});
