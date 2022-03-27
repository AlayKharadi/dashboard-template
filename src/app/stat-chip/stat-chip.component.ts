import { Component, OnInit, Input } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stat-chip',
  templateUrl: './stat-chip.component.html',
  styleUrls: ['./stat-chip.component.css']
})
export class StatChipComponent implements OnInit {
  @Input() name!: string;
  @Input() num!: number;
  @Input() iconName!: any;

  constructor() { 

   }

  ngOnInit(): void {
  }

}
