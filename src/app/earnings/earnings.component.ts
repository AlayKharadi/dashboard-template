import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  public doughnutChartLabels!: any [];
  public doughnutChartData!: any;
  @Input() num!:number;
  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartData = {
      datasets: [{
        data: [ 45, 10, 25],
        backgroundColor: ['yellowgreen', 'lightgreen', 'green'],
        hoverBackgroundColor: ['yellowgreen', 'lightgreen', 'green'],
				hoverBorderColor: 'transparent',
        hoverOffset: 0.1
      }],
      
    }
  }

}
