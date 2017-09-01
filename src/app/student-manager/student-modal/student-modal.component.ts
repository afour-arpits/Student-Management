import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from "@angular/router"
import { StudentService } from '../../service/student.service'

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {
  public student = {}
  constructor(private router: Router, private studentService : StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      let id = value["id"]
      if(id)
        this.studentService.getStudent(id).subscribe( data => this.student = data )
    })
  }

  public closeModal() {
    this.router.navigate(['../']);
  }

  public submitStudent() {
    if(this.student.hasOwnProperty('$key'))
      this.studentService.updateStudent(this.student['$key'], this.student)
    else
      this.studentService.addStudent(this.student)
    this.router.navigate(['../']);
  }
}
