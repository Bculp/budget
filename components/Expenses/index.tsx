import { ActionIcon, Collapse, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Fixed } from './Fixed';
import { Variable } from './Variable';
import { Fun } from './Fun';
import type { ExpenseTotal } from '@/app/page';

export const Expenses = ({
  mergeExpenseUpdate,
  expenses,
  totalDifferenceExpenses,
  fixed,
  variable,
  fun,
}: {
  mergeExpenseUpdate: any;
  expenses: any;
  totalDifferenceExpenses: number;
  fixed: object;
  variable: object;
  fun: object;
}) => {
  const fixedProps = {
    mergeExpenseUpdate,
    expenses,
    totalDifferenceExpenses,
    fixed,
  };
  const variableProps = {
    mergeExpenseUpdate,
    expenses,
    totalDifferenceExpenses,
    variable,
  };
  const funProps = {
    mergeExpenseUpdate,
    expenses,
    totalDifferenceExpenses,
    fun,
  };
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div>
      <Group>
        <Title order={2}>Expenses</Title>
        <ActionIcon onClick={toggle}>{opened ? <IconChevronUp /> : <IconChevronDown />}</ActionIcon>
      </Group>
      <Collapse in={opened}>
        <Fixed {...fixedProps} />
        {/* <Variable {...variableProps} /> */}
        {/* <Fun {...funProps} /> */}
      </Collapse>
    </div>
  );
};
