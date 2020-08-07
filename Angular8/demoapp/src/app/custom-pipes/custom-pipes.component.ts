import { Component, OnInit } from '@angular/core';
import { SuperHeros } from '../super-heros'

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  superHeros:SuperHeros[]

  constructor() { }

  ngOnInit(): void {
    this.superHeros =[
      {Id:1, Name:"IRON MAN"},
      {Id:2, Name:"THOR"},
      {Id:3, Name:"CAPTAIN AMERICA"},
      {Id:4, Name:"HULK"},
    ]
  }

}
