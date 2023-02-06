import HomeLayout from '@/components/layouts/_home';
import AvisoLegal from '@/components/static-pages/AvisoLegal';
import AvisoLegalCa from '@/components/static-pages/AvisoLegalCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const AvisoLegalPage = () => {
  const { locale } = useRouter();

  return <>{locale === 'es' ? <AvisoLegal /> : <AvisoLegalCa />}</>;
};

AvisoLegalPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default AvisoLegalPage;
