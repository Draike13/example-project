import { Component, signal, WritableSignal } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  getTasks() {
    return this.taskService.taskList();
  }

  completeTask(task: Task) {
    task.completed = !task.completed;
  }
}
