import HomeLayout from '@/components/layouts/_home';
import PoliticaDePrivacidad from '@/components/static-pages/PoliticaDePrivacidad';
import PoliticaDePrivacidadCa from '@/components/static-pages/PoliticaDePrivacidadCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const PoliticaDePrivacidadPage = () => {
  const { locale } = useRouter();

  return (
    <>
      {locale === 'es' ? <PoliticaDePrivacidad /> : <PoliticaDePrivacidadCa />}
    </>
  );
};

PoliticaDePrivacidadPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default PoliticaDePrivacidadPage;
