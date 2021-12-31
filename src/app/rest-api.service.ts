import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class RestAPIService {

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  doPOST(patient:any){
    let url = 'http://localhost:8700/patient/register';
    return this.http.post(url,patient,this.httpOptions);
  }
  doGetAll(){
    let url ='http://localhost:8700/patient/all';
    return this.http.get(url);
  }
  doGET(id:any){
    let url='http://localhost:8700/patient/'+id;
    //console.log(this.http.get(url))
    return this.http.get(url);
  }
  doDELETE(id:any){
    let url='http://localhost:8700/patient/'+id;
    return this.http.delete(url);
  }
  doUPDATE(id:any,patient:any){
    let url='http://localhost:8700/patient/'+id;
    return this.http.put(url,patient,this.httpOptions);
  }

}
