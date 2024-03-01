'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Score from '@/components/Janken/Score';
import Result from '@/components/Janken/Result';
import ChooseBtn from '@/components/Janken/ChooseBtn';
import { NextPage } from 'next';

const RockPaperScissors: NextPage = () => {
  // const choices = ['\u{270A}', '\u{270C}', '\u{1F590}'];
  // const comChoice = choices[Math.floor(Math.random() * 3)];

  return (
    <div className={styles.game}>
      <h1 className={styles.game__title}>じゃんけんゲーム</h1>

      <Score />

      <div className={styles.game__container}>
        <div className={styles.game__item}>
          <p className={styles.game__player}>あなた</p>
          <div className={styles.game__choice}>&#9994;</div>
        </div>
        <div className={styles.game__item}>
          <p className={styles.game__player}>コンピュータ</p>
          <div className={styles.game__choice}>&#9994;</div>
        </div>
      </div>

      <ChooseBtn />
      <Result />
    </div>
  );
};

export default RockPaperScissors;
