import { useState } from "react";
import { Text, Title } from "@mantine/core";
import { NumberInput } from "../NumberInput";

export const Income = () => {
  const [job, updateJob] = useState(0);
  const [other, updateOther] = useState(0);

  return (
    <div>
      <Title order={2}>Income</Title>

      <NumberInput label="Job" onChange={updateJob} />
      <NumberInput label="Other Earnings" onChange={updateOther} />

      <Title order={3}>Total Income</Title>
      <Text>{job + other}</Text>
    </div>
  );
};
