import { Todo } from './todo';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mode: string = 'list';
  todos: Todo[] = [];
  title: string = "Lista de Tarefas"
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.loadToLocalStorage();
  }

  create() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveToLocalStorage();
    this.clearForm();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    index != -1 ?  this.todos.splice(index, 1) : 
    console.log("Item não encontrado! impossível remover");
    this.saveToLocalStorage()
  }
  

  markAsDone(todo: Todo) {
    todo.done = true;
    this.saveToLocalStorage()
  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
    this.saveToLocalStorage()
  }

  clearForm(){
    this.form.reset()
  }

  saveToLocalStorage(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.changeMode('list')
  }

  loadToLocalStorage(){
    const dados = localStorage.getItem('todos')
    this.todos = JSON.parse(dados!);
  }

  changeMode(mode: string) {
    this.mode = mode
    }


}
