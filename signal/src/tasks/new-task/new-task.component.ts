import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormGroup, FormsModule} from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { ResidenceTypeImp } from '../interface/task';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, TaskListComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent {

  taskArr = Object.entries(ResidenceTypeImp).map(([key, value]) => ({ key, value }));

  form: FormGroup;
}



