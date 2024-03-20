import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ContactsComponent } from '../contacts/contacts.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DashboardComponent,
    NgFor,
    ContactsComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    CommonModule, 
    HttpClientModule, 
    RouterOutlet
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
