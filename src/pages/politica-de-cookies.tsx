import HomeLayout from '@/components/layouts/_home';
import PoliticaDeCookies from '@/components/static-pages/PoliticaDeCookies';
import PoliticaDeCookiesCa from '@/components/static-pages/PoliticaDeCookiesCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const PoliticaDeCookiesPage = () => {
  const { locale } = useRouter();

  return (
    <>{locale === 'es' ? <PoliticaDeCookies /> : <PoliticaDeCookiesCa />}</>
  );
};

PoliticaDeCookiesPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default PoliticaDeCookiesPage;
