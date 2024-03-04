import Link from 'next/link';
import React, { FC } from 'react';
import styles from './style.module.css';

const Header: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href='/' className={styles.link}>
          Game app
        </Link>
      </div>

      <div className={styles.links}>
        <Link href='/janken' className={styles.link}>
          じゃんけん
        </Link>
        <Link href='#' className={styles.link}>
          作成中
        </Link>
        <Link href='#' className={styles.link}>
          作成中
        </Link>
        <Link href='#' className={styles.link}>
          作成中
        </Link>
        <Link href='#' className={styles.link}>
          作成中
        </Link>
      </div>
    </nav>
  );
};

export default Header;
