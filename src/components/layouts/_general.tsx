import MobileNavigation from './mobile-navigation';
import HeaderMinimal from '@/components/layouts/header-minimal';
import Footer from '@/components/layouts/footer';

export default function GeneralLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout?: string }>) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      <HeaderMinimal layout={layout} />
      {children}
      <Footer />
      {/* <MobileNavigation /> */}
    </div>
  );
}

export const getGeneralLayout = (page: React.ReactElement) => (
  <GeneralLayout layout={page.props.layout}>
    {page}
    <MobileNavigation />
  </GeneralLayout>
);
