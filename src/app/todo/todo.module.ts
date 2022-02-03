import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoEffects, todoReducer } from './+state';

import { TodoListContainerComponent } from './containers/todo-list-container/todo-list-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'todos', component: TodoListContainerComponent },
      { path: 'todos/:todoId', component: TodoContainerComponent },
    ]),
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([ TodoEffects ]),
  ],
  declarations: [
    TodoListContainerComponent,
    TodoListComponent,
    TodoContainerComponent,
    TodoComponent,
  ],
})
export class TodoModule {
}