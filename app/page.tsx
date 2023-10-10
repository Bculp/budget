'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';
import { Expenses } from '../components/Expenses';
import { Income } from '../components/Income';
import { Investments } from '../components/Investments';
import { Totals } from '../components/Totals';
import { Savings } from '../components/Savings';
import { InvestmentChecking } from '../components/InvestmentChecking';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { createMonth, getAllMonths, updateMonth } from '@/components/Shared/api';

export default function HomePage() {
  // once i get the structure in place, i don't need the default values here.
  const [income, updateIncome] = useState({
    job: {
      actual: 0,
      budgeted: 0,
    },
    other: {
      actual: 0,
      budgeted: 0,
    },
  });
  const jobDifference = income.job.budgeted - income.job.actual;
  const otherDifference = income.other.budgeted - income.other.actual;
  const totalActualIncome = income.job.actual + income.other.actual;
  const totalBudgetedIncome = income.job.budgeted + income.other.budgeted;
  const totalDifferenceIncome = totalBudgetedIncome - totalActualIncome;

  const mergeIncomeUpdate = (category: string, type: string, value: number) => {
    const newState = {
      ...income,
      [category]: {
        // @ts-ignore
        ...{ ...income[category] },
        [type]: value,
      },
    };

    updateIncome(newState);
  };

  const [expenses, updateExpenses] = useState({
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
    },
  });

  const mergeExpenseUpdate = (
    category: string,
    subCategory: string,
    type: string,
    value: number
  ) => {
    const newState = {
      ...expenses,
      [category]: {
        // @ts-ignore
        ...{ ...expenses[category] },
        [subCategory]: {
          // @ts-ignore
          ...{ ...expenses[category][subCategory] },
          [type]: value,
        },
      },
    };

    updateExpenses(newState);
  };

  const getExpenseDifference = (type: 'fixed' | 'variable' | 'fun', title: any) => {
    return (
      expenses &&
      expenses[type] &&
      // @ts-ignore
      expenses[type][title] &&
      // @ts-ignore
      expenses[type][title].budgeted - expenses[type][title].actual
    );
  };

  const rentDifference = getExpenseDifference('fixed', 'rent');
  const rentersInsuranceDifference = getExpenseDifference('fixed', 'rentersInsurance');
  const internetDifference = getExpenseDifference('fixed', 'internet');
  const healthInsuranceDifference = getExpenseDifference('fixed', 'healthInsurance');
  const carInsuranceDifference = getExpenseDifference('fixed', 'carInsurance');
  const cellPhoneDifference = getExpenseDifference('fixed', 'cellPhone');
  const gymMembershipDifference = getExpenseDifference('fixed', 'gymMembership');
  const amazonMembershipDifference = getExpenseDifference('fixed', 'amazonMembership');
  const spotifyDifference = getExpenseDifference('fixed', 'spotify');
  const costcoDifference = getExpenseDifference('fixed', 'costco');
  const domainDifference = getExpenseDifference('fixed', 'domain');
  const petcoDifference = getExpenseDifference('fixed', 'petco');
  const tvDifference = getExpenseDifference('fixed', 'tv');
  const allTrailsDifference = getExpenseDifference('fixed', 'allTrails');

  const totalActualFixedExpenses =
    expenses.fixed.rent.actual +
    expenses.fixed.rentersInsurance.actual +
    expenses.fixed.internet.actual +
    expenses.fixed.healthInsurance.actual +
    expenses.fixed.carInsurance.actual +
    expenses.fixed.cellPhone.actual +
    expenses.fixed.gymMembership.actual +
    expenses.fixed.amazonMembership.actual +
    expenses.fixed.spotify.actual +
    expenses.fixed.costco.actual +
    expenses.fixed.domain.actual +
    expenses.fixed.petco.actual +
    expenses.fixed.tv.actual +
    expenses.fixed.allTrails.actual;

  const totalBudgetedFixedExpenses =
    expenses.fixed.rent.budgeted +
    expenses.fixed.rentersInsurance.budgeted +
    expenses.fixed.internet.budgeted +
    expenses.fixed.healthInsurance.budgeted +
    expenses.fixed.carInsurance.budgeted +
    expenses.fixed.cellPhone.budgeted +
    expenses.fixed.gymMembership.budgeted +
    expenses.fixed.amazonMembership.budgeted +
    expenses.fixed.spotify.budgeted +
    expenses.fixed.costco.budgeted +
    expenses.fixed.domain.budgeted +
    expenses.fixed.petco.budgeted +
    expenses.fixed.tv.budgeted +
    expenses.fixed.allTrails.budgeted;

  const totalDifferenceFixedExpenses = totalBudgetedFixedExpenses - totalActualFixedExpenses;

  const totalActualVariableExpenses =
    expenses.variable.electric.actual +
    expenses.variable.water.actual +
    expenses.variable.carFuel.actual +
    expenses.variable.tolls.actual +
    expenses.variable.groceries.actual +
    expenses.variable.householdProducts.actual +
    expenses.variable.carMaintenance.actual +
    expenses.variable.haircut.actual +
    expenses.variable.personalCareDoctor.actual +
    expenses.variable.dogSupplies.actual;

  const totalBudgetedVariableExpenses =
    expenses.variable.electric.budgeted +
    expenses.variable.water.budgeted +
    expenses.variable.carFuel.budgeted +
    expenses.variable.tolls.budgeted +
    expenses.variable.groceries.budgeted +
    expenses.variable.householdProducts.budgeted +
    expenses.variable.carMaintenance.budgeted +
    expenses.variable.haircut.budgeted +
    expenses.variable.personalCareDoctor.budgeted +
    expenses.variable.dogSupplies.budgeted;

  const totalDifferenceVariableExpenses =
    totalBudgetedVariableExpenses - totalActualVariableExpenses;

  const electricDifference = getExpenseDifference('variable', 'electric');
  const waterDifference = getExpenseDifference('variable', 'water');
  const carFuelDifference = getExpenseDifference('variable', 'carFuel');
  const tollsDifference = getExpenseDifference('variable', 'tolls');
  const groceriesDifference = getExpenseDifference('variable', 'groceries');
  const householdProductsDifference = getExpenseDifference('variable', 'householdProducts');
  const carMaintenanceDifference = getExpenseDifference('variable', 'carMaintenance');
  const haircutDifference = getExpenseDifference('variable', 'haircut');
  const personalCareDoctorDifference = getExpenseDifference('variable', 'personalCareDoctor');
  const dogSuppliesDifference = getExpenseDifference('variable', 'dogSupplies');

  const totalActualFunExpenses =
    expenses.fun.clothing.actual +
    expenses.fun.eatingOut.actual +
    expenses.fun.funPurchases.actual +
    expenses.fun.entertainmentActivities.actual +
    expenses.fun.vacation.actual +
    expenses.fun.gifts.actual;

  const totalBudgetedFunExpenses =
    expenses.fun.clothing.budgeted +
    expenses.fun.eatingOut.budgeted +
    expenses.fun.funPurchases.budgeted +
    expenses.fun.entertainmentActivities.budgeted +
    expenses.fun.vacation.budgeted +
    expenses.fun.gifts.budgeted;

  const totalDifferenceFunExpenses = totalBudgetedFunExpenses - totalActualFunExpenses;

  const clothingDifference = getExpenseDifference('fun', 'clothing');
  const eatingOutDifference = getExpenseDifference('fun', 'eatingOut');
  const funPurchasesDifference = getExpenseDifference('fun', 'funPurchases');
  const entertainmentActivitiesDifference = getExpenseDifference('fun', 'entertainmentActivities');
  const vacationDifference = getExpenseDifference('fun', 'vacation');
  const giftsDifference = getExpenseDifference('fun', 'gifts');

  const totalActualExpenses =
    totalActualFixedExpenses + totalActualVariableExpenses + totalActualFunExpenses;
  const totalBudgetedExpenses =
    totalBudgetedFixedExpenses + totalBudgetedVariableExpenses + totalBudgetedFunExpenses;
  const totalDifferenceExpenses = totalBudgetedExpenses - totalActualExpenses;

  const expenseProps = {
    mergeExpenseUpdate,
    expenses,
    fixed: {
      rentDifference,
      rentersInsuranceDifference,
      internetDifference,
      healthInsuranceDifference,
      carInsuranceDifference,
      cellPhoneDifference,
      gymMembershipDifference,
      amazonMembershipDifference,
      spotifyDifference,
      costcoDifference,
      domainDifference,
      petcoDifference,
      tvDifference,
      allTrailsDifference,
      totalActualFixedExpenses,
      totalBudgetedFixedExpenses,
      totalDifferenceFixedExpenses,
    },
    variable: {
      electricDifference,
      waterDifference,
      carFuelDifference,
      tollsDifference,
      groceriesDifference,
      householdProductsDifference,
      carMaintenanceDifference,
      haircutDifference,
      personalCareDoctorDifference,
      dogSuppliesDifference,
      totalActualVariableExpenses,
      totalBudgetedVariableExpenses,
      totalDifferenceVariableExpenses,
    },
    fun: {
      clothingDifference,
      eatingOutDifference,
      funPurchasesDifference,
      entertainmentActivitiesDifference,
      vacationDifference,
      giftsDifference,
      totalActualFunExpenses,
      totalBudgetedFunExpenses,
      totalDifferenceFunExpenses,
    },
  };

  const [investments, updateInvestments] = useState({
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
  });

  const mergeInvestmentUpdate = (category: string, type: string, value: number) => {
    const newState = {
      ...investments,
      [category]: {
        // @ts-ignore
        ...{ ...income[category] },
        [type]: value,
      },
    };

    updateInvestments(newState);
  };

  const getInvestmentDifference = (title: any) => {
    return (
      investments &&
      // @ts-ignore
      investments[title] &&
      // @ts-ignore
      investments[title].budgeted - investments[title].actual
    );
  };

  const roth401kDifference = getInvestmentDifference('roth401k');
  const rothIRADifference = getInvestmentDifference('rothIRA');
  const individualInvestmentsDifference = getInvestmentDifference('individualInvestments');
  const mutualFundsDifference = getInvestmentDifference('mutualFunds');
  const totalActualInvestments =
    investments.roth401k.actual +
    investments.rothIRA.actual +
    investments.individualInvestments.actual +
    investments.mutualFunds.actual;

  const totalBudgetedInvestments =
    investments.roth401k.budgeted +
    investments.rothIRA.budgeted +
    investments.individualInvestments.budgeted +
    investments.mutualFunds.budgeted;

  const totalDifferenceInvestments = totalBudgetedInvestments - totalActualInvestments;

  const amtAvailableToInvest = totalActualIncome - totalActualExpenses;
  const amtRemaining = amtAvailableToInvest - totalActualInvestments;

  const [savings, updateSavings] = useState({
    actual: 0,
    budgeted: 0,
  });

  const mergeSavingsUpdate = (type: string, value: number) => {
    const newState = {
      ...savings,
      [type]: value,
    };

    updateSavings(newState);
  };

  const savingsDifference = savings.budgeted - savings.actual;

  // when fetching data can just do this to wholesale replace state
  /*
    const data = axios.method()
    updateIncome(data.income)
    updateExpenses(data.expenses)

  */

  const makeApiCall = async () => {
    getAllMonths();
  };

  const createNewMonth = async () => {
    await createMonth({
      month: 'January',
      year: 2030,
      Income: {
        job: {
          ...income.job,
          difference: jobDifference,
        },
        other: {
          ...income.other,
          difference: otherDifference,
        },
        total: {
          actual: totalActualIncome,
          budgeted: totalBudgetedIncome,
          difference: totalDifferenceIncome,
        },
      },
      Expenses: {
        total: {
          actual: totalActualExpenses,
          budgeted: totalBudgetedExpenses,
          difference: totalDifferenceExpenses,
        },
        fixed: {
          rent: {
            ...expenses.fixed.rent,
            difference: rentDifference,
          },
          rentersInsurance: {
            ...expenses.fixed.rentersInsurance,
            difference: rentersInsuranceDifference,
          },
          internet: {
            ...expenses.fixed.internet,
            difference: internetDifference,
          },
          healthInsurance: {
            ...expenses.fixed.healthInsurance,
            difference: healthInsuranceDifference,
          },
          carInsurance: {
            ...expenses.fixed.carInsurance,
            difference: carInsuranceDifference,
          },
          cellPhone: {
            ...expenses.fixed.cellPhone,
            difference: cellPhoneDifference,
          },
          gymMembership: {
            ...expenses.fixed.gymMembership,
            difference: gymMembershipDifference,
          },
          amazonMembership: {
            ...expenses.fixed.amazonMembership,
            difference: amazonMembershipDifference,
          },
          spotify: {
            ...expenses.fixed.spotify,
            difference: spotifyDifference,
          },
          costco: {
            ...expenses.fixed.costco,
            difference: costcoDifference,
          },
          domain: {
            ...expenses.fixed.domain,
            difference: domainDifference,
          },
          petco: {
            ...expenses.fixed.petco,
            difference: petcoDifference,
          },
          tv: {
            ...expenses.fixed.tv,
            difference: tvDifference,
          },
          allTrails: {
            ...expenses.fixed.allTrails,
            difference: allTrailsDifference,
          },
          total: {
            actual: totalActualFixedExpenses,
            budgeted: totalBudgetedFixedExpenses,
            difference: totalDifferenceFixedExpenses,
          },
        },
        variable: {
          electric: {
            ...expenses.variable.electric,
            difference: electricDifference,
          },
          water: {
            ...expenses.variable.water,
            difference: waterDifference,
          },
          carFuel: {
            ...expenses.variable.carFuel,
            difference: carFuelDifference,
          },
          tolls: {
            ...expenses.variable.tolls,
            difference: tollsDifference,
          },
          groceries: {
            ...expenses.variable.groceries,
            difference: groceriesDifference,
          },
          householdProducts: {
            ...expenses.variable.householdProducts,
            difference: householdProductsDifference,
          },
          carMaintenance: {
            ...expenses.variable.carMaintenance,
            difference: carMaintenanceDifference,
          },
          haircut: {
            ...expenses.variable.haircut,
            difference: haircutDifference,
          },
          personalCareDoctor: {
            ...expenses.variable.personalCareDoctor,
            difference: personalCareDoctorDifference,
          },
          dogSupplies: {
            ...expenses.variable.dogSupplies,
            difference: dogSuppliesDifference,
          },
          total: {
            actual: totalActualVariableExpenses,
            budgeted: totalBudgetedVariableExpenses,
            difference: totalDifferenceVariableExpenses,
          },
        },
        fun: {
          clothing: {
            ...expenses.fun.clothing,
            difference: clothingDifference,
          },
          eatingOut: {
            ...expenses.fun.eatingOut,
            difference: eatingOutDifference,
          },
          funPurchases: {
            ...expenses.fun.funPurchases,
            difference: funPurchasesDifference,
          },
          entertainmentActivities: {
            ...expenses.fun.entertainmentActivities,
            difference: entertainmentActivitiesDifference,
          },
          vacation: {
            ...expenses.fun.vacation,
            difference: vacationDifference,
          },
          gifts: {
            ...expenses.fun.gifts,
            difference: giftsDifference,
          },
          total: {
            actual: totalActualFunExpenses,
            budgeted: totalBudgetedFunExpenses,
            difference: totalDifferenceFunExpenses,
          },
        },
      },
      Investments: {
        roth401k: {
          ...investments.roth401k,
          difference: roth401kDifference,
        },
        rothIRA: {
          ...investments.rothIRA,
          difference: rothIRADifference,
        },
        individualInvestments: {
          ...investments.individualInvestments,
          difference: individualInvestmentsDifference,
        },
        mutualFunds: {
          ...investments.mutualFunds,
          difference: mutualFundsDifference,
        },
        total: {
          actual: totalActualInvestments,
          budgeted: totalBudgetedInvestments,
          difference: totalDifferenceInvestments,
        },
      },
      Totals: {
        income: totalActualIncome,
        expenses: totalActualExpenses,
        investments: totalActualInvestments,
        amtAvailableToInvest,
        savings: amtRemaining,
      },
      Savings: {
        actual: savings.actual,
        budgeted: savings.budgeted,
        difference: savingsDifference,
      },
      InvestmentChecking: {
        rothIRA: investments.rothIRA.actual,
        individualInvestments: investments.individualInvestments.actual,
        mutualFunds: investments.mutualFunds.actual,
      },
    });
  };

  // const saveMonth = () => {
  //   updateMonth();
  // };

  return (
    <div>
      <Button onClick={makeApiCall}>GET ALL MONTHS</Button>
      <Income
        income={income}
        mergeIncomeUpdate={mergeIncomeUpdate}
        jobDifference={jobDifference}
        otherDifference={otherDifference}
        totalActualIncome={totalActualIncome}
        totalBudgetedIncome={totalBudgetedIncome}
        totalDifferenceIncome={totalDifferenceIncome}
      />
      <Expenses {...expenseProps} />
      <Investments
        investments={investments}
        mergeInvestmentUpdate={mergeInvestmentUpdate}
        roth401kDifference={roth401kDifference}
        rothIRADifference={rothIRADifference}
        individualInvestmentsDifference={individualInvestmentsDifference}
        mutualFundsDifference={mutualFundsDifference}
        totalActualInvestments={totalActualInvestments}
        totalBudgetedInvestments={totalBudgetedInvestments}
        totalDifferenceInvestments={totalDifferenceInvestments}
      />
      <Totals
        income={totalActualIncome}
        investments={totalActualInvestments}
        amtAvailableToInvest={amtAvailableToInvest}
        savings={amtRemaining}
      />
      <Savings
        savings={savings}
        mergeSavingsUpdate={mergeSavingsUpdate}
        savingsDifference={savingsDifference}
      />
      <InvestmentChecking
        rothIRA={investments.rothIRA.actual}
        individualInvestments={investments.individualInvestments.actual}
        mutualFunds={investments.mutualFunds.actual}
      />
      <Button onClick={createNewMonth}>Create</Button>
      {/* <Button onClick={saveMonth}>Save</Button> */}
    </div>
  );
}
