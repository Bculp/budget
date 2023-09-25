import { useState } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Expenses } from "~/components/Expenses";
import { Income } from "~/components/Income";
import { Investments } from "~/components/Investments";
import { Totals } from "~/components/Totals";
import { Savings } from "~/components/Savings";
import { InvestmentChecking } from "~/components/InvestmentChecking";

export interface ExpenseTotal {
  fixed: number;
  variable: number;
  fun: number;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  const [incomeTotal, updateIncomeTotal] = useState(0);
  const [expenseTotal, updateExpenseTotal] = useState({
    fixed: 0,
    variable: 0,
    fun: 0,
  });
  const expenses =
    expenseTotal.fixed + expenseTotal.variable + expenseTotal.fun;
  const [investmentTotal, updateInvestmentTotal] = useState(0);
  const amtAvailableToInvest = incomeTotal - expenses;
  const savings = amtAvailableToInvest - investmentTotal;

  const [rothIRA, updateRothIRA] = useState(0);
  const [individualInvestments, updateIndividualInvestments] = useState(0);
  const [mutualFunds, updateMutualFunds] = useState(0);

  return (
    <div>
      <Income updateIncomeTotal={updateIncomeTotal} />
      <Expenses
        expenseTotal={expenseTotal}
        updateExpenseTotal={updateExpenseTotal}
      />
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
        expenses={expenses}
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
