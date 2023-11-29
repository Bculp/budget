import { ActionIcon, Collapse, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';
import { Percentages } from '../Shared/Types/StateProps';
import { NumberInput } from '../Shared/NumberInput';

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
  percentages,
  mergePercentageUpdate,
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
  percentages: Percentages;
  mergePercentageUpdate: any;
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Group>
        <Title order={2}>Investments</Title>
        <ActionIcon onClick={toggle}>{opened ? <IconChevronUp /> : <IconChevronDown />}</ActionIcon>
      </Group>
      <Collapse in={opened}>
        <NumberInput
          className={styles.input}
          label="Total Percentage"
          onChange={(value: number) => mergePercentageUpdate('investments', value)}
          prefix=""
          suffix="%"
          value={percentages.investments}
        />
        <NumberInput
          className={styles.input}
          label="Roth 401k Percentage"
          onChange={(value: number) => mergeInvestmentUpdate('roth401k', 'percentage', value)}
          prefix=""
          suffix="%"
          value={investments.roth401k.percentage}
        />
        <NumberInput
          className={styles.input}
          label="Roth IRA Percentage"
          onChange={(value: number) => mergeInvestmentUpdate('rothIRA', 'percentage', value)}
          prefix=""
          suffix="%"
          value={investments.rothIRA.percentage}
        />
        <NumberInput
          className={styles.input}
          label="Individual Investments Percentage"
          onChange={(value: number) => mergeInvestmentUpdate('individualInvestments', 'percentage', value)}
          prefix=""
          suffix="%"
          value={investments.individualInvestments.percentage}
        />
        <NumberInput
          className={styles.input}
          label="ETFs/Mutual Funds Percentage"
          onChange={(value: number) => mergeInvestmentUpdate('mutualFunds', 'percentage', value)}
          prefix=""
          suffix="%"
          value={investments.mutualFunds.percentage}
        />
        <div className={styles.container}>
          {/* Actual */}
          <Generator
            sectionTitle="Actual"
            fields={[
              {
                label: '[AUTO] Roth 401k',
                onChange: (value: number) => mergeInvestmentUpdate('roth401k', 'actual', value),
                value: investments.roth401k.actual,
              },
              {
                label: 'Roth IRA',
                onChange: (value: number) => mergeInvestmentUpdate('rothIRA', 'actual', value),
                value: investments.rothIRA.actual,
              },
              {
                label: 'Individual Investments',
                onChange: (value: number) =>
                  mergeInvestmentUpdate('individualInvestments', 'actual', value),
                value: investments.individualInvestments.actual,
              },
              {
                label: 'ETFs/Mutual Funds',
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
                label: '[AUTO] Roth 401k',
                onChange: (value: number) => mergeInvestmentUpdate('roth401k', 'budgeted', value),
                value: investments.roth401k.budgeted,
              },
              {
                label: 'Roth IRA',
                onChange: (value: number) => mergeInvestmentUpdate('rothIRA', 'budgeted', value),
                value: investments.rothIRA.budgeted,
              },
              {
                label: 'Individual Investments',
                onChange: (value: number) =>
                  mergeInvestmentUpdate('individualInvestments', 'budgeted', value),
                value: investments.individualInvestments.budgeted,
              },
              {
                label: 'ETFs/Mutual Funds',
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
              { label: '[AUTO] Roth 401k', value: roth401kDifference },
              { label: 'Roth IRA', value: rothIRADifference },
              {
                label: 'Individual Investments',
                value: individualInvestmentsDifference,
              },
              {
                label: 'ETFs/Mutual Funds',
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
