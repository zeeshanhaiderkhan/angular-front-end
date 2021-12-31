import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { DeletepatientComponent } from './deletepatient/deletepatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { ViewallpatientsComponent } from './viewallpatients/viewallpatients.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [
  {
    path:'addpatient',
    component: AddpatientComponent
  },
  {
    path:'deletepatient/:id',
    component:DeletepatientComponent
  },
  {
    path:'updatepatient/:id',
    component:UpdatepatientComponent
  },
  {
    path:'viewpatient/:id',
    component:ViewpatientComponent
  },
  {
    path:'viewallpatients',
    component:ViewallpatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
