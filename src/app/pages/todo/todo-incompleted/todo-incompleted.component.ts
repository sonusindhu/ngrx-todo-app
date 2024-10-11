import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/shared/models/todo.model';
import { getInCompletedTodos } from 'src/app/shared/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-incompleted',
  templateUrl: './todo-incompleted.component.html',
  styleUrls: ['./todo-incompleted.component.scss']
})
export class TodoIncompletedComponent {

  private store = inject(Store<TodoState>);

  public todos = this.store.select(getInCompletedTodos);

}
