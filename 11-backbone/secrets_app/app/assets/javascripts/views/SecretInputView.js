var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: '#secretInput',
  events: {
    'click button': 'createSecret'
    // TODO: submit secret with enter
  },
  createSecret: function () {
    var userSecret = this.$el.find('textarea').val();
    var secret = new app.Secret({content: userSecret});
    secret.save();
    this.$el.find('textarea').val('').focus();
  },
  render: function () {
    this.$el.html( $('#secretInputView').html() );
  }
});
