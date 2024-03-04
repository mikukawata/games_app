import React, { FC } from 'react';
import styles from './style.module.css';
import { Scores } from '@/app/janken/page';

interface Props {
  score: Scores;
}

const Score: FC<Props> = ({ score }) => {
  return (
    <div className={styles.score}>
      <p className={styles.title}>スコア</p>
      <div className={styles.container}>
        <p className={styles.number}>{score.yourScore}</p>
        <p className={styles.hyphen}>-</p>
        <p className={styles.number}>{score.comScore}</p>
      </div>
    </div>
  );
};

export default Score;
