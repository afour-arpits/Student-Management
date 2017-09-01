import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentManagerComponent } from './student-manager.component';
import { StudentModalComponent } from './student-modal/student-modal.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [StudentManagerComponent, StudentModalComponent]
})
export class StudentManagerModule { }
