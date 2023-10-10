import { Title } from '@mantine/core';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';

export const Variable = ({
  mergeExpenseUpdate,
  expenses,
  variable,
}: {
  mergeExpenseUpdate: any;
  expenses: any;
  variable: any;
}) => (
  <div>
    <Title order={3}>Variable</Title>
    <div className={styles.container}>
      {/* Actual */}
      <Generator
        sectionTitle="Actual"
        fields={[
          {
            label: 'Electric/Gas',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'electric', 'actual', value),
            value: expenses.variable.electric.actual,
          },
          {
            label: 'Water',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'water', 'actual', value),
            value: expenses.variable.water.actual,
          },
          {
            label: 'Car Fuel',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'carFuel', 'actual', value),
            value: expenses.variable.carFuel.actual,
          },
          {
            label: 'Tolls',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'tolls', 'actual', value),
            value: expenses.variable.tolls.actual,
          },
          {
            label: 'Groceries',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'groceries', 'actual', value),
            value: expenses.variable.groceries.actual,
          },
          {
            label: 'Household Products',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'householdProducts', 'actual', value),
            value: expenses.variable.householdProducts.actual,
          },
          {
            label: 'Car Maintenance',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'carMaintenance', 'actual', value),
            value: expenses.variable.carMaintenance.actual,
          },
          {
            label: 'Haircut',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'haircut', 'actual', value),
            value: expenses.variable.haircut.actual,
          },
          {
            label: 'Personal Care/Dr Appts',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'personalCareDoctor', 'actual', value),
            value: expenses.variable.personalCareDoctor.actual,
          },
          {
            label: 'Dog Supplies',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'dogSupplies', 'actual', value),
            value: expenses.variable.dogSupplies.actual,
          },
        ]}
        total={variable.totalActualVariableExpenses}
      />

      {/* Budgeted */}
      <Generator
        sectionTitle="Budgeted"
        fields={[
          {
            label: 'Electric/Gas',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'electric', 'budgeted', value),
            value: expenses.variable.electric.budgeted,
          },
          {
            label: 'Water',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'water', 'budgeted', value),
            value: expenses.variable.water.budgeted,
          },
          {
            label: 'Car Fuel',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'carFuel', 'budgeted', value),
            value: expenses.variable.carFuel.budgeted,
          },
          {
            label: 'Tolls',
            onChange: (value: number) => mergeExpenseUpdate('variable', 'tolls', 'budgeted', value),
            value: expenses.variable.tolls.budgeted,
          },
          {
            label: 'Groceries',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'groceries', 'budgeted', value),
            value: expenses.variable.groceries.budgeted,
          },
          {
            label: 'Household Products',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'householdProducts', 'budgeted', value),
            value: expenses.variable.householdProducts.budgeted,
          },
          {
            label: 'Car Maintenance',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'carMaintenance', 'budgeted', value),
            value: expenses.variable.carMaintenance.budgeted,
          },
          {
            label: 'Haircut',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'haircut', 'budgeted', value),
            value: expenses.variable.haircut.budgeted,
          },
          {
            label: 'Personal Care/Dr Appts',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'personalCareDoctor', 'budgeted', value),
            value: expenses.variable.personalCareDoctor.budgeted,
          },
          {
            label: 'Dog Supplies',
            onChange: (value: number) =>
              mergeExpenseUpdate('variable', 'dogSupplies', 'budgeted', value),
            value: expenses.variable.dogSupplies.budgeted,
          },
        ]}
        total={variable.totalBudgetedVariableExpenses}
      />

      {/* Difference */}
      <Generator
        sectionTitle="Difference"
        fields={[
          { label: 'Electric/Gas', value: variable.electricDifference },
          { label: 'Water', value: variable.waterDifference },
          {
            label: 'Car Fuel',
            value: variable.carFuelDifference,
          },
          { label: 'Tolls', value: variable.tollsDifference },
          { label: 'Groceries', value: variable.groceriesDifference },
          { label: 'Household Products', value: variable.householdProductsDifference },
          { label: 'Car Maintenance', value: variable.carMaintenanceDifference },
          { label: 'Haircut', value: variable.haircutDifference },
          {
            label: 'Personal Care/Dr Appts',
            value: variable.personalCareDoctorDifference,
          },
          { label: 'Dog Supplies', value: variable.dogSuppliesDifference },
        ]}
        total={variable.totalDifferenceVariableExpenses}
      />
    </div>
  </div>
);
