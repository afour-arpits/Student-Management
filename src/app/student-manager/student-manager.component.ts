import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css']
})
export class StudentManagerComponent implements OnInit {
  public students: FirebaseListObservable<any[]>
  constructor(private studentService : StudentService) {}

  public ngOnInit() {
    this.students = this.studentService.getList();
  }

  public deleteStudent(key) {
    this.studentService.deleteStudent(key)
  }
}
