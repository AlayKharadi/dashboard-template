import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-budget',
	templateUrl: './budget.component.html',
	styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
	@Input() num!: number;
	@Input() budget!: number;
	barChartData!: any;
	barChartOptions!: any;
	years: any[] = [
		2022,
		2021,
		2020,
		2019,
		2018,
		2017
	]
	constructor() { }

	ngOnInit(): void {
		this.barChartData = {
			datasets: [{
				data: [5, 10, 15, 13, 17, 20, 5, 10, 15, 13, 17, 20],
				tension: 0.5,
				borderColor: 'rgb(112, 60, 255)',
				pointBackgroundColor: 'rgb(112, 60, 255)'
			}],
			labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
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
			},
			elements: {
				point: {
					radius: 0
				}
			}
		}
	}
}
