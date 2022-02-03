import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { addTodo, markTodoDoneFromList, selectAllTodos, Todo, TodoState } from '../../+state';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: [ './todo-list-container.component.css' ]
})
export class TodoListContainerComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private readonly store: Store<TodoState>) {
  }

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectAllTodos));
  }

  onAdd() {
    this.store.dispatch(addTodo({ title: 'My new task' }));
  }

  onDone(id: Todo['id']) {
    this.store.dispatch(markTodoDoneFromList({ id }));
  }
}