var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main', // jQuery style CSS selector
  render: function () {
    this.$el.html('<ul id="posts"></ul>');
    this.collection.each(function (p) {
      var postList = new app.PostListView({model: p});
      postList.render();
    });
  }
});
