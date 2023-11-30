import { Title } from '@mantine/core';
import { useEffect } from 'react';
import { NumberInput } from '../Shared/NumberInput';
import styles from '../Shared/Layout.module.css';
import { IInvestmentChecking } from '../Shared/Types/StateProps';

export const InvestmentChecking = ({
  savings,
  rothIRA,
  individualInvestments,
  mutualFunds,
  actualAmtInChecking,
  updateActualAmtInChecking,
  budgetAmtInChecking,
  budgetBalance,
  mergeInvestmentCheckingUpdate,
  updateInvestmentChecking,
  investmentChecking,
}: {
  savings: number;
  rothIRA: number;
  individualInvestments: number;
  mutualFunds: number;
  actualAmtInChecking: number;
  updateActualAmtInChecking: any;
  budgetAmtInChecking: number;
  budgetBalance: number;
  mergeInvestmentCheckingUpdate: any;
  updateInvestmentChecking: any;
  investmentChecking: IInvestmentChecking;
}) => {
  useEffect(() => {
    updateInvestmentChecking({
      savings,
      rothIRA,
      individualInvestments,
      mutualFunds,
      budgetAmtInChecking,
      budgetBalance,
    });
    }, [savings, rothIRA, individualInvestments, mutualFunds, budgetAmtInChecking, budgetBalance]
  );

  return (
    <div>
      <Title order={3}>Total In Checking</Title>
      <div className={styles.container}>
        <div className={styles.section}>
          <NumberInput
            className={styles.input}
            label="Total in checking that should go to Savings"
            value={investmentChecking.savings}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('savings', value)}
          />
          <NumberInput
            className={styles.input}
            label="Total in checking that should go to IRA"
            value={investmentChecking.rothIRA}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('rothIRA', value)}
          />
          <NumberInput
            className={styles.input}
            label="Total in checking that should go to Individual Investments"
            value={investmentChecking.individualInvestments}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('individualInvestments', value)}
          />
          <NumberInput
            className={styles.input}
            label="Total in checking that should go to ETFs/Mutual Funds"
            value={investmentChecking.mutualFunds}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('mutualFunds', value)}
          />
          <NumberInput
            className={styles.input}
            label="Should have this much in checking"
            value={investmentChecking.budgetAmtInChecking}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('budgetAmtInChecking', value)}
          />
          <NumberInput
            className={styles.input}
            label="Actual amount in checking"
            onChange={(value: number) => updateActualAmtInChecking(value)}
            value={actualAmtInChecking}
          />
          <NumberInput
            className={styles.input}
            label="Extra/Missing"
            value={investmentChecking.budgetBalance}
            onChange={(value: number) => mergeInvestmentCheckingUpdate('budgetBalance', value)}
          />
        </div>
      </div>
    </div>
  );
};
