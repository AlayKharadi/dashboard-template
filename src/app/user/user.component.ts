import { Component, OnInit } from '@angular/core';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:string = "John Doe";
  //In terms of k
  money:number = 48.9;
  faMedal = faMedal;

  constructor() { }

  ngOnInit(): void {
  }

}
