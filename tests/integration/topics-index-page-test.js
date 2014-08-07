import startApp from 'ember-topics/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Topics Index Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

test('should show a list of topics', function(){
  visit('/topics');
  andThen(function(){
    equal(find('h3').text(), 'Topics Index', "expect index page to welcome the user");
  });
});