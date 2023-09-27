import { NumberInput as NumInput } from '@mantine/core';

export const NumberInput = ({
  className,
  label = 'Number Field',
  onChange,
  placeholder,
  value,
}: {
  className?: string;
  label: string;
  onChange?: any;
  placeholder?: string;
  value: number;
}) => (
  <NumInput
    className={className}
    size="md"
    label={label}
    prefix="$"
    thousandSeparator=","
    hideControls
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
