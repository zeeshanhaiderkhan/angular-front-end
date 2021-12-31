import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-deletepatient',
  templateUrl: './deletepatient.component.html',
  styleUrls: ['./deletepatient.component.css']
})
export class DeletepatientComponent implements OnInit {

  public patient:any;

  constructor(private route:ActivatedRoute, private router: Router, private service:RestAPIService) { }

  ngOnInit(): void {
    this.deletePatient();
  }

  deletePatient(){
    const patientId = this.route.snapshot.paramMap.get("id");
    console.log(patientId)
    
    this.service.doDELETE(patientId).subscribe({
      next: (pat) => {this.patient =pat; console.log(this.patient)},
      error: (err) =>{console.error(err)},
      complete: () =>{console.log("Patient Deleted");this.router.navigate(['viewallpatients'])},
    });
  }
}
