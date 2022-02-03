import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { markTodoDoneFromDetails, selectCurrentTodo, Todo, TodoState } from '../../+state';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: [ './todo-container.component.css' ]
})
export class TodoContainerComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(private readonly store: Store<TodoState>) {
  }

  ngOnInit() {
    this.todo$ = this.store.pipe(select(selectCurrentTodo));
  }

  onDone(id: Todo['id']) {
    this.store.dispatch(markTodoDoneFromDetails({ id }));
  }
}