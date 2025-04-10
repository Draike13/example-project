import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [TaskInputComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'example-project';
}
