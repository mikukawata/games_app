import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  msg: string;
}

const Result: FC<Props> = ({ msg }) => {
  return (
    <p className={styles.label}>
      結果:<span className={styles.result}>{msg}</span>
    </p>
  );
};

export default Result;
