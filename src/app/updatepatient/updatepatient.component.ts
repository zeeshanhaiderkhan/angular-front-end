import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  public patient:any;

  constructor(private route:ActivatedRoute, private router: Router, private service:RestAPIService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(){
    const patientId = this.route.snapshot.paramMap.get("id");
    console.log(patientId)
    
    this.service.doGET(patientId).subscribe({
      next: (pat) => {this.patient =pat;},
      error: (err) =>{console.error(err)},
      complete: () =>{console.log("Patient Loaded")},
    });
  }

  updatePatient(){
    let uPatient = {
      patient_name:this.patient.patient_name,
      patient_contact: this.patient.patient_contact,
      patient_cnic:this.patient.patient_cnic,
      patient_email:this.patient.patient_email
    };

     //console.log(patient);
     this.service.doUPDATE(this.route.snapshot.paramMap.get("id"),this.patient).subscribe({
      next:()=>{console.log("Patient Update");alert("Patient Updated!");},
      error: (err) => {console.error(err);alert("Patient Updated!");this.router.navigate(['viewallpatients'])},
      complete:() =>{console.log("Patient Update");alert("Patient Updated!");this.router.navigate(['viewallpatients'])}
    });


  }

}
