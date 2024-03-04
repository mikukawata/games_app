import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  user: string;
  choice: string;
  active: boolean;
}

export const SelectedChoice: FC<Props> = ({ user, choice, active }) => {
  return (
    <>
      <div className={`${styles.item} ${active ? styles.active : styles.inactive}`}>
        <p className={styles.player}>{user}</p>
        <div className={styles.choice}>{choice}</div>
      </div>
    </>
  );
};
