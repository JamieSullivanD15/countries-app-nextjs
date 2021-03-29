import ArrowBack from '@material-ui/icons/ArrowBack';

import { useRouter } from 'next/router'
import Link from 'next/link';
import Nav from './Nav';
import Meta from './Meta';

import styles from '../../styles/Layout.module.scss';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  showBackBtn: boolean;
};

const Layout = ({ children, showBackBtn }: Props) => {
  const router = useRouter();

  return (
    <>
      <Meta />
      {
        showBackBtn
          ? (
            <span onClick={() => router.back()} className={styles.backBtn}>
              <ArrowBack />
              <span>Back</span>
            </span>
          )
          : ''
      }
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          { children }
        </main>
      </div>
    </>
  );
};

export default Layout;
