import { useType } from '@/framework/type';
import dynamic from 'next/dynamic';
const ErrorMessage = dynamic(() => import('@/components/ui/error-message'));
const BannerShort = dynamic(() => import('@/components/banners/banner-short'));

const Banner: React.FC<{ layout: string; variables: any }> = ({
  layout,
  variables,
}) => {

  const { type, error } = useType(variables.type);
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <BannerShort banners={type?.banners} layout={layout} slug={type?.slug} />
  );
};

export default Banner;
