import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomized-data-line-example',
  template: `
  <h3>Random Animated Line Example</h3>
  <ngx-chartjs [data]="data" type="line"></ngx-chartjs>
  `,
})
export class RandomizedDataLineExampleComponent implements OnInit {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  ngOnInit() {
    setInterval(() => {
      const oldDataSet = this.data.datasets[0];
      const newData: number[] = [];

      for (const _ of this.data.labels) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      const newState = {
        ...this.data,
        datasets: [newDataSet],
      };

      this.data = newState;
    }, 5000);
  }
}