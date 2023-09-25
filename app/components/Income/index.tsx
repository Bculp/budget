import { useEffect, useState } from "react";
import { ActionIcon, Collapse, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import styles from "../Shared/Layout.module.css";
import { Generator } from "../Shared/Generator";

export const Income = ({ updateIncomeTotal }: { updateIncomeTotal: any }) => {
  const [opened, { toggle }] = useDisclosure(false);
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
      <Group>
        <Title order={2}>Income</Title>
        <ActionIcon onClick={toggle}>
          {opened ? <IconChevronUp /> : <IconChevronDown />}
        </ActionIcon>
      </Group>
      <Collapse in={opened}>
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
      </Collapse>
    </div>
  );
};
