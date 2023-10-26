import { NumberInput as NumInput } from '@mantine/core';

export const NumberInput = ({
  className,
  label = 'Number Field',
  onChange,
  placeholder,
  prefix = '$',
  suffix = '',
  thousandSeparator = ',',
  value,
}: {
  className?: string;
  label: string;
  onChange?: any;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  thousandSeparator?: string;
  value: number;
}) => (
  <NumInput
    className={className}
    size="md"
    label={label}
    prefix={prefix}
    suffix={suffix}
    thousandSeparator={thousandSeparator}
    hideControls
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
