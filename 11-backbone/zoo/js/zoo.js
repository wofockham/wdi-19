var Animal = Backbone.Model.extend({
  initialize: function () {
    this.on('change:name', function (model) {
      var newName = model.get('name');
      console.log('My new name is', newName);
    });
  },
  defaults: {
    name: 'Some animal',
    ecosystem: '',
    stripes: 0
  }
});

var Zoo = Backbone.Collection.extend({
  initialize: function () {
    this.on('add', function () {
      console.log('New animal added to zoo');
    });
  },
  model: Animal
});

var f = new Animal({name: 'Kermit', ecosystem: 'pond'});
var t = new Animal({name: 'Tigger', ecosystem: 'under the bed'});
var b = new Animal({name: 'Monty the Monarch', ecosystem: 'widespread'});

var ourZoo = new Zoo([f, t, b]);
