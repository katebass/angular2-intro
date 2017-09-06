import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';
//import { todos } from '../shared/data';

@Component({
	moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit{
	todos: Todo[];

	constructor(private todoService: TodoService) {	
		this.todos = [];
	}

	ngOnInit(){
		this.todos = this.todoService.getTodos();
	}

	// Переключатель задачи - выполнена / нет
	// toggle(todo: Todo){
	// 	todo.completed = !todo.completed;
	// }

	// Удаление задачи в списке
	// delete(todo: Todo){
	// 	let index = this.todos.indexOf(todo);
	// 	if(index > -1) this.todos.splice(index, 1);
	// }

	delete(todo: Todo){
		this.todoService.deleteTodo(todo);
	}

	toggle(todo: Todo){
		this.todoService.toggleTodo(todo);
	}
}