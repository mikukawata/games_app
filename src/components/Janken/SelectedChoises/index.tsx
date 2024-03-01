import React from 'react';
import styles from './style.module.css';

export const SelectedChoises = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.player}>あなた</p>
        <div className={styles.choice}>&#9994;</div>
      </div>
      <div className={styles.item}>
        <p className={styles.player}>コンピュータ</p>
        <div className={styles.choice}>&#9994;</div>
      </div>
    </div>
  );
};
