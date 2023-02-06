import { useModalAction } from '@/components/ui/modal/modal.context';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import {
  useDeleteBillingAddress,
  useDeleteDeliveryAddress,
} from '@/framework/user';
import { Router, useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';

interface AddressesProps {
  addresses: any[] | undefined;
  label: string;
  className?: string;
  userId: string;
  onClick: void;
  type: string;
}

export const ProfileAddressGrid: React.FC<AddressesProps> = ({
  addresses,
  label,
  className,
  userId,
  type,
}) => {
  const { openModal } = useModalAction();
  const { t } = useTranslation('common');
  const router = useRouter();
  const { mutate: deleteAddress } = useDeleteDeliveryAddress();
  const { mutate: deleteBillingAddress } = useDeleteBillingAddress();
  const [userAtom] = useAtom(userData);

  //TODO: no address found
  function onAdd(type: any) {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      addressType: type,
    });
  }

  const onEdit = (address: any) => {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      defaultValue: address,
      addressType: type,
    });
  };

  const onDelete = (id: string, type: string) => {
    type === 'delivery'
      ? deleteAddress({
          address_id: id,
          token: userAtom.token,
          client: userId.id,
          language: router.locale,
          addressType: type,
        })
      : deleteBillingAddress({
          invoice_id: id,
          token: userAtom.token,
          client: userId.id,
          language: router.locale,
          addressType: type,
        });
  };

  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={false} label={label} type={type} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {addresses?.map((address) => (
          <AddressCard
            checked={false}
            address={address}
            userId={userId}
            key={address.id}
            onDelete={() => onDelete(address.id, type)}
            onEdit={() => onEdit(address)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProfileAddressGrid;
