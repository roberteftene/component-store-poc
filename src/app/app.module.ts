import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dahsboard/dashboard.component';
import { FinanceItemsListComponent } from './finance-items-list/finance-items-list.component';
import { FinanceItemComponent } from './finance-item/finance-item.component';
import { CreateFinanceItemComponent } from './create-finance-item/create-finance-item.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FinanceItemsListComponent,
    FinanceItemComponent,
    CreateFinanceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
