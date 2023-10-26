export interface Percentages {
  fixedExpenses: number;
  variableExpenses: number;
  funExpenses: number;
  investments: number;
  savings: number;
}

export interface ICarPayment {
  moneyAvailable: number;
  idealPayment: number;
  totalOwed: number;
  amtPaidThisMonth: number;
}
