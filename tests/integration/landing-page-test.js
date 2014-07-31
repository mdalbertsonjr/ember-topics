import startApp from 'ember-topics/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Landing Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

test('should welcome me to topics', function(){
  visit('/');
  andThen(function(){
    equal(find('h2#title').text(), 'Welcome to Topics', "expect index page to welcome the user");
  });
});