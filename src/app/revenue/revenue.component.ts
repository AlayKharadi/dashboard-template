import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  barChartData!: any;
  barChartOptions!: any;

  constructor() { }

  ngOnInit(): void {
    this.barChartData = {
      datasets: [
        {
          data: [5, 10, 15, 13, 17, 20, 25, 7],
          label: 'earnings',
          stack: 'profit',
          backgroundColor: 'rgb(112, 60, 255)',
          hoverBackgroundColor: 'rgb(112, 60, 255)',
          barThickness: 8,
          borderRadius: 8

        }, {
          data: [ -7, -25, -20, -17, -13, -15, -10, -5],
          label: 'expenses',
          stack: 'profit',
          backgroundColor: 'orange',
          hoverBackgroundColor: 'orange',
          barThickness: 8,
          borderRadius: 8
        }
      ],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    }

    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            padding: 25,
          },
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
		}
  }

}
