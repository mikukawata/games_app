import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  user: string;
  choise: string;
  active: boolean;
}

export const SelectedChoise: FC<Props> = ({ user, choise, active }) => {
  return (
    <>
      <div className={`${styles.item} ${active ? styles.active : styles.inactive}`}>
        <p className={styles.player}>{user}</p>
        <div className={styles.choice}>{choise}</div>
      </div>
    </>
  );
};
