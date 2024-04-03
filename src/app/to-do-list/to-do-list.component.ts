import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  // templateUrl: './to-do-list.component.html',
  template: ` <p [style]="listStyle">Title: {{ taskTitle }}</p>
   <button (click)="changeColor()">Change Color</button>`,
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  taskTitle = 'Read cup of coffee';
  listStyle=`color: red`;

  changeColor(){
    if(this.listStyle == `color: blue`)
    {
      this.listStyle = `color: red`;
    }
    else{
      this.listStyle = `color: blue`;
    }
  }
}
