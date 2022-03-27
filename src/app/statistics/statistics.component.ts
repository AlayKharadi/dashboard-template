import { Component, OnInit } from '@angular/core';
import { faChartLine, faDollar, faUser, faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
	stats!: any[];
	duration!: string;

	constructor() { }

	ngOnInit(): void {
		this.duration = "2 month";

		this.stats = [
			{
				name: "sales",
				num: 230,
				iconName: faChartLine
			},
			{
				name: "customers",
				num: 8.546,
				iconName: faUser
			},
			{
				name: "products",
				num: 1.423,
				iconName: faCube
			},
			{
				name: "revenues",
				num: 9745,
				iconName: faDollar
			}
		];
	}
}
