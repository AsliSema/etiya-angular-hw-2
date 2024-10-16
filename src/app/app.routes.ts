import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './shared/components/todo-detail/todo-detail.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';

export const routes: Routes = [
  { path: 'homepage', redirectTo: '' },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:todoId', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
