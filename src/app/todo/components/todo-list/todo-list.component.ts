import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../+state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() add = new EventEmitter<void>();
  @Output() done = new EventEmitter<Todo['id']>();

  constructor() {
  }

  ngOnInit() {
  }

  onAdd() {
    this.add.emit();
  }

  onDone(id: Todo['id']) {
    this.done.emit(id);
  }
}