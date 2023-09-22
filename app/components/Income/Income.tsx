import { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import styles from "../Shared/Layout.module.css";
import { Generator } from "../Shared/Generator";

export const Income = ({ updateIncomeTotal }: { updateIncomeTotal: any }) => {
  const [job, updateJob] = useState(0);
  const [other, updateOther] = useState(0);
  const actual = job + other;

  const [budgetedJob, updateBudgetedJob] = useState(0);
  const [budgetedOther, updateBudgetedOther] = useState(0);
  const budgeted = budgetedJob + budgetedOther;

  const differenceJob = budgetedJob - job;
  const differenceOther = budgetedOther - other;
  const difference = budgeted - actual;

  useEffect(() => {
    updateIncomeTotal(actual);
  }, [actual, updateIncomeTotal]);

  return (
    <div>
      <Title className={styles.header} order={2}>
        Income
      </Title>
      <div className={styles.container}>
        {/* Actual */}
        <Generator
          sectionTitle="Actual"
          fields={[
            { label: "Job", onChange: updateJob, value: job },
            { label: "Other Earnings", onChange: updateOther, value: other },
          ]}
          total={actual}
        />

        {/* Budgeted */}
        <Generator
          sectionTitle="Budgeted"
          fields={[
            { label: "Job", onChange: updateBudgetedJob, value: budgetedJob },
            {
              label: "Other Earnings",
              onChange: updateBudgetedOther,
              value: budgetedOther,
            },
          ]}
          total={budgeted}
        />

        {/* Difference */}
        <Generator
          sectionTitle="Difference"
          fields={[
            {
              label: "Job",
              value: differenceJob,
            },
            {
              label: "Other Earnings",
              value: differenceOther,
            },
          ]}
          total={difference}
        />
      </div>
    </div>
  );
};
