import SubscriptionForm from '@/components/settings/subscription-form';
import { useSubscription } from '@/framework/settings';
import { Trans, useTranslation } from 'next-i18next';

type SubscribeToNewsletterProps = {
  title: string;
  description?: string;
};
export default function SubscribeToNewsletter({
  title,
  description,
}: SubscribeToNewsletterProps) {
  const { t } = useTranslation('common');
  const {
    mutate: subscribe,
    isLoading: loading,
    isSubscribed,
  } = useSubscription();

  function onSubmit({ email }: { email: string }) {
    subscribe({ email });
  }
  return (
    <div className="w-full items-center justify-between px-4 py-6 xl:flex xl:px-20">
      <div className="xl:w-[45%]">
        <h3 className="mb-1 text-left text-xl font-semibold text-light xl:text-left">
          {t(title)}
        </h3>
        <Trans
          t={t}
          components={{
            strong: <strong />,
            p: <span className={' text-left text-light xl:text-xl '} />,
          }}
        >
          {t(description!)}
        </Trans>
      </div>
      <SubscriptionForm
        onSubmit={onSubmit}
        loading={loading}
        success={isSubscribed}
      />
    </div>
  );
}
