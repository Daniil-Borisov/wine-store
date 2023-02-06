import Scrollbar from '@/components/ui/scrollbar';
import Select from '@/components/ui/select/select';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsRTL } from '@/lib/locals';
interface Plan {
  id: number | string;
  key: string;
  label: string;
  value: string;
  order: string;
}
const plans: Plan[] = [
  {
    id: '1',
    key: 'sorting',
    label: 'sorting-default',
    value: '',
    order: '',
  },
  {
    id: '2',
    key: 'sorting',
    label: 'sorting-asc',
    value: 'name-asc',
    order: 'name-asc',
  },
  {
    id: '3',
    key: 'sorting',
    label: 'sorting-desc',
    value: 'name-desc',
    order: 'name-desc',
  },
  {
    id: '4',
    key: 'sorting',
    label: 'sorting-h-to-l',
    value: 'asc',
    order: 'price-asc',
  },
  {
    id: '5',
    key: 'sorting',
    label: 'sorting-l-to-h',
    value: 'desc',
    order: 'price-desc',
  },
];

type Props = {
  variant?: 'radio' | 'dropdown';
};

const Sorting: React.FC<Props> = ({ variant = 'radio' }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();
  const [selected, setSelected] = useState(
    () => plans.find((plan) => plan.order === router.query.order) ?? plans[0]
  );

  useEffect(() => {
    if (!router.query.order) {
      setSelected(plans[0]);
    }
  }, [router.query.order]);

  function handleChange(values: Plan) {
    const { order } = values;
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        order,
      },
    });
    setSelected(values);
  }

  return (
    <>
      {variant === 'dropdown' && (
        <Select
          defaultValue={selected}
          isRtl={isRTL}
          options={plans}
          isSearchable={false}
          // @ts-ignore
          onChange={handleChange}
        />
      )}
      {variant === 'radio' && (
        <Scrollbar style={{ maxHeight: '400px' }}>
          <RadioGroup value={selected} onChange={handleChange}>
            <RadioGroup.Label className="sr-only">
              {t('text-sort')}
            </RadioGroup.Label>
            <div className="space-y-4">
              {plans.map((plan) => (
                <RadioGroup.Option key={plan.id} value={plan}>
                  {({ checked }) => (
                    <>
                      <div className="flex w-full cursor-pointer items-center">
                        <span
                          className={`h-[18px] w-[18px] rounded-full bg-white ltr:mr-3 rtl:ml-3 ${
                            checked
                              ? 'border-[5px] border-gray-800'
                              : 'border border-gray-600'
                          }`}
                        />
                        <RadioGroup.Label as="p" className="text-sm text-body">
                          {t(plan.label)}
                        </RadioGroup.Label>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </Scrollbar>
      )}
    </>
  );
};

export default Sorting;
