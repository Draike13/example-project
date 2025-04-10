import { Component, effect } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  imports: [],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css',
})
export class TaskInputComponent {
  constructor(private taskService: TaskService) {}

  submitNewTask(task: string) {
    this.taskService.newTask.set(task);
  }
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
