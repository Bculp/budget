import { ActionIcon, Collapse, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';

export const Income = ({
  income,
  jobDifference,
  mergeIncomeUpdate,
  otherDifference,
  totalActualIncome,
  totalBudgetedIncome,
  totalDifferenceIncome,
}: {
  income: any;
  jobDifference: number;
  mergeIncomeUpdate: any;
  otherDifference: number;
  totalActualIncome: number;
  totalBudgetedIncome: number;
  totalDifferenceIncome: number;
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Group>
        <Title order={2}>Income</Title>
        <ActionIcon onClick={toggle}>{opened ? <IconChevronUp /> : <IconChevronDown />}</ActionIcon>
      </Group>
      <Collapse in={opened}>
        <div className={styles.container}>
          {/* Actual */}
          <Generator
            sectionTitle="Actual"
            fields={[
              {
                label: 'Job',
                onChange: (value: number) => mergeIncomeUpdate('job', 'actual', value),
                value: income.job.actual,
              },
              {
                label: 'Other Earnings',
                onChange: (value: number) => mergeIncomeUpdate('other', 'actual', value),
                value: income.other.actual,
              },
            ]}
            total={totalActualIncome}
          />

          {/* Budgeted */}
          <Generator
            sectionTitle="Budgeted"
            fields={[
              {
                label: 'Job',
                onChange: (value: number) => mergeIncomeUpdate('job', 'budgeted', value),
                value: income.job.budgeted,
              },
              {
                label: 'Other Earnings',
                onChange: (value: number) => mergeIncomeUpdate('other', 'budgeted', value),
                value: income.other.budgeted,
              },
            ]}
            total={totalBudgetedIncome}
          />

          {/* Difference */}
          <Generator
            sectionTitle="Difference"
            fields={[
              {
                label: 'Job',
                value: jobDifference,
              },
              {
                label: 'Other Earnings',
                value: otherDifference,
              },
            ]}
            total={totalDifferenceIncome}
          />
        </div>
      </Collapse>
    </div>
  );
};
