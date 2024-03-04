'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './style.module.css';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath === path;
  };

  const pages = [
    { name: 'じゃんけん', path: '/janken' },
    { name: '作成中', path: '#' },
    { name: '作成中', path: '#' },
    { name: '作成中', path: '#' },
    { name: '作成中', path: '#' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href='/' className={styles.link}>
          Game app
        </Link>
      </div>

      <div className={styles.links}>
        {pages.map((page, idx) => (
          <Link key={idx} href={page.path} className={`${styles.link} ${isActive(page.path) ? styles.active : ''}`}>
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
