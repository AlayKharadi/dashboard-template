import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-chip',
  templateUrl: './user-chip.component.html',
  styleUrls: ['./user-chip.component.css']
})
export class UserChipComponent implements OnInit {
  @Input() name!: string;
  @Input() role!: string;
  @Input() iconName!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
