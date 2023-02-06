import Footer from './footer';
import Header from './header';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';

const SiteLayoutWithFooter: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      {<Header layout={'default'} />}
      {children}
      <MobileNavigation />
      <Footer />
    </div>
  );
};
export const getLayoutWithFooter = (page: React.ReactElement) => (
  <SiteLayoutWithFooter>{page}</SiteLayoutWithFooter>
);
export default SiteLayoutWithFooter;
