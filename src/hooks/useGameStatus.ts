import { useState, useEffect, useCallback } from 'react';

const linePoints = [40, 100, 300, 1200];

export const useGameStatus = (rowsCleared: number): [rows: number, setSore: Function, rows: number, setRows: Function, level: number, setLevel: Function] => {
  const [score, setScore] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);

  const calcScore = useCallback(() => {
    // only update score if some rows are cleared
    if (rowsCleared > 0) {
      setScore(pref => pref + (linePoints[rowsCleared - 1] || 0) * (level + 1));
      setRows(pref => pref + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
}