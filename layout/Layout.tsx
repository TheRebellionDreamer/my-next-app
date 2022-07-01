import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import LayoutProps from './Layout.props';
import { FC } from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}

function withLayout<T extends Record<string, unknown>>(Component: FC<T>) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}

export default withLayout;
