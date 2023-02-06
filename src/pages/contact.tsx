import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
import { getLayout } from '@/components/layouts/layout';
import { formatAddress } from '@/lib/format-address';
import { getIcon } from '@/lib/get-icon';
import isEmpty from 'lodash/isEmpty';
import * as socialIcons from '@/components/icons/social';
import Seo from '@/components/seo/seo';
import { useSettings } from '@/framework/settings';
export { getStaticProps } from '@/framework/general.ssr';

export const ContactPage = () => {
  const { t } = useTranslation('common');
  // const { settings } : any = useSettings();
  return (
    <>
      <Seo title={'Contact'} url={'contact'} />
    </>
  );
};
ContactPage.getLayout = getLayout;
export default ContactPage;
