import { Title } from "@mantine/core";
import { Fixed } from "./Fixed";
import { Variable } from "./Variable";
import { Fun } from "./Fun";
import styles from "../Shared/Layout.module.css";
import type { ExpenseTotal } from "~/routes/_index";

export const Expenses = ({
  expenseTotal,
  updateExpenseTotal,
}: {
  expenseTotal: ExpenseTotal;
  updateExpenseTotal: any;
}) => (
  <div>
    <Title className={styles.header} order={2}>
      Expenses
    </Title>
    <Fixed
      expenseTotal={expenseTotal}
      updateExpenseTotal={updateExpenseTotal}
    />
    <Variable
      expenseTotal={expenseTotal}
      updateExpenseTotal={updateExpenseTotal}
    />
    <Fun expenseTotal={expenseTotal} updateExpenseTotal={updateExpenseTotal} />
  </div>
);
