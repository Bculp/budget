import { useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { Generator } from '../Shared/Generator';
import type { ExpenseTotal } from '@/app/page';

export const Fixed = ({
  expenseTotal,
  updateExpenseTotal,
}: {
  expenseTotal: ExpenseTotal;
  updateExpenseTotal: any;
}) => {
  const [rent, updateRent] = useState(0);
  const [rentersInsurance, updateRentersInsurance] = useState(0);
  const [internet, updateInternet] = useState(0);
  const [healthInsurance, updateHealthInsurance] = useState(0);
  const [carInsurance, updateCarInsurance] = useState(0);
  const [cellPhone, updateCellPhone] = useState(0);
  const [gymMembership, updateGymMembership] = useState(0);
  const [amazonMembership, updateAmazonMembership] = useState(0);
  const [spotify, updateSpotify] = useState(0);
  const [costco, updateCostco] = useState(0);
  const [domain, updateDomain] = useState(0);
  const [petco, updatePetco] = useState(0);
  const [tv, updateTv] = useState(0);
  const [allTrails, updateAllTrails] = useState(0);
  const actual =
    rent +
    rentersInsurance +
    internet +
    healthInsurance +
    carInsurance +
    cellPhone +
    gymMembership +
    amazonMembership +
    spotify +
    costco +
    domain +
    petco +
    tv +
    allTrails;

  const [budgetedRent, updateBudgetedRent] = useState(0);
  const [budgetedRentersInsurance, updateBudgetedRentersInsurance] = useState(0);
  const [budgetedInternet, updateBudgetedInternet] = useState(0);
  const [budgetedHealthInsurance, updateBudgetedHealthInsurance] = useState(0);
  const [budgetedCarInsurance, updateBudgetedCarInsurance] = useState(0);
  const [budgetedCellPhone, updateBudgetedCellPhone] = useState(0);
  const [budgetedGymMembership, updateBudgetedGymMembership] = useState(0);
  const [budgetedAmazonMembership, updateBudgetedAmazonMembership] = useState(0);
  const [budgetedSpotify, updateBudgetedSpotify] = useState(0);
  const [budgetedCostco, updateBudgetedCostco] = useState(0);
  const [budgetedDomain, updateBudgetedDomain] = useState(0);
  const [budgetedPetco, updateBudgetedPetco] = useState(0);
  const [budgetedTv, updateBudgetedTv] = useState(0);
  const [budgetedAllTrails, updateBudgetedAllTrails] = useState(0);
  const budgeted =
    budgetedRent +
    budgetedRentersInsurance +
    budgetedInternet +
    budgetedHealthInsurance +
    budgetedCarInsurance +
    budgetedCellPhone +
    budgetedGymMembership +
    budgetedAmazonMembership +
    budgetedSpotify +
    budgetedCostco +
    budgetedDomain +
    budgetedPetco +
    budgetedTv +
    budgetedAllTrails;

  const differenceRent = budgetedRent - rent;
  const differenceRentersInsurance = budgetedRentersInsurance - rentersInsurance;
  const differenceInternet = budgetedInternet - internet;
  const differenceHealthInsurance = budgetedHealthInsurance - healthInsurance;
  const differenceCarInsurance = budgetedCarInsurance - carInsurance;
  const differenceCellPhone = budgetedCellPhone - cellPhone;
  const differenceGymMembership = budgetedGymMembership - gymMembership;
  const differenceAmazonMembership = budgetedAmazonMembership - amazonMembership;
  const differenceSpotify = budgetedSpotify - spotify;
  const differenceCostco = budgetedCostco - costco;
  const differenceDomain = budgetedDomain - domain;
  const differencePetco = budgetedPetco - petco;
  const differenceTv = budgetedTv - tv;
  const differenceAllTrails = budgetedAllTrails - allTrails;
  const difference = budgeted - actual;

  useEffect(() => {
    updateExpenseTotal({
      ...expenseTotal,
      fixed: actual,
    });
  }, [actual, expenseTotal, updateExpenseTotal]);

  return (
    <div>
      <Title order={3}>Fixed</Title>
      <div className={styles.container}>
        {/* Actual */}
        <Generator
          sectionTitle="Actual"
          fields={[
            { label: 'Rent', onChange: updateRent, value: rent },
            {
              label: "Renter's Insurance",
              onChange: updateRentersInsurance,
              value: rentersInsurance,
            },
            { label: 'Internet', onChange: updateInternet, value: internet },
            {
              label: '[AUTO] Health, Dental Insurance, HSA',
              onChange: updateHealthInsurance,
              value: healthInsurance,
            },
            {
              label: 'Car Insurance',
              onChange: updateCarInsurance,
              value: carInsurance,
            },
            {
              label: 'Cell Phone',
              onChange: updateCellPhone,
              value: cellPhone,
            },
            {
              label: 'Gym Membership',
              onChange: updateGymMembership,
              value: gymMembership,
            },
            {
              label: 'Amazon Membership',
              onChange: updateAmazonMembership,
              value: amazonMembership,
            },
            { label: 'Spotify', onChange: updateSpotify, value: spotify },
            { label: 'Costco', onChange: updateCostco, value: costco },
            { label: 'Website Domain', onChange: updateDomain, value: domain },
            {
              label: 'Petco Vital Care (12 months)',
              onChange: updatePetco,
              value: petco,
            },
            {
              label: 'DirecTV (split w mom/amy)',
              onChange: updateTv,
              value: tv,
            },
            {
              label: 'Alltrails Premium',
              onChange: updateAllTrails,
              value: allTrails,
            },
          ]}
          total={actual}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            {
              label: 'Rent',
              onChange: updateBudgetedRent,
              value: budgetedRent,
            },
            {
              label: "Renter's Insurance",
              onChange: updateBudgetedRentersInsurance,
              value: budgetedRentersInsurance,
            },
            {
              label: 'Internet',
              onChange: updateBudgetedInternet,
              value: budgetedInternet,
            },
            {
              label: '[AUTO] Health, Dental Insurance, HSA',
              onChange: updateBudgetedHealthInsurance,
              value: budgetedHealthInsurance,
            },
            {
              label: 'Car Insurance',
              onChange: updateBudgetedCarInsurance,
              value: budgetedCarInsurance,
            },
            {
              label: 'Cell Phone',
              onChange: updateBudgetedCellPhone,
              value: budgetedCellPhone,
            },
            {
              label: 'Gym Membership',
              onChange: updateBudgetedGymMembership,
              value: budgetedGymMembership,
            },
            {
              label: 'Amazon Membership',
              onChange: updateBudgetedAmazonMembership,
              value: budgetedAmazonMembership,
            },
            {
              label: 'Spotify',
              onChange: updateBudgetedSpotify,
              value: budgetedSpotify,
            },
            {
              label: 'Costco',
              onChange: updateBudgetedCostco,
              value: budgetedCostco,
            },
            {
              label: 'Website Domain',
              onChange: updateBudgetedDomain,
              value: budgetedDomain,
            },
            {
              label: 'Petco Vital Care (12 months)',
              onChange: updateBudgetedPetco,
              value: budgetedPetco,
            },
            {
              label: 'DirecTV (split w mom/amy)',
              onChange: updateBudgetedTv,
              value: budgetedTv,
            },
            {
              label: 'Alltrails Premium',
              onChange: updateBudgetedAllTrails,
              value: budgetedAllTrails,
            },
          ]}
          total={budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[
            { label: 'Rent', value: differenceRent },
            { label: "Renter's Insurance", value: differenceRentersInsurance },
            { label: 'Internet', value: differenceInternet },
            {
              label: '[AUTO] Health, Dental Insurance, HSA',
              value: differenceHealthInsurance,
            },
            { label: 'Car Insurance', value: differenceCarInsurance },
            { label: 'Cell Phone', value: differenceCellPhone },
            { label: 'Gym Membership', value: differenceGymMembership },
            { label: 'Amazon Membership', value: differenceAmazonMembership },
            { label: 'Spotify', value: differenceSpotify },
            { label: 'Costco', value: differenceCostco },
            { label: 'Website Domain', value: differenceDomain },
            { label: 'Petco Vital Care (12 months)', value: differencePetco },
            { label: 'DirecTV (split w mom/amy)', value: differenceTv },
            { label: 'Alltrails Premium', value: differenceAllTrails },
          ]}
          total={difference}
        />
      </div>
    </div>
  );
};
