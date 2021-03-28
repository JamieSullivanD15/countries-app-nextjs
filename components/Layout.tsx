import styles from '../styles/Layout.module.scss';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        { children }
      </main>
    </div>
  </>
);

export default Layout;
