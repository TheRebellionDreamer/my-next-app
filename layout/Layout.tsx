import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import LayoutProps from './Layout.props';
import styles from './Layout.module.css';
import { FC } from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
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
