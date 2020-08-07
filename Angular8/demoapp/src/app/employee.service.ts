import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"John", "age":22},
      {"id":2, "name":"Elena", "age":33},
      {"id":3, "name":"Mary", "age":35},
      {"id":4, "name":"Jim", "age":44},
    ]
  }
}
