import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../../models/todo.model';
import {
  addTodo,
  updateTodoState,
  deleteTodo,
  clearTodos,
} from './todo.actions';

const initialTodos: TodoState = {
  todos: [{ title: 'initial', completed: false, id: 1 }],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialTodos,
  on(addTodo, (state, { todo }) => {
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }),
  on(updateTodoState, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((i) => {
      return i.id === todo.id ? { ...i, completed: !todo.completed } : i;
    }),
  })),
  on(deleteTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.filter((i) => i.id !== todo.id),
  })),
  on(clearTodos, (state) => initialTodos)
);
