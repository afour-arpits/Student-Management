import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentManagerComponent } from './student-manager/student-manager.component';
import { StudentModalComponent } from './student-manager/student-modal/student-modal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-manager',
    pathMatch: 'full'
  },
  {
    path: 'student-manager',
    component: StudentManagerComponent,
    children : [
      {
        path: 'create',
        component: StudentModalComponent,
      },
      {
        path: 'update/:id',
        component: StudentModalComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
