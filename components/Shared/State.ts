export const initialIncomeState = {
    job: {
      actual: 0,
      budgeted: 0,
    },
    other: {
      actual: 0,
      budgeted: 0,
    },
  };

export const initialExpenseState = {
    fixed: {
      rent: {
        actual: 0,
        budgeted: 0,
      },
      rentersInsurance: {
        actual: 0,
        budgeted: 0,
      },
      internet: {
        actual: 0,
        budgeted: 0,
      },
      healthInsurance: {
        actual: 0,
        budgeted: 0,
      },
      carInsurance: {
        actual: 0,
        budgeted: 0,
      },
      cellPhone: {
        actual: 0,
        budgeted: 0,
      },
      gymMembership: {
        actual: 0,
        budgeted: 0,
      },
      amazonMembership: {
        actual: 0,
        budgeted: 0,
      },
      spotify: {
        actual: 0,
        budgeted: 0,
      },
      costco: {
        actual: 0,
        budgeted: 0,
      },
      domain: {
        actual: 0,
        budgeted: 0,
      },
      petco: {
        actual: 0,
        budgeted: 0,
      },
      tv: {
        actual: 0,
        budgeted: 0,
      },
      allTrails: {
        actual: 0,
        budgeted: 0,
      },
      total: {
        percentage: 0,
      },
    },
    variable: {
      electric: {
        actual: 0,
        budgeted: 0,
      },
      water: {
        actual: 0,
        budgeted: 0,
      },
      carFuel: {
        actual: 0,
        budgeted: 0,
      },
      tolls: {
        actual: 0,
        budgeted: 0,
      },
      groceries: {
        actual: 0,
        budgeted: 0,
      },
      householdProducts: {
        actual: 0,
        budgeted: 0,
      },
      carMaintenance: {
        actual: 0,
        budgeted: 0,
      },
      haircut: {
        actual: 0,
        budgeted: 0,
      },
      personalCareDoctor: {
        actual: 0,
        budgeted: 0,
      },
      dogSupplies: {
        actual: 0,
        budgeted: 0,
      },
      total: {
        percentage: 0,
      },
    },
    fun: {
      clothing: {
        actual: 0,
        budgeted: 0,
      },
      eatingOut: {
        actual: 0,
        budgeted: 0,
      },
      funPurchases: {
        actual: 0,
        budgeted: 0,
      },
      entertainmentActivities: {
        actual: 0,
        budgeted: 0,
      },
      vacation: {
        actual: 0,
        budgeted: 0,
      },
      gifts: {
        actual: 0,
        budgeted: 0,
      },
      total: {
        percentage: 0,
      },
    },
  };

export const initialInvestmentState = {
  roth401k: {
    actual: 0,
    budgeted: 0,
  },
  rothIRA: {
    actual: 0,
    budgeted: 0,
  },
  individualInvestments: {
    actual: 0,
    budgeted: 0,
  },
  mutualFunds: {
    actual: 0,
    budgeted: 0,
  },
  total: {
    percentage: 0,
  },
};

export const initialSavingsState = {
  actual: 0,
  budgeted: 0,
  percentage: 0,
};

export const initialCarPaymentState = {
  moneyAvailable: 0,
  idealPayment: 1769.02,
  totalOwed: 21228.19,
  amtPaidThisMonth: 0,
};

const initialInvestmentCheckingState = {
  savings: 0,
  rothIRA: 0,
  individualInvestments: 0,
  mutualFunds: 0,
  actualAmtInChecking: 0,
  budgetAmtInChecking: 0,
  budgetBalance: 0,
};

const initialTotalState = {
  income: 0,
  expenses: 0,
  investments: 0,
  amtAvailableToInvest: 0,
  savings: 0,
};

export const initialMonthState = {
  Income: initialIncomeState,
  Expenses: initialExpenseState,
  InvestmentChecking: initialInvestmentCheckingState,
  Investments: initialInvestmentState,
  Savings: initialSavingsState,
  Totals: initialTotalState,
  id: '',
  month: '',
  year: 2023,
};

export const initialPercentagesState = {
  fixedExpenses: 0,
  variableExpenses: 0,
  funExpenses: 0,
  investments: 0,
  savings: 0,
};
