import { FC } from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.css';
import LayoutProps from './Layout.props';
import { Sidebar } from './Sidebar';

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

function withLayout<T extends Record<string, unknown> & IAppContext>(Component: FC<T>) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
}

export default withLayout;
