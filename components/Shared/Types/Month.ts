export interface Month {
  month: string;
  year: number;
  Income: {
    job: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    other: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    total: {
      actual: number;
      budgeted: number;
      difference: number;
    };
  };
  Expenses: {
    total: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    fixed: {
      rent: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      rentersInsurance: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      internet: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      healthInsurance: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      carInsurance: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      cellPhone: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      gymMembership: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      amazonMembership: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      spotify: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      costco: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      domain: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      petco: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      tv: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      allTrails: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      total: {
        actual: number;
        budgeted: number;
        difference: number;
        percentage: number;
      };
    };
    variable: {
      electric: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      water: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      carFuel: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      tolls: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      groceries: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      householdProducts: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      carMaintenance: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      haircut: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      personalCareDoctor: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      dogSupplies: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      total: {
        actual: number;
        budgeted: number;
        difference: number;
        percentage: number;
      };
    };
    fun: {
      clothing: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      eatingOut: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      funPurchases: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      entertainmentActivities: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      vacation: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      gifts: {
        actual: number;
        budgeted: number;
        difference: number;
      };
      total: {
        actual: number;
        budgeted: number;
        difference: number;
        percentage: number;
      };
    };
  };
  Investments: {
    roth401k: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    rothIRA: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    individualInvestments: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    mutualFunds: {
      actual: number;
      budgeted: number;
      difference: number;
    };
    total: {
      actual: number;
      budgeted: number;
      difference: number;
      percentage: number;
    };
  };
  Totals: {
    income: number;
    expenses: number;
    investments: number;
    amtAvailableToInvest: number;
    savings: number;
  };
  Savings: {
    actual: number;
    budgeted: number;
    difference: number;
    percentage: number;
  };
  InvestmentChecking: {
    rothIRA: number;
    individualInvestments: number;
    mutualFunds: number;
  };
  CarPayment: {
    moneyAvailable: number;
    idealPayment: number;
    totalOwed: number;
    amtPaidThisMonth: number;
    carAmtRemaining: number;
  };
}

export interface MonthDBO extends Month {
  id: string;
}
