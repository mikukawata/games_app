'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Result from '@/components/Janken/Result';
import ChooseBtn from '@/components/Janken/ChooseBtn';
import { NextPage } from 'next';
import { SelectedChoise } from '@/components/Janken/SelectedChoise';
import Score from '@/components/Janken/Score';

export interface Choise {
  value: string;
  emoji: string;
}

export interface Scores {
  yourScore: number;
  comScore: number;
}

const Janken: NextPage = () => {
  const [yourChoiseIdx, setYourChoiseIdx] = useState<number | undefined>();
  const [comChoiseIdx, setComChoiseIdx] = useState<number | undefined>();
  const [result, setResult] = useState<number>(3);
  const [active, setActive] = useState<boolean>(false);
  const [score, setScore] = useState<Scores>({ yourScore: 0, comScore: 0 });

  const resultMsg = ['あいこです。', '勝ちました 🎉', '負けました...', ''];
  const choices: Choise[] = [
    { value: 'rock', emoji: '✊' },
    { value: 'scissors', emoji: '✌️' },
    { value: 'paper', emoji: '🖐️' },
  ];
  const NUM_OF_CHOICES = 3;

  const playGame = (selectedValue: string) => {
    const nextIdx = choices.findIndex((choise) => choise.value === selectedValue);
    setYourChoiseIdx(nextIdx);

    const randomIdx = Math.floor(Math.random() * NUM_OF_CHOICES); // 0, 1, 2
    setComChoiseIdx(randomIdx);
    const calcResult = (randomIdx - nextIdx + NUM_OF_CHOICES) % NUM_OF_CHOICES;
    setResult(calcResult);

    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 800);

    setScore((prevScore) => {
      if (calcResult !== 0) {
        const player = calcResult === 1 ? 'yourScore' : 'comScore';
        return { ...prevScore, [player]: prevScore[player] + 1 };
      }
      return prevScore;
    });
  };

  return (
    <div className={styles.game}>
      <h1 className={styles.title}>じゃんけんゲーム</h1>

      <Score score={score} />
      <div className={styles.container}>
        <SelectedChoise user='あなた' choise={yourChoiseIdx ? choices[yourChoiseIdx].emoji : '✊'} active={active} />
        <SelectedChoise user='コンピュータ' choise={comChoiseIdx ? choices[comChoiseIdx].emoji : '✊'} active={active} />
      </div>

      <ChooseBtn playGame={playGame} />
      <Result msg={resultMsg[result]} />
    </div>
  );
};

export default Janken;
