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

export interface ExpenseTotal {
  fixed: number;
  variable: number;
  fun: number;
}

export default function HomePage() {
  const [incomeTotal, updateIncomeTotal] = useState(0);
  const [expenseTotal, updateExpenseTotal] = useState({
    fixed: 0,
    variable: 0,
    fun: 0,
  });
  // const expenses = expenseTotal.fixed + expenseTotal.variable + expenseTotal.fun;
  const [investmentTotal, updateInvestmentTotal] = useState(0);
  // const amtAvailableToInvest = incomeTotal - expenses;
  // const savings = amtAvailableToInvest - investmentTotal;

  const [rothIRA, updateRothIRA] = useState(0);
  const [individualInvestments, updateIndividualInvestments] = useState(0);
  const [mutualFunds, updateMutualFunds] = useState(0);

  //  ------ TODO: ----------- //

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
    total: {
      actual: 0,
      budgeted: 0,
    },
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

  const totalFixedDifference = totalBudgetedFixedExpenses - totalActualFixedExpenses;

  const eletricDifference = getExpenseDifference('variable', 'eletric');
  const waterDifference = getExpenseDifference('variable', 'water');
  const carFuelDifference = getExpenseDifference('variable', 'carFuel');
  const tollsDifference = getExpenseDifference('variable', 'tolls');
  const groceriesDifference = getExpenseDifference('variable', 'groceries');
  const householdProductsDifference = getExpenseDifference('variable', 'householdProducts');
  const carMaintenanceDifference = getExpenseDifference('variable', 'carMaintenance');
  const haircutDifference = getExpenseDifference('variable', 'haircut');
  const personalCareDoctorDifference = getExpenseDifference('variable', 'personalCareDoctor');
  const dogSuppliesDifference = getExpenseDifference('variable', 'dogSupplies');

  const clothingDifference = getExpenseDifference('fun', 'clothing');
  const eatingOutDifference = getExpenseDifference('fun', 'eatingOut');
  const funPurchasesDifference = getExpenseDifference('fun', 'funPurchases');
  const entertainmentActivitiesDifference = getExpenseDifference('fun', 'entertainmentActivities');
  const vacationDifference = getExpenseDifference('fun', 'vacation');
  const giftsDifference = getExpenseDifference('fun', 'gifts');

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
      totalFixedDifference,
    },
    variable: {
      eletricDifference,
      waterDifference,
      carFuelDifference,
      tollsDifference,
      groceriesDifference,
      householdProductsDifference,
      carMaintenanceDifference,
      haircutDifference,
      personalCareDoctorDifference,
      dogSuppliesDifference,
    },
    fun: {
      clothingDifference,
      eatingOutDifference,
      funPurchasesDifference,
      entertainmentActivitiesDifference,
      vacationDifference,
      giftsDifference,
    },
  };

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
      {/* TODO: There's a useEffect/state issue somewhere in expenses that is causing a recursive loop. Probably what is causing my fan to spin on high all day as well! */}
      <Expenses {...expenseProps} />
      <Investments
        rothIRA={rothIRA}
        updateRothIRA={updateRothIRA}
        individualInvestments={individualInvestments}
        updateIndividualInvestments={updateIndividualInvestments}
        updateMutualFunds={updateMutualFunds}
        mutualFunds={mutualFunds}
        updateInvestmentTotal={updateInvestmentTotal}
      />
      <Totals
        income={incomeTotal}
        investments={investmentTotal}
        // amtAvailableToInvest={amtAvailableToInvest}
        // savings={savings}
      />
      {/* <Savings savings={savings} /> */}
      <InvestmentChecking
        rothIRA={rothIRA}
        individualInvestments={individualInvestments}
        mutualFunds={mutualFunds}
      />
      <Button onClick={createNewMonth}>Create</Button>
      {/* <Button onClick={saveMonth}>Save</Button> */}
    </div>
  );
}
