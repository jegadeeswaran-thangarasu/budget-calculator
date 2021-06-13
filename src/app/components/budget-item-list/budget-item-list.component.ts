import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    // show the edit module

    const dialogRef = this.dialog.open(EditItemModelComponent,{
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {

      // check if result has a value 
      if(result) {
        // result is the updated budget item
        // replace the item with the updated / submitted item form value
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    })

  }
}
