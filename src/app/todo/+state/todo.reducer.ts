import { generate as generateId } from 'shortid';

import { createReducer, on } from '@ngrx/store';

import { addTodo, markTodoDoneFromDetails, markTodoDoneFromList } from './todo.actions';
import { TodoState } from './todo.model';

export const initialState: TodoState = {
  entities: {
    'todo-0': {
      id: 'todo-0',
      title: 'Todo #0'
    },
    'todo-1': {
      id: 'todo-1',
      title: 'Todo #1'
    },
    'todo-2': {
      id: 'todo-2',
      title: 'Todo #2'
    },
  },
  ids: [ 'todo-0', 'todo-1', 'todo-2' ],
};

export const todoReducer = createReducer(initialState,
  on(
    addTodo,
    (state, { title }) => {
      const newTodo = {
        id: `todo-${generateId()}`,
        title,
      };
      return {
        entities: {
          ...state.entities,
          [newTodo.id]: newTodo,
        },
        ids: [ ...state.ids, newTodo.id ],
      };
    }),
  on(
    markTodoDoneFromDetails,
    markTodoDoneFromList,
    (state, { id }) => {
      const entities = {
        ...state.entities,
      };
      delete entities[id];
      const ids = [ ...state.ids.filter(todoId => todoId !== id) ];
      return {
        entities,
        ids,
      };
    }),
);