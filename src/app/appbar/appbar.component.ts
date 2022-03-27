import { Component, OnInit } from '@angular/core';
import { faMessage, faEnvelope, faBoxArchive, faFileCircleCheck, faCartShopping, faHome, faUser, faPrint, faFileLines, faFileCode, faTimeline, faT, faDroplet, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  faHome = faHome;
  faEnvelope = faEnvelope;
  faMessage = faMessage;
  faFileCircleCheck = faFileCircleCheck;
  faBoxArchive = faBoxArchive;
  faTimeline = faTimeline;
  faFileCode = faFileCode;
  faPrint = faPrint;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faFileLines = faFileLines;
  faT = faT;
  faDroplet = faDroplet;
  faAngleDoubleDown = faAngleDoubleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
