import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen container mx-auto px-4 md:px-8">
        <main>{children}</main>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
