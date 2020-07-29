import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface completeTask {
  task: string;
  evt: MouseEvent | KeyboardEvent
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('taskvalue') taskValue: ElementRef;
  tasks: string[] = ['Swimming', 'Walking', 'Workout'];
  // Add a particular task in to the todo list
  addTask(args) {
    if (this.tasks.indexOf(args) > -1) {
      alert("The task " + '"' + args + '"' + " is already added!!!");
    } else {
      this.tasks.push(args);
      this.taskValue.nativeElement.value = '';
      this.taskValue.nativeElement.focus();
    }
  }

  enterOnText(args) {
    if (this.tasks.indexOf(args.value) > -1) {
      alert("The task " + '"' + args.value + '"' + " is already added!!!");
    } else {
      this.tasks.push(args.value);
      this.taskValue.nativeElement.value = '';
      this.taskValue.nativeElement.focus();
    }
  }

  // Click the complete action in list.
  completeTask(args: completeTask) {
    let listElements: HTMLLIElement = (args.evt.target as HTMLInputElement).closest('li');
    if ((args.evt.currentTarget as HTMLInputElement).checked) {
      listElements.classList.add('completedTaskStyle');
    } else {
      listElements.classList.remove('completedTaskStyle');
    }
  }

  // Remove the task.
  removeTask(index) {
    confirm('Do you want to delete the task?') ? this.tasks.splice(index, 1) : '';
  }
}
