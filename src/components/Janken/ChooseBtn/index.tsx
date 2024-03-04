import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  playGame: (selectedValue: string) => void;
}

const ChooseBtn: FC<Props> = ({ playGame }) => {
  return (
    <div className={styles.container}>
      <button type='button' onClick={() => playGame('rock')} className={styles.btn}>
        &#9994;
      </button>
      <button type='button' onClick={() => playGame('scissors')} className={styles.btn}>
        &#9996;
      </button>
      <button type='button' onClick={() => playGame('paper')} className={styles.btn}>
        &#128400;
      </button>
    </div>
  );
};

export default ChooseBtn;
