import { Group, Title } from "@mantine/core";
import styles from "../Shared/Layout.module.css";
import { NumberInput } from "../Shared/NumberInput";

export const Totals = ({
  income,
  expenses,
  investments,
  amtAvailableToInvest,
  savings,
}: {
  income: number;
  expenses: number;
  investments: number;
  amtAvailableToInvest: number;
  savings: number;
}) => (
  <div>
    <Title order={3}>Totals</Title>
    <div className={styles.container}>
      <Group>
        <NumberInput
          className={styles.input}
          label="Total Income"
          value={income}
        />
        <NumberInput
          className={styles.input}
          label="Total Expenses"
          value={income}
        />
        <NumberInput
          className={styles.input}
          label="Amount Available to Invest (Inc-Exp)"
          value={amtAvailableToInvest}
        />

        <NumberInput
          className={styles.input}
          label="Total Investments"
          value={investments}
        />

        <NumberInput
          className={styles.input}
          label="Total Remaining/Savings"
          value={savings}
        />
      </Group>
    </div>
  </div>
);
