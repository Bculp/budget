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

export interface IInvestmentChecking {
  savings: number;
  rothIRA: number;
  individualInvestments: number;
  mutualFunds: number;
  actualAmtInChecking: number;
  budgetAmtInChecking: number;
  budgetBalance: number;
}

export interface IIncome {
  job: {
    actual: number;
    budgeted: number;
  },
  other: {
    actual: number;
    budgeted: number;
  },
}
