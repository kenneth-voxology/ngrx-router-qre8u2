import { createAction, props } from '@ngrx/store';

import { Todo } from './todo.model';

export const addTodo = createAction('[Todo List Page] Add Todo', props<{ title: Todo['title'] }>());

export const markTodoDoneFromList = createAction('[Todo List Page] Mark Todo Done', props<{ id: Todo['id'] }>());

export const markTodoDoneFromDetails = createAction('[Todo Page] Mark Todo Done', props<{ id: Todo['id'] }>());