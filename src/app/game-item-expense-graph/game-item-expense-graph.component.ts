import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-game-item-expense-graph',
  templateUrl: './game-item-expense-graph.component.html',
  styleUrls: ['./game-item-expense-graph.component.css']
})
export class GameItemExpenseGraphComponent {
  
  @Input() userList: string[] = [];
  @Input() expenseList: number[] = [];

  public chartExpense: any;

  createExpenseChart() {

    if(this.chartExpense != null)
      this.chartExpense.destroy();

    this.chartExpense = new Chart("ExpenseChart", {
      type: 'bar',

      data: {
        labels: this.userList,

        datasets: [
          {
            data: this.expenseList,
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
              text: 'Top 3 Users with most expense'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'User Name'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Expense'
            }
          }
        }
      }
    });
  }

  ngOnChanges(): void{
    this.createExpenseChart();
  }
}
