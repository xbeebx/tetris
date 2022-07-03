import React, { KeyboardEvent, useState } from 'react';

import { createStage, checkCollision } from '../GameHelpers';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// custom hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = (direction: number) => {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev: number) => prev + 1);
      // increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    }
    else {
      // game over
      if (player.pos.y < 1) {
        console.log('Game Over');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      // down arrow
      if (key === 'ArrowDown') {
        setDropTime(1000 / (level + 1) + 200);
      }
      // up arrow
      else if (key === 'ArrowUp') {
        playerRotate(stage, 1)
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      // left arrow
      if (key === 'ArrowLeft') {
        movePlayer(-1);
      }
      // right arrow
      else if (key === 'ArrowRight') {
        movePlayer(1);
      }
      // down arrow
      else if (key === 'ArrowDown') {
        dropPlayer();
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role='button'
      tabIndex={0}
      onKeyDown={move}
      onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={'Game Over'} />
          ) : (
            <div>
              <Display text={`Score: `} value={score} />
              <Display text={`Rows: `} value={rows} />
              <Display text={`Level: `} value={level} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;