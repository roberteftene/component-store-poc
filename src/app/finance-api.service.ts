import {Injectable} from '@angular/core';
import {FinanceItemModel, NewFinanceItem} from "./models/finance-item.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {

  private items: FinanceItemModel[] = [
    {id: '1', title: 'Exp1', amountPaid: '34', date: '24/01/2024', category: 'Order food'},
    {id: '2', title: 'Exp2', amountPaid: '25', date: '22/01/2024', category: 'Dine out'},
    {id: '3', title: 'Exp2', amountPaid: '11', date: '21/01/2024', category: 'Groceries'},
    {id: '4', title: 'Exp2', amountPaid: '90', date: '20/01/2024', category: 'Pet'},
    {id: '5', title: 'Exp2', amountPaid: '23', date: '19/01/2024', category: 'PS Games'},
    {id: '6', title: 'Exp2', amountPaid: '42', date: '17/01/2024', category: 'House rent'},
    {id: '7', title: 'Exp2', amountPaid: '54', date: '15/01/2024', category: 'Fun'},
    {id: '8', title: 'Exp2', amountPaid: '56', date: '10/01/2024', category: 'Education'},
  ]

  public getFinanceItems(): Observable<FinanceItemModel[]> {
    return of(this.items);
  }

  public addFinanceItem(financeItem: NewFinanceItem): Observable<FinanceItemModel> {
    let newFinanceItem: FinanceItemModel = {...financeItem, id: ''};
    newFinanceItem.id = this.calculateNewIndex() + "";
    this.items = [...this.items, newFinanceItem];
    return of(newFinanceItem);
  }

  public updateFinanceItem(updatedItem: FinanceItemModel): Observable<boolean> {
    const index = this.items.findIndex((item) => item.id === updatedItem.id)
    this.items[index] = {...this.items[index], ...updatedItem};
    return of(true);
  }

  private calculateNewIndex(): number {
    return this.items.length + 1;
  }

  constructor() {
  }
}
