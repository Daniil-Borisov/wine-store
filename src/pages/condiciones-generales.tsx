import HomeLayout from '@/components/layouts/_home';
import CondicionesGenerales from '@/components/static-pages/CondicionesGenerales';
import CondicionesGeneralesCa from '@/components/static-pages/CondicionesGeneralesCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const CondicionesGeneralesPage = () => {
  const { locale } = useRouter();

  return (
    <>
      {locale === 'es' ? <CondicionesGenerales /> : <CondicionesGeneralesCa />}
    </>
  );
};

CondicionesGeneralesPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default CondicionesGeneralesPage;
