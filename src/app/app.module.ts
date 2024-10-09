import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './shared/store/todo/todo.reducers';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { TodoCompletedComponent } from './pages/todo-completed/todo-completed.component';
import { TodoIncompletedComponent } from './pages/todo-incompleted/todo-incompleted.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoFormComponent, TodoCompletedComponent, TodoIncompletedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
