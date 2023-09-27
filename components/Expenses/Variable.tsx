import { useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { Generator } from '../Shared/Generator';
import type { ExpenseTotal } from '@/app/page';

export const Variable = ({
  expenseTotal,
  updateExpenseTotal,
}: {
  expenseTotal: ExpenseTotal;
  updateExpenseTotal: any;
}) => {
  const [electric, updateElectric] = useState(0);
  const [water, updateWater] = useState(0);
  const [carFuel, updateCarFuel] = useState(0);
  const [tolls, updateTolls] = useState(0);
  const [groceries, updateGroceries] = useState(0);
  const [householdProducts, updateHouseholdProducts] = useState(0);
  const [carMaintenance, updateCarMaintenance] = useState(0);
  const [haircut, updateHaircut] = useState(0);
  const [personalCareDoctor, updatePersonalCareDoctor] = useState(0);
  const [dogSupplies, updateDogSupplies] = useState(0);
  const actual =
    electric +
    water +
    carFuel +
    tolls +
    groceries +
    householdProducts +
    carMaintenance +
    haircut +
    personalCareDoctor +
    dogSupplies;

  const [budgetedElectric, updateBudgetedRent] = useState(0);
  const [budgetedWater, updateBudgetedWater] = useState(0);
  const [budgetedCarFuel, updateBudgetedCarFuel] = useState(0);
  const [budgetedTolls, updateBudgetedTolls] = useState(0);
  const [budgetedGroceries, updateBudgetedGroceries] = useState(0);
  const [budgetedHouseholdProducts, updateBudgetedHouseholdProducts] = useState(0);
  const [budgetedCarMaintenance, updateBudgetedCarMaintenance] = useState(0);
  const [budgetedHaircut, updateBudgetedHaircut] = useState(0);
  const [budgetedPersonalCareDoctor, updateBudgetedPersonalCareDoctor] = useState(0);
  const [budgetedDogSupplies, updateBudgetedDogSupplies] = useState(0);
  const budgeted =
    budgetedElectric +
    budgetedWater +
    budgetedCarFuel +
    budgetedTolls +
    budgetedGroceries +
    budgetedHouseholdProducts +
    budgetedCarMaintenance +
    budgetedHaircut +
    budgetedPersonalCareDoctor +
    budgetedDogSupplies;

  const differenceElectric = budgetedElectric - electric;
  const differenceWater = budgetedWater - water;
  const differenceCarFuel = budgetedCarFuel - carFuel;
  const differenceTolls = budgetedTolls - tolls;
  const differenceGroceries = budgetedGroceries - groceries;
  const differenceHouseholdProducts = budgetedHouseholdProducts - householdProducts;
  const differenceCarMaintenance = budgetedCarMaintenance - carMaintenance;
  const differenceHaircut = budgetedHaircut - haircut;
  const differencePersonalCareDoctor = budgetedPersonalCareDoctor - personalCareDoctor;
  const differenceDogSupplies = budgetedDogSupplies - dogSupplies;
  const difference = budgeted - actual;

  useEffect(() => {
    updateExpenseTotal({
      ...expenseTotal,
      variable: actual,
    });
  }, [actual, expenseTotal, updateExpenseTotal]);

  return (
    <div>
      <Title order={3}>Variable</Title>
      <div className={styles.container}>
        {/* Actual */}
        <Generator
          sectionTitle="Actual"
          fields={[
            {
              label: 'Electric/Gas',
              onChange: updateElectric,
              value: electric,
            },
            { label: 'Water', onChange: updateWater, value: water },
            {
              label: 'Car Fuel',
              onChange: updateCarFuel,
              value: carFuel,
            },
            {
              label: 'Tolls',
              onChange: updateTolls,
              value: tolls,
            },
            {
              label: 'Groceries',
              onChange: updateGroceries,
              value: groceries,
            },
            {
              label: 'Household Products',
              onChange: updateHouseholdProducts,
              value: householdProducts,
            },
            {
              label: 'Car Maintenance',
              onChange: updateCarMaintenance,
              value: carMaintenance,
            },
            { label: 'Haircut', onChange: updateHaircut, value: haircut },
            {
              label: 'Personal Care/Dr Appts',
              onChange: updatePersonalCareDoctor,
              value: personalCareDoctor,
            },
            {
              label: 'Dog Supplies',
              onChange: updateDogSupplies,
              value: dogSupplies,
            },
          ]}
          total={actual}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            {
              label: 'Electric/Gas',
              onChange: updateBudgetedRent,
              value: budgetedElectric,
            },
            {
              label: 'Water',
              onChange: updateBudgetedWater,
              value: budgetedWater,
            },
            {
              label: 'Car Fuel',
              onChange: updateBudgetedCarFuel,
              value: budgetedCarFuel,
            },
            {
              label: 'Tolls',
              onChange: updateBudgetedTolls,
              value: budgetedTolls,
            },
            {
              label: 'Groceries',
              onChange: updateBudgetedGroceries,
              value: budgetedGroceries,
            },
            {
              label: 'Household Products',
              onChange: updateBudgetedHouseholdProducts,
              value: budgetedHouseholdProducts,
            },
            {
              label: 'Car Maintenance',
              onChange: updateBudgetedCarMaintenance,
              value: budgetedCarMaintenance,
            },
            {
              label: 'Haircut',
              onChange: updateBudgetedHaircut,
              value: budgetedHaircut,
            },
            {
              label: 'Personal Care/Dr Appts',
              onChange: updateBudgetedPersonalCareDoctor,
              value: budgetedPersonalCareDoctor,
            },
            {
              label: 'Dog Supplies',
              onChange: updateBudgetedDogSupplies,
              value: budgetedDogSupplies,
            },
          ]}
          total={budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[
            { label: 'Electric/Gas', value: differenceElectric },
            { label: 'Water', value: differenceWater },
            {
              label: 'Car Fuel',
              value: differenceCarFuel,
            },
            { label: 'Tolls', value: differenceTolls },
            { label: 'Groceries', value: differenceGroceries },
            { label: 'Household Products', value: differenceHouseholdProducts },
            { label: 'Car Maintenance', value: differenceCarMaintenance },
            { label: 'Haircut', value: differenceHaircut },
            {
              label: 'Personal Care/Dr Appts',
              value: differencePersonalCareDoctor,
            },
            { label: 'Dog Supplies', value: differenceDogSupplies },
          ]}
          total={difference}
        />
      </div>
    </div>
  );
};
