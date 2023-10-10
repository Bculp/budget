import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { Generator } from '../Shared/Generator';

export const Fixed = ({
  mergeExpenseUpdate,
  expenses,
  fixed,
}: {
  mergeExpenseUpdate: any;
  expenses: any;
  fixed: any;
}) => (
  <div>
    <Title order={3}>Fixed</Title>
    <div className={styles.container}>
      {/* Actual */}
      <Generator
        sectionTitle="Actual"
        fields={[
          {
            label: 'Rent',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'rent', 'actual', value),
            value: expenses.fixed.rent.actual,
          },
          {
            label: "Renter's Insurance",
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'rentersInsurance', 'actual', value),
            value: expenses.fixed.rentersInsurance.actual,
          },
          {
            label: 'Internet',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'internet', 'actual', value),
            value: expenses.fixed.internet.actual,
          },
          {
            label: '[AUTO] Health, Dental Insurance, HSA',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'healthInsurance', 'actual', value),
            value: expenses.fixed.healthInsurance.actual,
          },
          {
            label: 'Car Insurance',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'carInsurance', 'actual', value),
            value: expenses.fixed.carInsurance.actual,
          },
          {
            label: 'Cell Phone',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'cellPhone', 'actual', value),
            value: expenses.fixed.cellPhone.actual,
          },
          {
            label: 'Gym Membership',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'gymMembership', 'actual', value),
            value: expenses.fixed.gymMembership.actual,
          },
          {
            label: 'Amazon Membership',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'amazonMembership', 'actual', value),
            value: expenses.fixed.amazonMembership.actual,
          },
          {
            label: 'Spotify',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'spotify', 'actual', value),
            value: expenses.fixed.spotify.actual,
          },
          {
            label: 'Costco',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'costco', 'actual', value),
            value: expenses.fixed.costco.actual,
          },
          {
            label: 'Website Domain',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'domain', 'actual', value),
            value: expenses.fixed.domain.actual,
          },
          {
            label: 'Petco Vital Care (12 months)',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'petco', 'actual', value),
            value: expenses.fixed.petco.actual,
          },
          {
            label: 'DirecTV (split w mom/amy)',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'tv', 'actual', value),
            value: expenses.fixed.tv.actual,
          },
          {
            label: 'Alltrails Premium',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'allTrails', 'actual', value),
            value: expenses.fixed.allTrails.actual,
          },
        ]}
        total={fixed.totalActualFixedExpenses}
      />

      {/* Budgeted */}
      <Generator
        sectionTitle="Budgeted"
        fields={[
          {
            label: 'Rent',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'rent', 'budgeted', value),
            value: expenses.fixed.rent.budgeted,
          },
          {
            label: "Renter's Insurance",
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'rentersInsurance', 'budgeted', value),
            value: expenses.fixed.rentersInsurance.budgeted,
          },
          {
            label: 'Internet',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'internet', 'budgeted', value),
            value: expenses.fixed.internet.budgeted,
          },
          {
            label: '[AUTO] Health, Dental Insurance, HSA',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'healthInsurance', 'budgeted', value),
            value: expenses.fixed.healthInsurance.budgeted,
          },
          {
            label: 'Car Insurance',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'carInsurance', 'budgeted', value),
            value: expenses.fixed.carInsurance.budgeted,
          },
          {
            label: 'Cell Phone',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'cellPhone', 'budgeted', value),
            value: expenses.fixed.cellPhone.budgeted,
          },
          {
            label: 'Gym Membership',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'gymMembership', 'budgeted', value),
            value: expenses.fixed.gymMembership.budgeted,
          },
          {
            label: 'Amazon Membership',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'amazonMembership', 'budgeted', value),
            value: expenses.fixed.amazonMembership.budgeted,
          },
          {
            label: 'Spotify',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'spotify', 'budgeted', value),
            value: expenses.fixed.spotify.budgeted,
          },
          {
            label: 'Costco',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'costco', 'budgeted', value),
            value: expenses.fixed.costco.budgeted,
          },
          {
            label: 'Website Domain',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'domain', 'budgeted', value),
            value: expenses.fixed.domain.budgeted,
          },
          {
            label: 'Petco Vital Care (12 months)',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'petco', 'budgeted', value),
            value: expenses.fixed.petco.budgeted,
          },
          {
            label: 'DirecTV (split w mom/amy)',
            onChange: (value: number) => mergeExpenseUpdate('fixed', 'tv', 'budgeted', value),
            value: expenses.fixed.tv.budgeted,
          },
          {
            label: 'Alltrails Premium',
            onChange: (value: number) =>
              mergeExpenseUpdate('fixed', 'allTrails', 'budgeted', value),
            value: expenses.fixed.allTrails.budgeted,
          },
        ]}
        total={fixed.totalBudgetedFixedExpenses}
      />

      {/* Difference */}
      <Generator
        sectionTitle="Difference"
        fields={[
          { label: 'Rent', value: fixed.rentDifference },
          { label: "Renter's Insurance", value: fixed.rentersInsuranceDifference },
          { label: 'Internet', value: fixed.internetDifference },
          {
            label: '[AUTO] Health, Dental Insurance, HSA',
            value: fixed.healthInsuranceDifference,
          },
          { label: 'Car Insurance', value: fixed.carInsuranceDifference },
          { label: 'Cell Phone', value: fixed.cellPhoneDifference },
          { label: 'Gym Membership', value: fixed.gymMembershipDifference },
          { label: 'Amazon Membership', value: fixed.amazonMembershipDifference },
          { label: 'Spotify', value: fixed.spotifyDifference },
          { label: 'Costco', value: fixed.costcoDifference },
          { label: 'Website Domain', value: fixed.domainDifference },
          { label: 'Petco Vital Care (12 months)', value: fixed.petcoDifference },
          { label: 'DirecTV (split w mom/amy)', value: fixed.tvDifference },
          { label: 'Alltrails Premium', value: fixed.allTrailsDifference },
        ]}
        total={fixed.totalDifferenceFixedExpenses}
      />
    </div>
  </div>
);
