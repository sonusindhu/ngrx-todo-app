import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/shared/models/todo.model';
import { getCompletedTodos } from 'src/app/shared/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.scss']
})
export class TodoCompletedComponent {

  private store = inject(Store<TodoState>);

  public todos = this.store.select(getCompletedTodos);

}
