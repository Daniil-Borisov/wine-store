import cn from 'classnames';
import { avatarPlaceholder } from '@/lib/placeholders';
import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import isEmpty from 'lodash/isEmpty';
import { getIcon } from '@/lib/get-icon';
import * as socialIcons from '@/components/icons/social';

interface ManufacturerProps {
  item: any;
  className?: string;
}

const ManufacturerCard: React.FC<ManufacturerProps> = ({ item, className }) => {
  const { t } = useTranslation();

  return (
    <Link
      href={Routes.brand(item.id, item.name)}
      className={
        'relative flex h-[87px] cursor-pointer items-center justify-center rounded border border-gray-200 bg-white p-5 shadow-md'
      }
      title={item?.name}
    >
      <Image
        src={item?.carousel_image}
        alt={item?.name}
        width={'100%'}
        height={'100%'}
        objectFit="contain"
      />
    </Link>
  );
};

export default ManufacturerCard;
