import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StudentService {
  private items: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase) { 
    this.items = db.list('students');
  }

  getList() : FirebaseListObservable<any[]>{
    return this.items
  }
  getStudent(key) {
    return this.db.object('students/'+key)
  }
  addStudent(student: Object) {
    return this.items.push(student);
  }
  updateStudent(key: string, newData: Object) {
    return this.items.update(key, newData);
  }
  deleteStudent(key: string) {    
    return this.items.remove(key);
  }
}
