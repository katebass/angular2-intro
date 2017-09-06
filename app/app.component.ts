import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
})

export class AppComponent{
	title = 'Hello! My name is Kate!';
	//todos: Todo[] = todos;
	//newTodoTitle: string = '';

	
	// Добавление новой задачи

	// Первый вариант
	// create(event: Event, title: string){
	// 	event.preventDefault();
	// 	let todo: Todo = new Todo(title);
	// 	this.todos.push(todo);
	// 	//this.newTodoTitle = '';
	// }

	//Второй вариант
	// create(event: Event, input: HTMLInputElement){
	// 	event.preventDefault();

	// 	let todo: Todo = new Todo(input.value);
	// 	this.todos.push(todo);
	// 	input.value = '';
	// }

	// Третий вариант
	// create(){
	// 	let todo: Todo = new Todo(this.newTodoTitle);
	// 	this.todos.push(todo);
	// 	this.newTodoTitle = '';
	// }

	// create(title: string){
	// 	const todo = new Todo(title);
	// 	this.todos.push(todo);
	// }

}