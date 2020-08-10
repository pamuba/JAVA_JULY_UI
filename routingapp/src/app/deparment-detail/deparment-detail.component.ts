import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deparment-detail',
  template: `
   <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styles: [
  ]
})
export class DeparmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
