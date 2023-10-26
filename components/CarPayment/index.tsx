import { ActionIcon, Collapse, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Generator } from '../Shared/Generator';
import styles from '../Shared/Layout.module.css';
import { ICarPayment } from '../Shared/Types/StateProps';

export const CarPayment = ({
  carPayment,
  carAmtRemaining,
  mergeCarPaymentUpdate,
}: {
  carPayment: ICarPayment;
  carAmtRemaining: number;
  mergeCarPaymentUpdate: any;
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Group>
        <Title order={2}>Car Payment</Title>
        <ActionIcon onClick={toggle}>{opened ? <IconChevronUp /> : <IconChevronDown />}</ActionIcon>
      </Group>
      <Collapse in={opened}>
        <div className={styles.container}>
          {/* Actual */}
          <Generator
            sectionTitle="Actual"
            fields={[
              {
                label: 'Money for car payment',
                onChange: (value: number) => mergeCarPaymentUpdate('moneyAvailable', value),
                value: carPayment.moneyAvailable,
              },
              {
                label: 'Ideal Payment',
                onChange: (value: number) => mergeCarPaymentUpdate('idealPayment', value),
                value: carPayment.idealPayment,
              },
              {
                label: 'Total Owed',
                onChange: (value: number) => mergeCarPaymentUpdate('totalOwed', value),
                value: carPayment.totalOwed,
              },
              {
                label: 'Amount Paid This Month',
                onChange: (value: number) => mergeCarPaymentUpdate('amtPaidThisMonth', value),
                value: carPayment.amtPaidThisMonth,
              },
            ]}
            total={carAmtRemaining}
            totalTitle="Amount remaining"
          />
        </div>
      </Collapse>
    </div>
  );
};
