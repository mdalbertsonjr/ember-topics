import DS from 'ember-data';

var Topics = DS.Model.extend({
  name: DS.attr('string'),
  score: DS.attr()
});

Topics.reopenClass({
  FIXTURES: [
    { id: 1,
      name: 'Ember',
      score: 0
    },
    { id: 2,
      name: 'Angular',
      score: 2
    },
    { id: 3,
      name: 'Knockout',
      score: 2
    }
  ]
});

export default Topics;