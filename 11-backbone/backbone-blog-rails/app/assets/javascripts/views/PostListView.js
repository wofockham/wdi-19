var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: 'li', // Backbone will create a <li/> for us
  events: {
    'click': 'showPost'
  },
  showPost: function () {
    app.router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }
});
