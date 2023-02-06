import HomeLayout from '@/components/layouts/_home';
import QuienesSomos from '@/components/static-pages/QuienesSomos';
import QuienesSomosCa from '@/components/static-pages/QuienesSomosCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const QuienesSomosPage = () => {
  const { locale } = useRouter();

  return <>{locale === 'es' ? <QuienesSomos /> : <QuienesSomos />}</>;
};

QuienesSomosPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default QuienesSomosPage;
