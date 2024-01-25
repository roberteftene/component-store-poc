import {inject, Injectable} from '@angular/core';
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {FinanceItemModel, NewFinanceItem} from "../models/finance-item.model";
import {Observable, switchMap} from "rxjs";
import {FinanceApiService} from "../finance-api.service";
import {HttpErrorResponse} from "@angular/common/http";

export interface FinanceDashboardState {
  financeItems: FinanceItemModel[],
  openedItem: FinanceItemModel | null,
  newItemInProgress: boolean
}

@Injectable()
export class FinanceDashboardStoreService extends ComponentStore<FinanceDashboardState> {
  private readonly financeApiService = inject(FinanceApiService);

  constructor() {
    super({financeItems: [], openedItem: null, newItemInProgress: false})
  }

  //Updaters
  private readonly loadAllItems = this.updater((state, items: FinanceItemModel[]) => ({
    ...state, financeItems: items
  }))

  readonly setOpenedItem = this.updater((state, itemId: string) => {
    const openedItemIdx = state.financeItems.findIndex((item: FinanceItemModel) => item.id === itemId);
    if (openedItemIdx !== -1) {
      return ({...state, openedItem: state.financeItems[openedItemIdx], newItemInProgress: false})
    } else {
      return state;
    }
  })

  readonly addNewItem = this.updater((state, newItem: FinanceItemModel) => {
    return ({...state, financeItems: [...state.financeItems, newItem]})
  })

  readonly setNewItemInProgress = this.updater((state, status: boolean) => ({...state, newItemInProgress: status}))

  //Selectors
  readonly financeItems$: Observable<FinanceItemModel[]> = this.select(state => state.financeItems);

  readonly openedItem$: Observable<FinanceItemModel | null> = this.select(state => state.openedItem);

  readonly newItemInProgress$: Observable<boolean> = this.select(state => state.newItemInProgress);

  //Effects
  readonly loadFinanceItems = this.effect<void>(
    (source$: any) => source$.pipe(
      switchMap(() => this.financeApiService.getFinanceItems().pipe(
        tapResponse(
          (financeItems) => this.setState(
            {
              financeItems: financeItems,
              openedItem: null,
              newItemInProgress: false
            }),
          (error: any) => console.log("Error", error)
        )
      ))
    )
  )

  readonly createNewItem = this.effect((newItem$: Observable<NewFinanceItem>) => {
    return newItem$.pipe(
      switchMap((newItem) => this.financeApiService.addFinanceItem(newItem).pipe(
        tapResponse(
          (res: FinanceItemModel) => this.addNewItem(res),
          (error: HttpErrorResponse) => console.log(error)
        )
      ))
    )
  })

}
