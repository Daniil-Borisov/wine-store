import { useGetCountries, useGetProvinces } from '@/framework/user';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

interface AddressProps {
  address: any;
  onEdit?: () => void;
  onDelete?: () => void;
  userId?: any;
  checked?: boolean;
}
const AddressCard: React.FC<AddressProps> = ({
  address,
  userId,
  onEdit,
  onDelete,
  checked,
}) => {
  const { t } = useTranslation();
  const { provinces } = useGetProvinces();
  const { countries } = useGetCountries();

  const chooseLabel = (arr: any, id: string) => {
    if (!arr) return;
    const current = arr.filter((el) => el.value === id);
    return current[0]?.label;
  };

  return (
    <div
      className={classNames(
        'group relative cursor-pointer rounded border p-4 hover:border-accent',
        {
          'border-accent shadow-sm ': checked,
        }
      )}
    >
      {/* <p className="mb-3 text-sm font-semibold capitalize text-heading">
        {address?.name}
      </p> */}
      <p className="mb-3 text-sm font-semibold capitalize text-heading">
        {address.contact_name
          ? address.contact_name
          : userId?.name + ' ' + userId?.surname}
      </p>
      <p className="mb-1 text-sm text-sub-heading">{address.address}</p>
      <p className="mb-1 text-sm text-sub-heading">{address?.city}</p>
      <p className="mb-1 text-sm text-sub-heading">{address?.zipcode}</p>
      <p className="mb-1 text-sm text-sub-heading">
        {chooseLabel(provinces, address.province_id)}
      </p>
      <p className="mb-1 text-sm text-sub-heading">
        {chooseLabel(countries, address.country_id)}
      </p>
      <p className="mb-3 text-sm font-semibold capitalize text-heading">
        {address?.phone}
      </p>
      {/* <p className="mb-3 text-sm font-semibold text-heading">{userId?.email}</p> */}
      <div className="flex flex-col items-center pt-6">
        <button
          className="mx-auto rounded border-[1px] border-accent px-10 py-2.5 text-accent"
          onClick={onEdit}
        >
          Editar
        </button>
        <button onClick={onDelete} className="mt-4 text-gray-400">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
