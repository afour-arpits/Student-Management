import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    //this.items = studentService.getList();
    // studentService.getList().subscribe( list => {
    // console.log(list)
    // this.items = list
    // })
    // this.items = db.list('students');
    // this.items.push({ name: "test1", lastName: "zxy", rollno: 1 });
    // this.items.push({ name: "test2", lastName: "zxy", rollno: 2 });
    // this.items.push({ name: "test3", lastName: "zxy", rollno: 3 });
    // this.items.push({ name: "test4", lastName: "zxy", rollno: 4 });
    // this.items.push({ name: "test5", lastName: "zxy", rollno: 5 });
  }
}
