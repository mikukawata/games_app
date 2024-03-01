import React from 'react';
import styles from './style.module.css';
const Result = () => {
  return (
    <p className={styles.label}>
      結果:<span className={styles.result}></span>
    </p>
  );
};

export default Result;
