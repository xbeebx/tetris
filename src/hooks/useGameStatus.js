import { useState, useEffect, useCallback } from 'react';

const linePoints = [40, 100, 300, 1200];

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const calcScore = useCallback(() => {
    // only update score if some rows are cleared
    if (rowsCleared > 0) {
      setScore(pref => pref + linePoints[rowsCleared - 1] * (level + 1));
      setRows(pref => pref + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
}