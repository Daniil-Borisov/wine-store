import Seo from '@/components/seo/seo';
import { useRouter } from 'next/router';
import { getServerSideProps } from '@/framework/vinoteca.ssr';
import Vinoteca from '@/components/static-pages/vinoteca';
import { useEffect } from 'react';
import HomeLayout from '@/components/layouts/_home';
import { vinotecaPageSeo } from '@/components/seo/seoContent';

export { getServerSideProps };

const VinotecaPage = ({ vinotecaProduct }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (router.locale === 'ca') {
      router.push('/club-de-vins');
    }
  });
  return (
    <>
      <Seo
        noindex={false}
        nofollow={true}
        title={vinotecaPageSeo.title}
        description={vinotecaPageSeo.description}
      />
      <Vinoteca vinotecaProduct={vinotecaProduct} />
    </>
  );
};

VinotecaPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default VinotecaPage;
