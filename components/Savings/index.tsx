import { useState } from 'react';
import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { Generator } from '../Shared/Generator';

export const Savings = ({ savings }: { savings: number }) => {
  const [savingsTotal, updateSavings] = useState(savings);
  const [budgeted, updateBudgeted] = useState(0);
  const difference = budgeted - savingsTotal;

  return (
    <div>
      <Title order={3}>Savings</Title>
      <div className={styles.container}>
        {/* Actual */}
        <Generator
          sectionTitle="Actual"
          fields={[
            {
              label: 'Savings',
              onChange: updateSavings,
              value: savingsTotal,
            },
          ]}
          total={savingsTotal}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            {
              label: 'Savings',
              onChange: updateBudgeted,
              value: budgeted,
            },
          ]}
          total={budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[{ label: 'Savings', value: difference }]}
          total={difference}
        />
      </div>
    </div>
  );
};
