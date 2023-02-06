import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { useModalState } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import {
  useGetCountries,
  useGetIp,
  useGetProvinces,
  useSetBillingAddress,
  useSetDeliveryAddress,
} from '@/framework/user';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';
import CustomSelect from '../ui/forms/select';

type FormValues = {
  title: string;
  city: string;
  state: string;
  zip: string;
  street_address: string;
  province_id: string;
  country_id: string;
  phone: string;
  name: string;
};

const addressSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  city: yup.string().required('error-city-required'),
  zip: yup.string().required('error-zip-required'),
  street_address: yup.string().required('error-street-required'),
  province_id: yup.string().required('error-provinces-required'),
  country_id: yup.string().required('error-required'),
});

export const AddressForm: React.FC<any> = ({
  defaultValues,
  onSubmit,
  isLoading,
  data,
}) => {
  const { t } = useTranslation('common');
  const { provinces } = useGetProvinces();
  const { countries } = useGetCountries();

  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      className="grid h-full grid-cols-2 gap-5"
      //@ts-ignore
      // validationSchema={addressSchema}
      useFormProps={{
        shouldUnregister: true,
        defaultValues: {
          name: data.contact_name,
          city: data.city,
          zip: data.zipcode,
          phone: data.phone,
          country_id: data.country_id,
          province_id: data.province_id,
          street_address: data.address,
        },
      }}
      resetValues={{}}
    >
      {({ control, register, formState: { errors } }) => (
        <>
          <Input
            className="col-span-2"
            label={t('text-name')}
            {...register('name')}
            error={t(errors.name?.message!)}
            variant="outline"
          />

          <Input
            label={t('text-city')}
            {...register('city')}
            error={t(errors.city?.message!)}
            variant="outline" 
          />

          <Input
            label={t('text-zip')}
            {...register('zip')}
            error={t(errors.zip?.message!)}
            variant="outline"
          />

          <Input
            className="col-span-2"
            label={t('text-phone')}
            {...register('phone')}
            error={t(errors.phone?.message!)}
            variant="outline"
          />

          <CustomSelect
            options={countries}
            control={control}
            label={t('text-country')}
            {...register('country_id')}
            defaultValue={data.country_id}
          />

          <CustomSelect
            options={provinces}
            control={control}
            label={t('text-province')}
            {...register('province_id')}
            defaultValue={data.province_id}
          />

          <TextArea
            label={t('text-street-address')}
            {...register('street_address')}
            error={t(errors.street_address?.message!)}
            variant="outline"
            className="col-span-2"
          />

          <Button
            className="col-span-2 w-full"
            loading={isLoading}
            // disabled={isLoading}
          >
            {Boolean(defaultValues) ? t('text-update') : t('text-save')}{' '}
            {t('text-address')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default function CreateOrUpdateAddressForm({ data }) {
  const { t } = useTranslation('common');
  const {
    data: { customerId, address, type },
  } = useModalState();
  const { mutate: updateDeliveryAddress } = useSetDeliveryAddress();
  const { mutate: updateBillingAddress } = useSetBillingAddress();
  const [userAtom] = useAtom(userData);
  const { ip } = useGetIp();
  console.log(data);

  function onSubmit(values: FormValues) {
    const formattedInput = {
      token: userAtom.token,
      client: userAtom.id,
      name: values.name,
      email: userAtom.email,
      cif: userAtom.nif,
      ip: ip,
      city: values.city,
      wine_cellar: values.type === '0' ? '1' : '0',
      is_billing: Number(values.type),
      zipcode: values.zip,
      address: values.street_address,
      province_id: values.province_id,
      country_id: values.country_id,
      phone: values.phone,
      address_id: data?.defaultValue?.id ?? '',
    };
    data?.addressType === 'billing'
      ? updateBillingAddress({
          ...formattedInput,
        })
      : updateDeliveryAddress({
          ...formattedInput,
        });
  }
  return (
    <div className="min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-4 text-center text-lg font-semibold text-heading sm:mb-6">
        {address ? t('text-update') : t('text-add-new')} {t('text-address')}
      </h1>
      <AddressForm onSubmit={onSubmit} data={data.defaultValue ?? {}} />
    </div>
  );
}
