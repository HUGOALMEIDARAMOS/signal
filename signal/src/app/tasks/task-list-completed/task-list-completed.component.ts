import { Component, EventEmitter, input, Output } from '@angular/core';
import { Task } from '../interface/task';


@Component({
  selector: 'app-task-list-completed',
  standalone: true,
  imports: [],
  templateUrl: './task-list-completed.component.html',
  styleUrl: './task-list-completed.component.scss'
})
export class TaskListCompletedComponent {
  lista = input<Task[] | undefined>();
  @Output() removeTask = new EventEmitter<Task>();
}
