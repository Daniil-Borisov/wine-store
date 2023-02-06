import HomeLayout from '@/components/layouts/_home';
import QueEs from '@/components/static-pages/QueEs';
import QueEsCa from '@/components/static-pages/QueEsCa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const QueEsPage = () => {
  const { locale } = useRouter();

  return <>{locale === 'es' ? <QueEs /> : <QueEsCa />}</>;
};

QueEsPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default QueEsPage;
