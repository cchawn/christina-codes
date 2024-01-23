import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
};

const Layout = ({ children, showHeader = false, showFooter = true }: Props) => {
  return (
    <>
      <Meta />
      {showHeader && <Header />}
      <div className="min-h-screen container mx-auto px-4 md:px-8">
        <main>{children}</main>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
