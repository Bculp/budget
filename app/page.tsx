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
  const expenses = expenseTotal.fixed + expenseTotal.variable + expenseTotal.fun;
  const [investmentTotal, updateInvestmentTotal] = useState(0);
  const amtAvailableToInvest = incomeTotal - expenses;
  const savings = amtAvailableToInvest - investmentTotal;

  const [rothIRA, updateRothIRA] = useState(0);
  const [individualInvestments, updateIndividualInvestments] = useState(0);
  const [mutualFunds, updateMutualFunds] = useState(0);

  //  ------ TODO: ----------- //

  // GET THIS WORKING FOR JUST INCOME FOR UPDATING VALUES
  // THEN GET IT WORKING FOR HITTING API
  // THEN EXTEND TO EXPENSES AND SO ON
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
      {/* <Expenses expenseTotal={expenseTotal} updateExpenseTotal={updateExpenseTotal} /> */}
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
        amtAvailableToInvest={amtAvailableToInvest}
        savings={savings}
      />
      <Savings savings={savings} />
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
