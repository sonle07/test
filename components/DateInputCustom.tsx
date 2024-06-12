'use client'
import { DatePickerInput } from '@mantine/dates';
import { Controller, useForm } from 'react-hook-form';

export default function DateInputCustom() {
  const {
      control,
      setValue,
      getValues,
      setError,
    } = useForm({
      mode: 'onChange',
    });
  const validateDateInput = (
    fieldName: string,
    ) => {
      if (!getValues(fieldName)) {
        setError(fieldName, {
          message: 'This field is required',
          type: 'required',
        });
      }
    };
  return (<Controller
              name="blockedUntilDate"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
     <>
     <DatePickerInput
      value={value}
      onChange={(date) => onChange(date)}
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
       onBlur={() => validateDateInput('blockedUntilDate')}
       error={error?.type === 'required' && error?.message}
    />
     </>
  )}
/>
  );
}