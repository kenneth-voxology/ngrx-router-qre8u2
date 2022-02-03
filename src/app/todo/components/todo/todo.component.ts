import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../+state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() done = new EventEmitter<Todo['id']>();

  constructor() {
  }

  ngOnInit() {
  }

  onDone() {
    this.done.emit(this.todo.id);
  }
}