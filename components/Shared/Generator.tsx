import { Text, Title } from '@mantine/core';
import styles from './Layout.module.css';
import { NumberInput } from './NumberInput';

interface Field {
  label: string;
  onChange?: any;
  value: number;
}

export const Generator = ({
  fields,
  sectionTitle,
  total,
}: {
  fields: Field[];
  sectionTitle: string;
  total: number;
}) => (
  <div className={styles.section}>
    <Title order={4}>{sectionTitle}</Title>
    {fields.map((field) => (
      <NumberInput
        key={`${sectionTitle}-${field.label}`}
        className={styles.input}
        label={field.label}
        onChange={field.onChange}
        value={Number(field.value.toFixed(2))}
      />
    ))}
    <Title order={4}>Total</Title>
    <Text>{Number(total.toFixed(2))}</Text>
  </div>
);
