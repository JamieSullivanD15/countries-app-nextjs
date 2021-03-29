import ArrowBack from "@material-ui/icons/ArrowBack";

import styles from '../../styles/Layout.module.scss';

import Link from "next/link";
import Nav from './Nav';
import Meta from './Meta';
import Header from '../Header';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  showBackBtn: boolean;
};

const Layout = ({ children, showBackBtn }: Props) => {
  return (
    <>
      <Meta />
      <Nav />
      <Link href='/'>
      {
        showBackBtn
          ? (
            <span className={styles.backBtn}>
              <ArrowBack />Back
            </span>
          )
          : ''
      }
      </Link>
      <div className={styles.container}>
        <main className={styles.main}>
          {/*<Header />*/}
          { children }
        </main>
      </div>
    </>
  );
};

export default Layout;
