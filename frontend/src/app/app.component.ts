import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tasks = [];
  newTask = { description: "", completed: false };

  constructor(private http: HttpClient) {
    this.refreshTasks();
  }

  refreshTasks() {
    this.http.get<any[]>("/api/tasks").subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    this.http.post("/api/tasks", this.newTask).subscribe(() => {
      this.newTask = { description: "", completed: false };
      this.refreshTasks();
    });
  }

  updateTask(task) {
    this.http.put(`/api/tasks/${task._id}`, task).subscribe(() => {
      this.refreshTasks();
    });
  }

  deleteTask(task) {
    this.http.delete(`/api/tasks/${task._id}`).subscribe(() => {
      this.refreshTasks();
    });
  }
}
