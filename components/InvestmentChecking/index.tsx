import { Title } from '@mantine/core';
import styles from '../Shared/Layout.module.css';
import { NumberInput } from '../Shared/NumberInput';

export const InvestmentChecking = ({
  rothIRA,
  individualInvestments,
  mutualFunds,
}: {
  rothIRA: number;
  individualInvestments: number;
  mutualFunds: number;
}) => (
  <div>
    <Title order={3}>Total In Checking</Title>
    <div className={styles.container}>
      <div className={styles.section}>
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
      </div>
    </div>
  </div>
);
