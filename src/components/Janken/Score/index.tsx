import React from 'react';
import styles from './style.module.css';

const Score = () => {
  return (
    <div className={styles.score}>
      <p className={styles.title}>スコア</p>
      <div className={styles.container}>
        <p className={styles.number}>0</p>
        <p className={styles.hyphen}>-</p>
        <p className={styles.number}>0</p>
      </div>
    </div>
  );
};

export default Score;
