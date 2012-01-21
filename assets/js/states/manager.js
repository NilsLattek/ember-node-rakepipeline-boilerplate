minispade.require('views/main_view');
minispade.require('models/todo');
minispade.require('controllers/todos_controller');

Todos.stateManager = Em.StateManager.create({
  main: Em.ViewState.create({
    view: Todos.MainView.create(),

    enter: function(stateManager) {
      this._super(stateManager);

      Todos.Todo.loadAll(function(result) {
        Todos.todosController.createTodos(result);
      });
    }
  }),
  // add more states
});