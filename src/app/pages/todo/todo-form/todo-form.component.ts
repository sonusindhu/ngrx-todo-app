import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo, TodoState } from 'src/app/shared/models/todo.model';
import { addTodo } from 'src/app/shared/store/todo/todo.actions';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  private store = inject(Store<TodoState>);
  @ViewChild('todoRef') todoRef!: ElementRef<HTMLInputElement>
  addTodo(title: string){
    const todo: Todo = {
      title,
      completed: false,
      id: Math.floor(Math.random() * (99999999999 - 999999 + 1) + 999999)
    }
    this.store.dispatch(addTodo({ todo }))
    this.todoRef.nativeElement.value = '';
    this.todoRef.nativeElement.focus();
  }
}
