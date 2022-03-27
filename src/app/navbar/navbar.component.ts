import { Component, OnInit } from '@angular/core';
import { faMessage, faEnvelope, faBoxArchive, faFileCircleCheck, faStar, faMoon, faSearch, faBell, faCartShopping, faUser, faFlagUsa } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faEnvelope = faEnvelope;
  faMessage = faMessage;
  faBoxArchive = faBoxArchive;
  faFileCircleCheck = faFileCircleCheck;
  faStar = faStar;
  faMoon = faMoon;
  faSearch = faSearch;
  faCartShopping = faCartShopping;
  faBell = faBell;
  iconName = faUser;
  faFlagUsa = faFlagUsa;
  constructor() { }

  ngOnInit(): void {
  }

}
