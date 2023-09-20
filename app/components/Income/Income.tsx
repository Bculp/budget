import { useState } from "react";
import { Text, Title } from "@mantine/core";
import { NumberInput } from "../NumberInput";
import styles from "./Layout.module.css";

export const Income = () => {
  const [job, updateJob] = useState(0);
  const [other, updateOther] = useState(0);
  const actual = job + other;

  const [budgetedJob, updateBudgetedJob] = useState(0);
  const [budgetedOther, updateBudgetedOther] = useState(0);
  const budgeted = budgetedJob + budgetedOther;

  return (
    <div>
      <Title className={styles.header} order={2}>
        Income
      </Title>
      <div className={styles.container}>
        {/* Actual */}
        <div className={styles.section}>
          <Title order={3}>Actual</Title>
          <NumberInput
            className={styles.input}
            label="Job"
            onChange={updateJob}
            value={job}
          />
          <NumberInput
            className={styles.input}
            label="Other Earnings"
            onChange={updateOther}
            value={other}
          />

          <Title order={3}>Total</Title>
          <Text>{actual}</Text>
        </div>

        {/* Budgeted */}
        <div className={styles.section}>
          <Title order={3}>Budgeted</Title>
          <NumberInput
            className={styles.input}
            label="Job"
            onChange={updateBudgetedJob}
            value={budgetedJob}
          />
          <NumberInput
            className={styles.input}
            label="Other Earnings"
            onChange={updateBudgetedOther}
            value={budgetedOther}
          />

          <Title order={3}>Total</Title>
          <Text>{budgeted}</Text>
        </div>

        {/* Difference */}
        <div className={styles.section}>
          <Title order={3}>Difference</Title>
          <NumberInput
            className={styles.input}
            label="Job"
            value={budgetedJob - job}
          />
          <NumberInput
            className={styles.input}
            label="Other Earnings"
            value={budgetedOther - other}
          />

          <Title order={3}>Total</Title>
          <Text>{budgeted - actual}</Text>
        </div>
      </div>
    </div>
  );
};
