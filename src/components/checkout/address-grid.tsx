import { useModalAction } from '@/components/ui/modal/modal.context';
import { RadioGroup } from '@headlessui/react';
import { useAtom, WritableAtom } from 'jotai';
import { useEffect } from 'react';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import type { Address } from '@/types';
import {
  useDeleteBillingAddress,
  useDeleteDeliveryAddress,
} from '@/framework/user';
import { userData } from '@/store/user-atom';
import { useRouter } from 'next/router';

interface AddressesProps {
  addresses: Address[] | undefined | null;
  label: string;
  atom: WritableAtom<Address | null, Address>;
  className?: string;
  userId: string;
  count: number;
  type: string;
}

export const AddressGrid: React.FC<AddressesProps> = ({
  addresses,
  label,
  atom,
  className,
  userId,
  count,
  type,
}) => {
  const { t } = useTranslation('common');
  const [selectedAddress, setAddress] = useAtom(atom);
  const { openModal } = useModalAction();
  const { mutate: deleteAddress } = useDeleteDeliveryAddress();
  const { mutate: deleteBillingAddress } = useDeleteBillingAddress();
  const [userAtom] = useAtom(userData);
  const router = useRouter();

  useEffect(() => {
    if (addresses?.length) {
      if (selectedAddress?.id) {
        const index = addresses.findIndex((a) => a.id === selectedAddress.id);
        setAddress(addresses[index]);
      } else {
        setAddress(addresses?.[0]);
      }
    }
  }, [addresses, addresses?.length, selectedAddress?.id, setAddress]);

  function onAdd() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      addressType: type,
    });
  }
  function onEdit(address: any, type: string) {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      defaultValue: address,
      addressType: type,
    });
  }
  const onDelete = (id: string, type: string) => {
    type === 'delivery'
      ? deleteAddress({
          address_id: id,
          token: userAtom.token,
          client: userAtom.id,
          language: router.locale,
          addressType: type,
        })
      : deleteBillingAddress({
          invoice_id: id,
          token: userAtom.token,
          client: userAtom.id,
          language: router.locale,
          addressType: type,
        });
  };

  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={count} label={label} />
      {!addresses?.length ? (
        ''
      ) : (
        <RadioGroup value={selectedAddress} onChange={setAddress}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <div className="flex w-full flex-wrap gap-4">
            {addresses?.map((address, idx) => (
              <div className="w-full max-w-[417px] md:w-[48%]" key={idx}>
                <RadioGroup.Option value={address}>
                  {({ checked }: { checked: boolean }) => (
                    <AddressCard
                      checked={checked}
                      onDelete={() => onDelete(address.id, type)}
                      onEdit={() => onEdit(address, type)}
                      address={address}
                    />
                  )}
                </RadioGroup.Option>
              </div>
            ))}
          </div>
        </RadioGroup>
      )}
    </div>
  );
};
export default AddressGrid;
