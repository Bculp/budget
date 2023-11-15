'use client';

import { Button, NativeSelect } from '@mantine/core';
import { useState } from 'react';

export const NewMonth = ({ data }) => {
  const [value, setValue] = useState('');

  return (
      <div>
        <h2>Add New Month</h2>
        <NativeSelect
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          label="Select Previous Month"
          data={data}
        />;
        <Button component="a" href={`/month?prevMonth=${value}`}>
          New Month
        </Button>
      </div>
    );
};
