export interface Month {
  month: String;
  year: Number;
  Income: {
    job: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    other: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    total: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
  };
  Expenses: {
    total: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    fixed: {
      rent: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      rentersInsurance: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      internet: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      healthInsurance: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      carInsurance: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      cellPhone: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      gymMembership: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      amazonMembership: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      spotify: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      costco: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      domain: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      petco: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      tv: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      allTrails: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      total: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
    };
    variable: {
      electric: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      water: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      carFuel: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      tolls: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      groceries: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      householdProducts: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      carMaintenance: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      haircut: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      personalCareDoctor: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      dogSupplies: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      total: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
    };
    fun: {
      clothing: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      eatingOut: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      funPurchases: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      entertainmentActivities: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      vacation: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      gifts: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
      total: {
        actual: Number;
        budgeted: Number;
        difference: Number;
      };
    };
  };
  Investments: {
    roth401k: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    rothIRA: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    individualInvestments: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    mutualFunds: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    total: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
  };
  Totals: {
    income: Number;
    expenses: Number;
    investments: Number;
    amtAvailableToInvest: Number;
    savings: Number;
  };
  Savings: {
    actual: Number;
    budgeted: Number;
    difference: Number;
  };
  InvestmentChecking: {
    rothIRA: Number;
    individualInvestments: Number;
    mutualFunds: Number;
  };
}
