'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Score from '@/components/Janken/Score';
import Result from '@/components/Janken/Result';
import ChooseBtn from '@/components/Janken/ChooseBtn';
import { NextPage } from 'next';
import { SelectedChoises } from '@/components/Janken/SelectedChoises';

const RockPaperScissors: NextPage = () => {
  // const choices = ['\u{270A}', '\u{270C}', '\u{1F590}'];
  // const comChoice = choices[Math.floor(Math.random() * 3)];

  return (
    <div className={styles.game}>
      <h1 className={styles.title}>じゃんけんゲーム</h1>

      <Score />
      <SelectedChoises />
      <ChooseBtn />
      <Result />
    </div>
  );
};

export default RockPaperScissors;
