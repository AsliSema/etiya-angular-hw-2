import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetToDoResponse } from '../../models/getToDoResponse';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  todoId!: number;
  todoData!: GetToDoResponse;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTodoIdFromRoute();
  }


  getTodoIdFromRoute(){
    this.httpClient
      .get<GetToDoResponse>(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      .subscribe({
        next: (response: GetToDoResponse) => {
          console.log('Başarılı:', response);
        },
        error: (err: any) => {
          console.log('HATA', err);
        },
        complete: () => {
          console.log('İstek başarılı bitti');
        },
      });
  } 


}
