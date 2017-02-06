var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postTemplate').html();
    var postHTML = _.template(postTemplate);

    this.$el.html( postHTML(this.model.attributes) );
  }
});
