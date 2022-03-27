import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {
  @Input() num!: number;
  barChartData!: any;
	barChartOptions!: any;
  constructor() { }

  ngOnInit(): void {
    this.barChartData = {
      datasets : [{
        data: [ 5, 10, 7, 15, 13, 20],
        borderColor: 'dodgerblue',
        borderHoverColor: 'dodgerblue',
        pointBackgroundColor: 'dodgerblue',
        pointHoverBackgroundColor: 'dodgerblue'
      }],
      labels: ['2006', '2007', '2008', '2009', '2010', '2011']
    }

    this.barChartOptions = {
			plugins: {
				legend: {
					display: false
				}
			},
			scales: {
				x: {
					display: false
				},
				y: {
					display: false
				}
			}
		}
  }
}
