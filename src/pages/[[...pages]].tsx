import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import { useWindowSize } from '@/lib/use-window-size';
import { getStaticPaths, getStaticProps } from '@/framework/home-pages.ssr';
import { mainPageSeo } from '@/components/seo/seoContent';

export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);
const Classic = dynamic(() => import('@/components/layouts/classic'));

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ variables }) => {
  const { query } = useRouter();
  const { width } = useWindowSize();

  return (
    <>
      <Seo
        noindex={false}
        nofollow={false}
        title={mainPageSeo.title}
        description={mainPageSeo.description}
      />
      <Classic variables={variables} />
      {width > 1023 && <CartCounterButton />}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default Home;
