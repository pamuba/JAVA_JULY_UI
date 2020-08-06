import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public successClass = 'text-success';
  public hasErrors = false;
  public isSpecial = true;

  public messegeClasses = {
    'text-danger': !this.hasErrors,
    'text-success':!this.hasErrors,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
