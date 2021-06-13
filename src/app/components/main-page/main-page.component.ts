import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }

  updateItem( updatedEvent: UpdateEvent) {
    // result is the updated budget item
    // replace the item with the updated / submitted item form value
    this.budgetItems[this.budgetItems.indexOf(updatedEvent.old)] = updatedEvent.new;

    //update the total budget
    this.totalBudget -= updatedEvent.old.amount;
    this.totalBudget += updatedEvent.new.amount;
  }

}
