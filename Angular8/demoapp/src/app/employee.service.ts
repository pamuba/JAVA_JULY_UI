import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string ="/assets/data/employees.json";

  private jsonData:string = "https://jsonplaceholder.typicode.com/users"
  
  constructor(private http:HttpClient) { }

  getJsonData(){
    return this.http.get(this.jsonData);
  }


  getEmployees():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._url);
  }
}
