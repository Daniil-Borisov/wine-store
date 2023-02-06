import ConfirmationCard from '@/components/ui/cards/confirmation';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteAddress } from '@/framework/user';
import { userData } from '@/store/user-atom';
import { useAtom } from 'jotai';

export default function AddressDeleteView() {
  const {
    data: { addressId },
  } = useModalState();

  const { closeModal } = useModalAction();
  const [user] = useAtom(userData);
  const { mutate: deleteAddressById, isLoading } = useDeleteAddress();
  function handleDelete() {
    if (!addressId) {
      return;
    }
    deleteAddressById({ id: addressId, token: user.token, client: user.id });
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={isLoading}
    />
  );
}
