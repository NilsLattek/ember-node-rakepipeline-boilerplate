Todos.Todo = Em.Object.extend({
  title: null,
  isDone: false
});

Todos.Todo.loadAll = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/api/todos'
  }).success(function(data) {
    callback(data);
  });
}