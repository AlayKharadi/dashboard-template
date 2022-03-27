import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	@Input() num!: number;
	barChartData!: any;
	barChartOptions!: any;
	constructor() { }

	ngOnInit(): void {
		this.barChartData = {
			datasets: [{
				data: [5, 10, 15, 13, 17, 20],
				backgroundColor: 'orange',
				hoverBackgroundColor: 'orange',
				borderColor: 'transparent',
				hoverBorderColor: 'transparent'
			}],
			labels: ['2006', '2007', '2008', '2009', '2010', '2011']
		}

		this.barChartOptions = {
			responsive: true,
			maintainAspectRatio: true,
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
