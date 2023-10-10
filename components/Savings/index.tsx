import { Title } from '@mantine/core';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';

export const Savings = ({
  mergeSavingsUpdate,
  savings,
  savingsDifference,
}: {
  mergeSavingsUpdate: any;
  savings: any;
  savingsDifference: number;
}) => {
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
              onChange: (value: number) => mergeSavingsUpdate('actual', value),
              value: savings.actual,
            },
          ]}
          total={savings.actual}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            {
              label: 'Savings',
              onChange: (value: number) => mergeSavingsUpdate('budgeted', value),

              value: savings.budgeted,
            },
          ]}
          total={savings.budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[{ label: 'Savings', value: savingsDifference }]}
          total={savingsDifference}
        />
      </div>
    </div>
  );
};
