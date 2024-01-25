import {Component, Input, OnInit} from '@angular/core';
import {FinanceItemModel} from "../models/finance-item.model";

@Component({
  selector: 'app-finance-item',
  templateUrl: './finance-item.component.html',
  styleUrls: ['./finance-item.component.scss']
})
export class FinanceItemComponent {
  @Input() financeItem: FinanceItemModel | null = null;

  constructor() {}

}
