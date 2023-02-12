import { Todo } from './todo';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  title: string = "minhas tarefas"
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.todos.push(new Todo(1,"Estudar angular", false))
    this.todos.push(new Todo(2,"Estudar css", true))
    this.todos.push(new Todo(3,"Estudar js p front", false))
  }

  alteratexto(){
    this.title = "Title Modified";
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    index != -1 ?  this.todos.splice(index, 1) : console.log("Item não encontrado! impossível remover");
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
  }
}
