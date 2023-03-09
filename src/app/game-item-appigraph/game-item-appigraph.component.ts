import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-game-item-appigraph',
  templateUrl: './game-item-appigraph.component.html',
  styleUrls: ['./game-item-appigraph.component.css']
})
export class GameItemAPPIGraphComponent {

  @Input() itemList: string[] = [];
  @Input() avgPriceList: number[] = [];

  public chartAPPI: any;

  createAPPIChart() {

    if(this.chartAPPI != null)
      this.chartAPPI.destroy();

    this.chartAPPI = new Chart("APPIChart", {
      type: 'bar',

      data: {
        labels: this.itemList,

        datasets: [
          {
            data: this.avgPriceList,
            maxBarThickness: 175,
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
            display: false
          },
          title: {
              display: true,
              text: 'Average Price Per Item'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Item Name'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Average Price'
            }
          }
        }
      }
    });
  }

  ngOnChanges(): void{
    this.createAPPIChart();
  }

}
