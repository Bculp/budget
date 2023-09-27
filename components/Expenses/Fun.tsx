import { useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { Generator } from '../Shared/Generator';
import type { ExpenseTotal } from '@/app/page';

export const Fun = ({
  expenseTotal,
  updateExpenseTotal,
}: {
  expenseTotal: ExpenseTotal;
  updateExpenseTotal: any;
}) => {
  const [clothing, updateClothing] = useState(0);
  const [eatingOut, updateEatingOut] = useState(0);
  const [funPurchases, updateFunPurchases] = useState(0);
  const [entertainmentActivities, updateEntertainmentActivities] = useState(0);
  const [vacation, updateVacation] = useState(0);
  const [gifts, updateGifts] = useState(0);
  const actual = clothing + eatingOut + funPurchases + entertainmentActivities + vacation + gifts;

  const [budgetedClothing, updateBudgetedClothing] = useState(0);
  const [budgetedEatingOut, updateBudgetedEatingOut] = useState(0);
  const [budgetedFunPurchases, updateBudgetedFunPurchases] = useState(0);
  const [budgetedEntertainmentActivities, updateBudgetedEntertainmentActivities] = useState(0);
  const [budgetedVacation, updateBudgetedVacation] = useState(0);
  const [budgetedGifts, updateBudgetedGifts] = useState(0);
  const budgeted =
    budgetedClothing +
    budgetedEatingOut +
    budgetedFunPurchases +
    budgetedEntertainmentActivities +
    budgetedVacation +
    budgetedGifts;

  const differenceClothing = budgetedClothing - clothing;
  const differenceEatingOut = budgetedEatingOut - eatingOut;
  const differenceFunPurchases = budgetedFunPurchases - funPurchases;
  const differenceEntertainmentActivities =
    budgetedEntertainmentActivities - entertainmentActivities;
  const differenceVacation = budgetedVacation - vacation;
  const differenceGifts = budgetedGifts - gifts;
  const difference = budgeted - actual;

  useEffect(() => {
    updateExpenseTotal({
      ...expenseTotal,
      fun: actual,
    });
  }, [actual, expenseTotal, updateExpenseTotal]);

  return (
    <div>
      <Title order={3}>Fun</Title>
      <div className={styles.container}>
        {/* Actual */}
        <Generator
          sectionTitle="Actual"
          fields={[
            {
              label: 'Clothing',
              onChange: updateClothing,
              value: clothing,
            },
            {
              label: 'Eating Out',
              onChange: updateEatingOut,
              value: eatingOut,
            },
            {
              label: 'Fun Purchases',
              onChange: updateFunPurchases,
              value: funPurchases,
            },
            {
              label: 'Entertainment/Activities',
              onChange: updateEntertainmentActivities,
              value: entertainmentActivities,
            },
            {
              label: 'Vacation',
              onChange: updateVacation,
              value: vacation,
            },
            {
              label: 'Gifts',
              onChange: updateGifts,
              value: gifts,
            },
          ]}
          total={actual}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            {
              label: 'Clothing',
              onChange: updateBudgetedClothing,
              value: budgetedClothing,
            },
            {
              label: 'Water',
              onChange: updateBudgetedEatingOut,
              value: budgetedEatingOut,
            },
            {
              label: 'Fun Purchases',
              onChange: updateBudgetedFunPurchases,
              value: budgetedFunPurchases,
            },
            {
              label: 'Entertainment/Activities',
              onChange: updateBudgetedEntertainmentActivities,
              value: budgetedEntertainmentActivities,
            },
            {
              label: 'Vacation',
              onChange: updateBudgetedVacation,
              value: budgetedVacation,
            },
            {
              label: 'Gifts',
              onChange: updateBudgetedGifts,
              value: budgetedGifts,
            },
          ]}
          total={budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[
            { label: 'Clothing', value: differenceClothing },
            { label: 'Water', value: differenceEatingOut },
            {
              label: 'Fun Purchases',
              value: differenceFunPurchases,
            },
            {
              label: 'Entertainment/Activities',
              value: differenceEntertainmentActivities,
            },
            { label: 'Vacation', value: differenceVacation },
            { label: 'Gifts', value: differenceGifts },
          ]}
          total={difference}
        />
      </div>
    </div>
  );
};
