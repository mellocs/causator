import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  addNew: boolean = false
  options: boolean = false
  tasks: any[] = []
  newTask: string = '';


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.add({
        id: this.tasks.length + 1,
        title: this.newTask,
      });
      this.newTask = '';
    }
    console.log(this.tasks)
  }

  showAddForm() {
    this.addNew = !this.addNew
  }

  close() {
    this.addNew = !this.addNew
  }

  showOptions() {
    this.options = !this.options
  }

  closeOptions() {
    this.options = false
  }

}
