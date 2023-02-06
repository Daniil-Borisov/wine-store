import CheckboxGroup from './checkbox-group';
import { useState, useEffect, useMemo } from 'react';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useTranslation } from 'react-i18next';
import { useCategories } from '@/framework/category';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';

interface Props {
  categories: any[];
  brands: boolean;
}

const CategoryFilterView = ({ categories = [], brands }: Props) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const selectedValues = useMemo(() => {
    if (!brands) {
      return router.query.category
        ? (router.query.category as string).split(',')
        : [];
    }
    return router.query.brand ? (router.query.brand as string).split(',') : [];
  }, [router.query.category, router.query.brand]);
  const [state, setState] = useState<string[]>(() => selectedValues);
  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  function handleChange(values: string[]) {
    if (!values.length) {
      return;
    }

    if (brands) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          brand: values[1] ?? values[0],
        },
      });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: values[1] ?? values[0],
        name: router.query.name,
      },
    });
  }

  return (
    <div className="relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">{t('text-categories')}</span>
        <div className="grid grid-cols-1 gap-4">
          <CheckboxGroup values={state} onChange={handleChange}>
            {categories &&
              categories.map((plan) => (
                <Checkbox
                  key={plan.id}
                  label={plan.name}
                  name={plan.name}
                  value={plan.id}
                  theme="secondary"
                />
              ))}
          </CheckboxGroup>
        </div>
      </Scrollbar>
    </div>
  );
};

const CategoryFilter: React.FC<{
  type?: any;
  categories?: any;
  brands?: boolean;
}> = ({ type, categories, brands }) => {
  const { query, locale } = useRouter();

  // @ts-ignore
  return <CategoryFilterView categories={categories} brands={brands} />;
};

export default CategoryFilter;
