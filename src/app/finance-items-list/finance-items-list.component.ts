import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FinanceItemModel} from "../models/finance-item.model";

@Component({
  selector: 'app-finance-items-list',
  templateUrl: './finance-items-list.component.html',
  styleUrls: ['./finance-items-list.component.scss']
})
export class FinanceItemsListComponent implements OnInit {
  @Input() financeItems: FinanceItemModel[] = [];
  @Output() financeItemViewOpenEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleItemViewClick(itemId: string) {
    this.financeItemViewOpenEvent.emit(itemId);
  }

}
