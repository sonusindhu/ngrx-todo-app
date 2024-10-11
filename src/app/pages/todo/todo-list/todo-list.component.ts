import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo, TodoState } from 'src/app/shared/models/todo.model';
import { clearTodos, deleteTodo, updateTodoState } from 'src/app/shared/store/todo/todo.actions';
import { getTodos } from 'src/app/shared/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  private store = inject(Store<TodoState>);

  public todos = this.store.select(getTodos);

  onChange(todo: Todo){
    this.store.dispatch(updateTodoState({ todo }))
  }
  
  onDelete(todo: Todo){
    this.store.dispatch(deleteTodo({ todo }))
  }

  onReset(){
    this.store.dispatch(clearTodos())
  }
}
