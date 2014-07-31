import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTopicsENV.locationType
});

Router.map(function() {
  this.route('topics');
});

export default Router;
