import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-viewallpatients',
  templateUrl: './viewallpatients.component.html',
  styleUrls: ['./viewallpatients.component.css']
})
export class ViewallpatientsComponent implements OnInit {
  public patients:any;

  constructor(private service: RestAPIService) {
    
   }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.service.doGetAll().subscribe({
      next: (p) => {this.patients = p; console.log(this.patients)},
      error:(err) =>{console.error(err)},
      complete:() => {console.log('Loaded all Patients')}
    });
  }


}
