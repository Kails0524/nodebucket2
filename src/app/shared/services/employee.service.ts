//Title: nodebucket
//Author: Professor Krasso
//Modified By: Kailee Stephens
//Attribution: Code from Bellevue Web Dev Sessions

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  findEmployeeById(empId: number): Observable<any>{
    //path to server code
    return this.http.get('/api/employees/' + empId)
  }
}
