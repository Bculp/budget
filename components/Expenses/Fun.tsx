import { Title } from '@mantine/core';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';

export const Fun = ({
  mergeExpenseUpdate,
  expenses,
  fun,
}: {
  mergeExpenseUpdate: any;
  expenses: any;
  fun: any;
}) => (
  <div>
    <Title order={3}>Fun</Title>
    <div className={styles.container}>
      {/* Actual */}
      <Generator
        sectionTitle="Actual"
        fields={[
          {
            label: 'Clothing',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'clothing', 'actual', value),
            value: expenses.fun.clothing.actual,
          },
          {
            label: 'Eating Out',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'eatingOut', 'actual', value),
            value: expenses.fun.eatingOut.actual,
          },
          {
            label: 'Fun Purchases',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'funPurchases', 'actual', value),
            value: expenses.fun.funPurchases.actual,
          },
          {
            label: 'Entertainment/Activities',
            onChange: (value: number) =>
              mergeExpenseUpdate('fun', 'entertainmentActivities', 'actual', value),
            value: expenses.fun.entertainmentActivities.actual,
          },
          {
            label: 'Vacation',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'vacation', 'actual', value),
            value: expenses.fun.vacation.actual,
          },
          {
            label: 'Gifts',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'gifts', 'actual', value),
            value: expenses.fun.gifts.actual,
          },
        ]}
        total={fun.totalActualFunExpenses}
      />

      {/* Budgeted */}
      <Generator
        sectionTitle="Budgeted"
        fields={[
          {
            label: 'Clothing',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'clothing', 'budgeted', value),
            value: expenses.fun.clothing.budgeted,
          },
          {
            label: 'Eating Out',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'eatingOut', 'budgeted', value),
            value: expenses.fun.eatingOut.budgeted,
          },
          {
            label: 'Fun Purchases',
            onChange: (value: number) =>
              mergeExpenseUpdate('fun', 'funPurchases', 'budgeted', value),
            value: expenses.fun.funPurchases.budgeted,
          },
          {
            label: 'Entertainment/Activities',
            onChange: (value: number) =>
              mergeExpenseUpdate('fun', 'entertainmentActivities', 'budgeted', value),
            value: expenses.fun.entertainmentActivities.budgeted,
          },
          {
            label: 'Vacation',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'vacation', 'budgeted', value),
            value: expenses.fun.vacation.budgeted,
          },
          {
            label: 'Gifts',
            onChange: (value: number) => mergeExpenseUpdate('fun', 'gifts', 'budgeted', value),
            value: expenses.fun.gifts.budgeted,
          },
        ]}
        total={fun.totalBudgetedFunExpenses}
      />

      {/* Difference */}
      <Generator
        sectionTitle="Difference"
        fields={[
          { label: 'Clothing', value: fun.clothingDifference },
          { label: 'Eating Out', value: fun.eatingOutDifference },
          {
            label: 'Fun Purchases',
            value: fun.funPurchasesDifference,
          },
          {
            label: 'Entertainment/Activities',
            value: fun.entertainmentActivitiesDifference,
          },
          { label: 'Vacation', value: fun.vacationDifference },
          { label: 'Gifts', value: fun.giftsDifference },
        ]}
        total={fun.totalDifferenceFunExpenses}
      />
    </div>
  </div>
);
