import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoCompletedComponent } from './pages/todo-completed/todo-completed.component';
import { TodoIncompletedComponent } from './pages/todo-incompleted/todo-incompleted.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoListComponent },
  { path: 'completed', pathMatch: 'full', component: TodoCompletedComponent },
  { path: 'incompleted', pathMatch: 'full', component: TodoIncompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
