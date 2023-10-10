import { ActionIcon, Collapse, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';

export const Investments = ({
  investments,
  mergeInvestmentUpdate,
  roth401kDifference,
  rothIRADifference,
  individualInvestmentsDifference,
  mutualFundsDifference,
  totalActualInvestments,
  totalBudgetedInvestments,
  totalDifferenceInvestments,
}: {
  investments: any;
  mergeInvestmentUpdate: any;
  roth401kDifference: number;
  rothIRADifference: number;
  individualInvestmentsDifference: number;
  mutualFundsDifference: number;
  totalActualInvestments: number;
  totalBudgetedInvestments: number;
  totalDifferenceInvestments: number;
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Group>
        <Title order={2}>Investments</Title>
        <ActionIcon onClick={toggle}>{opened ? <IconChevronUp /> : <IconChevronDown />}</ActionIcon>
      </Group>
      <Collapse in={opened}>
        <div className={styles.container}>
          {/* Actual */}
          <Generator
            sectionTitle="Actual"
            fields={[
              {
                label: '[AUTO] Roth 401k (12%)',
                onChange: (value: number) => mergeInvestmentUpdate('roth401k', 'actual', value),
                value: investments.roth401k.actual,
              },
              {
                label: 'Roth IRA (10.75%)',
                onChange: (value: number) => mergeInvestmentUpdate('rothIRA', 'actual', value),
                value: investments.rothIRA.actual,
              },
              {
                label: 'Individual Investments (9%)',
                onChange: (value: number) =>
                  mergeInvestmentUpdate('individualInvestments', 'actual', value),
                value: investments.individualInvestments.actual,
              },
              {
                label: 'ETFs/Mutual Funds (19.25%)',
                onChange: (value: number) => mergeInvestmentUpdate('mutualFunds', 'actual', value),
                value: investments.mutualFunds.actual,
              },
            ]}
            total={totalActualInvestments}
          />

          {/* Budgeted */}
          <Generator
            sectionTitle="Budgeted"
            fields={[
              {
                label: '[AUTO] Roth 401k (12%)',
                onChange: (value: number) => mergeInvestmentUpdate('roth401k', 'budgeted', value),
                value: investments.roth401k.budgeted,
              },
              {
                label: 'Roth IRA (10.75%)',
                onChange: (value: number) => mergeInvestmentUpdate('rothIRA', 'budgeted', value),
                value: investments.rothIRA.budgeted,
              },
              {
                label: 'Individual Investments (9%)',
                onChange: (value: number) =>
                  mergeInvestmentUpdate('individualInvestments', 'budgeted', value),
                value: investments.individualInvestments.budgeted,
              },
              {
                label: 'ETFs/Mutual Funds (19.25%)',
                onChange: (value: number) =>
                  mergeInvestmentUpdate('mutualFunds', 'budgeted', value),
                value: investments.mutualFunds.budgeted,
              },
            ]}
            total={totalBudgetedInvestments}
          />

          {/* Difference */}
          <Generator
            sectionTitle="Difference"
            fields={[
              { label: '[AUTO] Roth 401k (12%)', value: roth401kDifference },
              { label: 'Roth IRA (10.75%)', value: rothIRADifference },
              {
                label: 'Individual Investments (9%)',
                value: individualInvestmentsDifference,
              },
              {
                label: 'ETFs/Mutual Funds (19.25%)',
                value: mutualFundsDifference,
              },
            ]}
            total={totalDifferenceInvestments}
          />
        </div>
      </Collapse>
    </div>
  );
};
