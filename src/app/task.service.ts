import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  newTask: WritableSignal<string> = signal('');
  taskList: WritableSignal<Task[]> = signal([]);

  addTask = effect(() => {
    if (this.newTask() !== '') {
      const liveTask = {
        id: this.taskList()!.length + 1,
        name: this.newTask(),
        completed: false,
      };
      this.taskList.update((current) => [...current, liveTask]);
      this.newTask.set('');
    }
  });
}
