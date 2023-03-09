import { Component } from '@angular/core';

@Component({
  selector: 'app-game-item-analysis',
  templateUrl: './game-item-analysis.component.html',
  styleUrls: ['./game-item-analysis.component.css']
})
export class GameItemAnalysisComponent {

  gameItemInfo: any = [];

  submittedItems(itemList: any[]) {
    this.gameItemInfo = itemList;
    this.formatData();
  }

  itemList: string[] = [];
  avgPriceList: number[] = [];

  userList: string[] = [];
  expenseList: number[] = [];

  formatData() {
    // nameItem: [totalPrice, numOfOccurences]
    let avgPriceAg: any = {}
    this.itemList = [];
    this.avgPriceList = [];

    // userName: totalExpense
    let userExpenseAg: any = {}
    let topX: number = 3;
    this.userList = Array(topX).fill('');
    this.expenseList = Array(topX).fill(0);

    for(const index of this.gameItemInfo) {
      // Have each unique item follow the format for avgPriceAggregator
      if(index.itemName in avgPriceAg) {
        avgPriceAg[index.itemName] = [+avgPriceAg[index.itemName][0] + +index.itemPrice, +avgPriceAg[index.itemName][1] + 1];
      } else {
        avgPriceAg[index.itemName] = [index.itemPrice, 1];
      }

      if(index.userName in userExpenseAg) {
        userExpenseAg[index.userName] = +userExpenseAg[index.userName] + +index.itemPrice;
      } else {
        userExpenseAg[index.userName] = index.itemPrice;
      }
    }

    // Calculate price averages per item
    for(const item in avgPriceAg) {
      this.itemList.push(item);
      let avgPrice: number = +avgPriceAg[item][0] / +avgPriceAg[item][1]
      this.avgPriceList.push(avgPrice)
    }
    
    // Sort top 3 users
    for(const user in userExpenseAg) {
      for(let idx = topX-1; idx >= 0; idx--) {
        if(userExpenseAg[user] > this.expenseList[idx]) {

          if(idx == this.expenseList.length-1) {
            this.expenseList[idx] = userExpenseAg[user];
            this.userList[idx] = user;
          } else {
            let tempExpense = this.expenseList[idx];
            this.expenseList[idx] = userExpenseAg[user];
            this.expenseList[idx+1] = tempExpense

            let tempUser = this.userList[idx];
            this.userList[idx] = user;
            this.userList[idx+1] = tempUser
          }

        } else {
          break;
        }
      }
    }
  }

}
