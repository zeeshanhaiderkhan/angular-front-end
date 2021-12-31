import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {
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

}
