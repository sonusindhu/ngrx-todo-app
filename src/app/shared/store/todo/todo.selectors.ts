import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../../models/todo.model';

export const todSelector = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(todSelector, (store) => store.todos);
export const getCompletedTodos = createSelector(todSelector, (store) =>
  store.todos.filter((i) => i.completed)
);
export const getInCompletedTodos = createSelector(todSelector, (store) =>
  store.todos.filter((i) => !i.completed)
);
export const getTodoById = (id: number) =>
  createSelector(todSelector, (store) => store.todos.find((i) => i.id === id));
