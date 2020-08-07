import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = "";
  public name = "";
  constructor() { }

  ngOnInit(): void {
  }
  onclick(value){
    // console.log("Welcome to the Class")
    // this.greeting = "The Button Clicked";
    // this.name = value;
    console.log(value)
  }

}
