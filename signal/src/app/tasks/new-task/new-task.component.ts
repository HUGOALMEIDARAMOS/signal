
import { Component, ChangeDetectionStrategy, signal, computed, effect } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResidenceTypeImp, Task } from '../interface/task';
import { TaskListCompletedComponent } from '../task-list-completed/task-list-completed.component';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TaskListComponent, ReactiveFormsModule, CommonModule, RouterOutlet, TaskListCompletedComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent {


  task = new FormControl('', Validators.required);
  category = new FormControl(ResidenceTypeImp.Pessoal, Validators.required);
  taskCategories = Object.values(ResidenceTypeImp);
  tasks = signal<Task[]>(this.getTasksFromStorage());

  uncompletedTasks = computed(() =>
    this.tasks().filter((task) => !task.isCompleted)
  );

  completedTasks = computed(() =>
    this.tasks().filter((task) => task.isCompleted)
  );

  hasCompletedTasks = computed(() => this.completedTasks().length > 0);

  hasUncompletedTasks = computed(() => this.uncompletedTasks().length > 0);


   constructor(){
    effect(() => {
      this.saveTasksInStorage()
      });
   }


  addTask(){
    if(this.task.invalid){
      return
    }

    this.tasks.update((tasks) => {
      const id = this.generateRandomId();
      const taskTitle = this.task.value as string;
      const taskCategory = this.category.value as ResidenceTypeImp;


      const newTask: Task = { title: taskTitle, tipo: taskCategory, id: id,  isCompleted: false };

      return [...tasks, newTask];
    });

    this.task.reset();
    this.category.reset();
  }

  generateRandomId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }


  markTaskAsCompleted(task: Task) {
    this.tasks.update((tasks) => {
      return tasks.map(t => t === task ? { ...task, isCompleted: true } : t);
    });
  }



  removeTask(task: Task) {
    console.log(task);
    this.tasks.update((tasks) => {
      return tasks.filter(t => t !== task);
    });
  }

  saveTasksInStorage() {
    if (this.tasks()) {
      window.localStorage.setItem("tasks", JSON.stringify(this.tasks()));
    }
  }

  getTasksFromStorage() {
    return JSON.parse((window.localStorage.getItem("tasks") as string) || "[]");
  }

}



