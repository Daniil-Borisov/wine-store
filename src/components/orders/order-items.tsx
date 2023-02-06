import { Table } from '@/components/ui/table';
import usePrice from '@/lib/use-price';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { useModalAction } from '@/components/ui/modal/modal.context';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { getReview } from '@/lib/get-review';

//FIXME: need to fix this usePrice hooks issue within the table render we may check with nested property
const OrderItemList = (product: any) => {
  return (
    <div className="flex items-center">
      {/*<div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded">*/}
      {/*  <Image*/}
      {/*    src={record.image?.thumbnail ?? productPlaceholder}*/}
      {/*    className="h-full w-full object-cover"*/}
      {/*    layout="fill"*/}
      {/*  />*/}
      {/*</div>*/}

      <div className="flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4">
        <div className="mb-1 flex space-x-1 rtl:space-x-reverse">
          <Link
            href={Routes.product(product.id, product.name)}
            className="inline-block overflow-hidden truncate text-body transition-colors hover:text-accent hover:underline"
          >
            {product.name}
          </Link>
        </div>
        <span className="mb-1 inline-block overflow-hidden truncate text-sm font-semibold text-accent">
          {product.price}
        </span>
      </div>
    </div>
  );
};
const OrderQuantity = (product: any) => {
  return <p className="text-base">{product.quantity}</p>;
};
export const OrderItems = ({
  products,
  orderId,
}: {
  products: any;
  orderId: any;
}) => {
  const { t } = useTranslation('common');
  const { alignLeft, alignRight } = useIsRTL();
  const { openModal } = useModalAction();

  const orderTableColumns = [
    {
      title: <span className="ltr:pl-20 rtl:pr-20">{t('text-item')}</span>,
      dataIndex: '',
      key: 'items',
      align: alignLeft,
      width: 250,
      ellipsis: true,
      render: OrderItemList,
    },

    {
      title: t('text-quantity'),
      dataIndex: '',
      key: 'pivot',
      align: 'center',
      width: 100,
      render: function OrderQuantity(product: any) {
        return <p className="text-base">{product.quantity}</p>;
      },
    },
    {
      title: t('text-price'),
      dataIndex: '',
      key: 'price',
      align: 'center',
      width: 100,
      render: function OrderQuantity(product: any) {
        return <p className="text-base">{product.price}</p>;
      },
    },
    {
      title: '',
      dataIndex: '',
      align: alignRight,
      width: 140,
      // render: function RenderReview(_: any, record: any) {
      //   function openReviewModal() {
      //     openModal('REVIEW_RATING', {
      //       product_id: record.id,
      //       shop_id: record.shop_id,
      //       order_id: orderId,
      //       name: record.name,
      //       image: record.image,
      //       my_review: getReview(record),
      //       ...(record.pivot?.variation_option_id && {
      //         variation_option_id: record.pivot?.variation_option_id,
      //       }),
      //     });
      //   }
      //
      //   return (
      //     <button
      //       onClick={openReviewModal}
      //       className="cursor-pointer text-sm font-semibold text-body transition-colors hover:text-accent"
      //     >
      //       {getReview(record)
      //         ? t('text-update-review')
      //         : t('text-write-review')}
      //     </button>
      //   );
      // },
    },
  ];

  return (
    <Table
      //@ts-ignore
      columns={orderTableColumns}
      data={products}
      // rowKey={(record: any) =>
      //   record.pivot?.variation_option_id
      //     ? record.pivot.variation_option_id
      //     : record.created_at
      // }
      className="orderDetailsTable w-full"
      rowClassName="!cursor-auto"
      scroll={{ x: 350, y: 500 }}
    />
  );
};
