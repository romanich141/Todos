import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  newTodo: string = "";
  todos = [];
  isShow = false;

  add() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = "";
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

  remove() {
    this.todos.pop();
  }

  @ViewChild("alert") alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove("show");
  }
}
