import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Sticky Notes";
  issues = [{ id: 1, text: " Create User functionality ", name: "Jhon Doe" }];
  progress = [{ id: 1, text: "Create Dashboard Functionality", name: "Smith" }];
  completed = [{ id: 4, text: "Add responsive design", name: "Dev" }];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.completed);
  }

  addNotes(form) {
    const data = {
      id: this.issues.length + 1,
      text: form.note,
      name: form.name
    };
    this.issues.push(data);
  }

  deleteNote(id, type) {
    console.log(id,type)
    if (type === "issues") {
      this.issues = this.issues.filter(item => item.id != id);
    } else if (type === "progress") {
      this.progress = this.progress.filter(item => item.id != id);
    } else {
      this.completed = this.completed.filter(item => item.id != id);
    }
  }
}
