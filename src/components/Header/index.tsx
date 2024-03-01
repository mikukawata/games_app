import Link from 'next/link';
import React, { FC } from 'react';
import styles from './style.module.css';

const Header: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/janken' className={styles.link}>
        じゃんけん
      </Link>
      <Link href='#' className={styles.link}>
        ゲーム
      </Link>
      <Link href='#' className={styles.link}>
        ゲーム
      </Link>
      <Link href='#' className={styles.link}>
        ゲーム
      </Link>
      <Link href='#' className={styles.link}>
        ゲーム
      </Link>
    </nav>
  );
};

export default Header;
