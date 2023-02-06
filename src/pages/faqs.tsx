import HomeLayout from '@/components/layouts/_home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq';

const FaqsPage = () => {
  const { locale } = useRouter();

  return (
    <div className="mx-auto max-w-[1440px]">
      <Accordion items={faq} translatorNS="faq" noTitle={false} />
    </div>
  );
};

FaqsPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'faq'])),
    },
  };
};

export default FaqsPage;
