export interface FinanceItemModel {
  id: string,
  title: string,
  amountPaid: string,
  date: string,
  category: string
}

export type NewFinanceItem = Pick<FinanceItemModel, "title" | "amountPaid" | "date" | "category">
