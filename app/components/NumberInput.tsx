import { NumberInput as NumInput } from "@mantine/core";

export const NumberInput = ({
  label = "Number Field",
  onChange,
  placeholder,
}: {
  label: string;
  onChange: any;
  placeholder?: string;
}) => (
  <NumInput
    size="md"
    label={label}
    prefix="$"
    thousandSeparator=","
    hideControls
    placeholder={placeholder}
    onChange={onChange}
  />
);
