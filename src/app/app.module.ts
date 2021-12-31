import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './patient/patient.component';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { DeletepatientComponent } from './deletepatient/deletepatient.component';
import { HttpClientModule } from '@angular/common/http';
import { RestAPIService } from './rest-api.service';
import { CommonModule } from '@angular/common';
import { ViewallpatientsComponent } from './viewallpatients/viewallpatients.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    DeletepatientComponent,
    ViewallpatientsComponent,
    ViewpatientComponent,
    DeletepatientComponent,
    UpdatepatientComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
