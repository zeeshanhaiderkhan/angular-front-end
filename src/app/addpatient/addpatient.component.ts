import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css'],
  providers:[RestAPIService]
})
export class AddpatientComponent implements OnInit {

  name=""
  cnic=""
  contact=""
  email=""

  constructor(private router:Router, private service:RestAPIService) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
    let patient = {
      patient_name:this.name,
      patient_contact: this.contact,
      patient_cnic:this.cnic,
      patient_email:this.email
    };

    //console.log(patient);
    this.service.doPOST(patient).subscribe({
      error: (err) => {console.error(err),this.router.navigate(['viewallpatients'])},
      complete:() =>{console.log("Patient Added");this.router.navigate(['viewallpatients'])}
    });
  }

}
