import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-deparment-detail',
  template: `
   <h3>You selected department with id = {{departmentId}}</h3>
   <a (click)="goPrevious()">Previous</a> &nbsp;&nbsp;
   <a (click)="goNext()">Next</a>

   <div>
     <button (click)="gotoDepartments()">Back</button>
   </div>
  `,
  styles: [
  ]
})
export class DeparmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let pnextId = this.departmentId + 1;
    this.router.navigate(['/departments', pnextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, name:'pp'}]);
  }

}
