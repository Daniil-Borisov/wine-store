import React from 'react';
import Select, { classNames } from 'react-select';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

const CustomSelect = ({ label, name, control, options, defaultValue }: any) => {
  const { t } = useTranslation();
  const defVal =
    defaultValue &&
    options.filter((option) => {
      return option.value == defaultValue;
    });

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <Select
              options={options}
              placeholder={t('select-placeholder')}
              onChange={(value) => onChange(value.value)}
              onBlur={onBlur}
              defaultValue={defVal}
              className="react-select"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: '0 !important',
                  borderColor: 'rgb(var(--color-border-base)) !important',
                  '&:hover': {
                    borderColor: 'rgb(var(--color-border-base)) !important',
                  },
                }),
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default CustomSelect;
