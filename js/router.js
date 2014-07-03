App.Router.map(function() {
  this.resource('app', { path: '/'}, function() {

  });
});

App.AppRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('item');
  }
});