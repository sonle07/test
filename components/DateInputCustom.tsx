'use client'
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

export default function DateInputCustom() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
      styles={{
        input: {
            caretColor: 'transparent',
            userSelect: 'none',
            touchAction: 'manipulation',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
        },
        }}
        onKeyDown={(e) => e.preventDefault()}
    />
  );
}