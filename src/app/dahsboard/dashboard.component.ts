import {Component, inject, OnInit} from '@angular/core';
import {FinanceDashboardStoreService} from "../store/finance-dashboard-store.service";
import {NewFinanceItem} from "../models/finance-item.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FinanceDashboardStoreService]
})
export class DashboardComponent implements OnInit {
  readonly store = inject(FinanceDashboardStoreService);

  constructor() {
  }

  ngOnInit(): void {
    this.store.loadFinanceItems();
  }

  openItemView(itemId: string) {
    this.store.setOpenedItem(itemId);
  }

  openNewItemForm() {
    this.store.setNewItemInProgress(true)
  }

  handleNewItem(newItem: NewFinanceItem) {
    this.store.createNewItem(newItem)
  }

}
