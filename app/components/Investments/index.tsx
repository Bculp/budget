import { useEffect, useState } from "react";
import { ActionIcon, Collapse, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import styles from "../Shared/Layout.module.css";
import { Generator } from "../Shared/Generator";

export const Investments = ({
  rothIRA,
  updateRothIRA,
  individualInvestments,
  updateIndividualInvestments,
  mutualFunds,
  updateMutualFunds,
  updateInvestmentTotal,
}: {
  rothIRA: number;
  updateRothIRA: any;
  individualInvestments: number;
  updateIndividualInvestments: any;
  mutualFunds: number;
  updateMutualFunds: any;
  updateInvestmentTotal: any;
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [roth401k, updateRoth401k] = useState(0);
  const actual = roth401k + rothIRA + individualInvestments + mutualFunds;

  const [budgetedRoth401k, updateBudgetedRoth401k] = useState(0);
  const [budgetedRothIRA, updateBudgetedRothIRA] = useState(0);
  const [budgetedIndividualInvestments, updateBudgetedIndividualInvestments] =
    useState(0);
  const [budgetedMutualFunds, updateBudgetedMutualFunds] = useState(0);
  const budgeted =
    budgetedRoth401k +
    budgetedRothIRA +
    budgetedIndividualInvestments +
    budgetedMutualFunds;

  const differenceRoth401k = budgetedRoth401k - roth401k;
  const differenceRothIRA = budgetedRothIRA - rothIRA;
  const differenceIndividualInvestments =
    budgetedIndividualInvestments - individualInvestments;
  const differenceMutualFunds = budgetedMutualFunds - mutualFunds;
  const difference = budgeted - actual;

  useEffect(() => {
    updateInvestmentTotal(actual);
  }, [actual, updateInvestmentTotal]);

  return (
    <div>
      <Group>
        <Title order={2}>Investments</Title>
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
              {
                label: "[AUTO] Roth 401k (12%)",
                onChange: updateRoth401k,
                value: roth401k,
              },
              {
                label: "Roth IRA (10.75%)",
                onChange: updateRothIRA,
                value: rothIRA,
              },
              {
                label: "Individual Investments (9%)",
                onChange: updateIndividualInvestments,
                value: individualInvestments,
              },
              {
                label: "ETFs/Mutual Funds (19.25%)",
                onChange: updateMutualFunds,
                value: mutualFunds,
              },
            ]}
            total={actual}
          />

          {/* Budgeted */}
          <Generator
            sectionTitle="Budgeted"
            fields={[
              {
                label: "[AUTO] Roth 401k (12%)",
                onChange: updateBudgetedRoth401k,
                value: budgetedRoth401k,
              },
              {
                label: "Roth IRA (10.75%)",
                onChange: updateBudgetedRothIRA,
                value: budgetedRothIRA,
              },
              {
                label: "Individual Investments (9%)",
                onChange: updateBudgetedIndividualInvestments,
                value: budgetedIndividualInvestments,
              },
              {
                label: "ETFs/Mutual Funds (19.25%)",
                onChange: updateBudgetedMutualFunds,
                value: budgetedMutualFunds,
              },
            ]}
            total={budgeted}
          />

          {/* Difference */}
          <Generator
            sectionTitle="Difference"
            fields={[
              { label: "[AUTO] Roth 401k (12%)", value: differenceRoth401k },
              { label: "Roth IRA (10.75%)", value: differenceRothIRA },
              {
                label: "Individual Investments (9%)",
                value: differenceIndividualInvestments,
              },
              {
                label: "ETFs/Mutual Funds (19.25%)",
                value: differenceMutualFunds,
              },
            ]}
            total={difference}
          />
        </div>
      </Collapse>
    </div>
  );
};
