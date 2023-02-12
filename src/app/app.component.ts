import { Todo } from './todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
removerItem() {
throw new Error('Method not implemented.');
}
  todos: Todo[] = [];
  title: string = "minhas tarefas"

  constructor() {
    this.todos.push(new Todo(1,"Estudar angular", false))
    this.todos.push(new Todo(2,"Estudar css", false))
    this.todos.push(new Todo(3,"Estudar js p front", false))
  }

  alteratexto(){
    this.title = "Title Modified";
  }
}
