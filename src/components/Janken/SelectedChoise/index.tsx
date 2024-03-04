import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  user: string;
  choise: string;
}

export const SelectedChoise: FC<Props> = ({ user, choise }) => {
  return (
    <>
      <div className={styles.item}>
        <p className={styles.player}>{user}</p>
        <div className={styles.choice}>{choise}</div>
      </div>
    </>
  );
};
