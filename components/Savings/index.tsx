import { Title } from '@mantine/core';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';
import { Percentages } from '../Shared/Types/StateProps';
import { NumberInput } from '../Shared/NumberInput';

export const Savings = ({
  mergeSavingsUpdate,
  savings,
  savingsDifference,
  percentages,
  mergePercentageUpdate,
}: {
  mergeSavingsUpdate: any;
  savings: any;
  savingsDifference: number;
  percentages: Percentages;
  mergePercentageUpdate: any;
}) => {
  return (
    <div>
      <Title order={3}>Savings</Title>
      <NumberInput
        className={styles.input}
        label="Percentage"
        onChange={(value: number) => mergePercentageUpdate('savings', value)}
        prefix=""
        suffix="%"
        value={percentages.savings}
      />
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
