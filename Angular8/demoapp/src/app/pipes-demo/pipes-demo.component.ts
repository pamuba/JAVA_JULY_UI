import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  public name = "Hi how are you";
  public d = new Date();
  public person = {
    "firstName":"John",
    "lastName":"Smith"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
