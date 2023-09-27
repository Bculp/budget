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

  const makeApiCall = async () => {
    const response = await fetch('http://localhost:4000/');
    console.log(await response.text());
  };

  return (
    <div>
      <Button onClick={makeApiCall}>hi</Button>
      <Income updateIncomeTotal={updateIncomeTotal} />
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
    </div>
  );
}
