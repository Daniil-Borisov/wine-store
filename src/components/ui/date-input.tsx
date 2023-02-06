import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Select from './select/select';

const yearArr = [];
for (let i = 2022; i > 1920; i--) {
  yearArr.push({ value: i, label: i });
}

const daysArr = (daysQty) => {
  const arr = Array.from({ length: daysQty }, (_, index) => ({
    label: index < 9 ? '0' + (index + 1) : index + 1,
    value: index + 1,
  }));
  return arr;
};

const DateSelect = ({ setDate }) => {
  const [daysQty, setDaysQty] = useState(31);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const { t } = useTranslation();
  const months = [
    {
      id: 1,
      label: t('january'),
      value: '01',
    },
    {
      id: 2,
      label: t('february'),
      value: '02',
    },
    {
      id: 3,
      label: t('march'),
      value: '03',
    },
    {
      id: 4,
      label: t('april'),
      value: '04',
    },
    {
      id: 5,
      label: t('may'),
      value: '05',
    },
    {
      id: 6,
      label: t('june'),
      value: '06',
    },
    {
      id: 7,
      label: t('july'),
      value: '07',
    },
    {
      id: 8,
      label: t('august'),
      value: '08',
    },
    {
      id: 9,
      label: t('september'),
      value: '09',
    },
    {
      id: 10,
      label: t('october'),
      value: '10',
    },
    {
      id: 11,
      label: t('november'),
      value: '11',
    },
    {
      id: 12,
      label: t('december'),
      value: '12',
    },
  ];

  useEffect(() => {
    if (day && month && year) {
      setDate(new Date(day.value + '/' + month.value + '/' + year.value));
    }
  }, [day, month, year]);

  return (
    <div className="flex gap-4">
      <div>
        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
          {t('day')}
        </label>
        <Select
          options={daysArr(daysQty)}
          onChange={(val: any) => setDay(val)}
          value={day}
          placeholder={t('day')}
        />
      </div>
      <div className={'flex-1'}>
        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
          {t('month')}
        </label>
        <Select
          options={months}
          value={month}
          onChange={(val: any) => setMonth(val)}
          placeholder={t('month')}
        />
      </div>
      <div className={'w-[30%]'}>
        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
          {t('year')}
        </label>
        <Select
          options={yearArr}
          value={year}
          onChange={(val: any) => setYear(val)}
          placeholder={t('year')}
        />
      </div>
    </div>
  );
};

export default DateSelect;
