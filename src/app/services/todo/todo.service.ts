import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TodoModel} from "./model/todo.model";

@Injectable()
export class TodoService {
  #todoSubject: BehaviorSubject<TodoModel[]> = new BehaviorSubject<TodoModel[]>([]);

  todo$ = this.#todoSubject.asObservable();

  constructor() { }

  set todos(value: TodoModel[]) {
    if (confirm('Are you sure want to override all todos?')) {
      this.#todoSubject.next(value);
    }
  }

  get todos(): TodoModel[] {
    return this.#todoSubject.value;
  }

  addTodo(value: TodoModel): void {
    const todos = this.todos;
    todos.push(value);

    this.#todoSubject.next(todos);
  }

}
