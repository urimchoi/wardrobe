Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
		console.log('didInsertElement');
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);