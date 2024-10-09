import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const addTodo = createAction('[TODO: Add Todo]', props<{ todo: Todo }>());
export const updateTodoState = createAction('[TODO: Update Todo State]', props<{ todo: Todo }>());
export const deleteTodo = createAction('[TODO: Delete Todo]', props<{ todo: Todo }>());
export const clearTodos = createAction('[TODO: Clear Todo]');
