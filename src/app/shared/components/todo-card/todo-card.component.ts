import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() toDoFromOtherPage: string = '';
  @Input() todoId!: number;
  @Output() onRemoveClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  onRemove() {
    this.onRemoveClick.emit(this.toDoFromOtherPage);
  }

  goToDetailPage() {
    console.log(this.todoId)
    this.router.navigate([`/todos/${this.todoId}`]);
  }

}
