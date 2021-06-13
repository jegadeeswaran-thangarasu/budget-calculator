import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './components/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './components/budget-item-list/budget-item-card/budget-item-card.component';
import { FormsModule } from '@angular/forms';
import { EditItemModelComponent } from './components/edit-item-model/edit-item-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
