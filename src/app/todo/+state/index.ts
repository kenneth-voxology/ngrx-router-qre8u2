import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectRouteParams } from '../../router.selectors';

import { TodoState } from './todo.model';

export * from './todo.reducer';
export * from './todo.actions';
export * from './todo.model';
export * from './todo.effects';

export const selectTodo = createFeatureSelector<TodoState>('todo');

export const selectTodoCount = createSelector(
  selectTodo,
  state => state.ids.length,
);

export const selectTodoIds = createSelector(
  selectTodo,
  state => state.ids,
);

export const selectTodoEntities = createSelector(
  selectTodo,
  state => state.entities,
);

export const selectAllTodos = createSelector(
  selectTodoIds,
  selectTodoEntities,
  (ids, entities) => ids.map(id => entities[id]),
);

export const selectCurrentTodo = createSelector(
  selectTodoEntities,
  selectRouteParams,
  (entities, { todoId }) => todoId && entities[todoId],
);