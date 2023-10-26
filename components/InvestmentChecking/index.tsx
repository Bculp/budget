import { Title } from '@mantine/core';
import { NumberInput } from '../Shared/NumberInput';
import styles from '../Shared/Layout.module.css';

export const InvestmentChecking = ({
  savings,
  rothIRA,
  individualInvestments,
  mutualFunds,
  actualAmtInChecking,
  updateActualAmtInChecking,
  budgetAmtInChecking,
  budgetBalance,
}: {
  savings: number;
  rothIRA: number;
  individualInvestments: number;
  mutualFunds: number;
  actualAmtInChecking: number;
  updateActualAmtInChecking: any;
  budgetAmtInChecking: number;
  budgetBalance: number;
}) => (
  <div>
    <Title order={3}>Total In Checking</Title>
    <div className={styles.container}>
      <div className={styles.section}>
        <NumberInput
          className={styles.input}
          label="Total in checking that should go to Savings"
          value={savings}
        />
        <NumberInput
          className={styles.input}
          label="Total in checking that should go to IRA"
          value={rothIRA}
        />
        <NumberInput
          className={styles.input}
          label="Total in checking that should go to Individual Investments"
          value={individualInvestments}
        />
        <NumberInput
          className={styles.input}
          label="Total in checking that should go to ETFs/Mutual Funds"
          value={mutualFunds}
        />
        <NumberInput
          className={styles.input}
          label="Should have this much in checking"
          value={budgetAmtInChecking}
        />
        <NumberInput
          className={styles.input}
          label="Actual amount in checking"
          onChange={(value: number) => updateActualAmtInChecking(value)}
          value={actualAmtInChecking}
        />
        <NumberInput className={styles.input} label="Extra/Missing" value={budgetBalance} />
      </div>
    </div>
  </div>
);
