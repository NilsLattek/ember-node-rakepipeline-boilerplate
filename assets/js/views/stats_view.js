Todos.StatsView = Em.View.extend({
  template: minispade.require('templates/stats_view'),
  remainingBinding: 'Todos.todosController.remaining',

  remainingString: function() {
    var remaining = this.get('remaining');
    return remaining + (remaining === 1 ? " item" : " items");
  }.property('remaining')
});