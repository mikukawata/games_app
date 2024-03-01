import React from 'react';
import styles from './style.module.css';

const ChooseBtn = () => {
  return (
    <div className={styles.container}>
      <button type='button' id='rock' className={styles.btn}>
        &#9994;
      </button>
      <button type='button' id='scissors' className={styles.btn}>
        &#9996;
      </button>
      <button type='button' id='paper' className={styles.btn}>
        &#128400;
      </button>
    </div>
  );
};

export default ChooseBtn;
