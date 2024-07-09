import { Component, EventEmitter, input, Output } from '@angular/core';
import { Task } from '../interface/task';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  lista = input<Task[] | undefined>();
  @Output() markTaskAsCompleted = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<Task>();



}
