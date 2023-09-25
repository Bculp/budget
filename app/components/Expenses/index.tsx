import { ActionIcon, Collapse, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Fixed } from "./Fixed";
import { Variable } from "./Variable";
import { Fun } from "./Fun";
import type { ExpenseTotal } from "~/routes/_index";

export const Expenses = ({
  expenseTotal,
  updateExpenseTotal,
}: {
  expenseTotal: ExpenseTotal;
  updateExpenseTotal: any;
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div>
      <Group>
        <Title order={2}>Expenses</Title>
        <ActionIcon onClick={toggle}>
          {opened ? <IconChevronUp /> : <IconChevronDown />}
        </ActionIcon>
      </Group>
      <Collapse in={opened}>
        <Fixed
          expenseTotal={expenseTotal}
          updateExpenseTotal={updateExpenseTotal}
        />
        <Variable
          expenseTotal={expenseTotal}
          updateExpenseTotal={updateExpenseTotal}
        />
        <Fun
          expenseTotal={expenseTotal}
          updateExpenseTotal={updateExpenseTotal}
        />
      </Collapse>
    </div>
  );
};
