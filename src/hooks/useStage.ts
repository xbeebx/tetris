import { useState, useEffect } from 'react';
import { PLAYER_TYPE } from 'src/types/PlayerTypes';
import { STAGE_TYPE } from 'src/types/StageTypes';

import { createStage } from '../GameHelpers';

export const useStage = (player: PLAYER_TYPE, resetPlayer: Function): [stage: STAGE_TYPE, setStage: Function, rowsCleared: number] => {
  const [stage, setStage] = useState<STAGE_TYPE>(createStage());
  const [rowsCleared, setRowsCleared] = useState<number>(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: STAGE_TYPE) => {
      return newStage.reduce((ack, row) => {
        // TODO: fix tserror
        // @ts-ignore
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          // TODO: fix tserror
          // @ts-ignore
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }

        // TODO: fix tserror
        // @ts-ignore
        ack.push(row);
        return ack;
      }, []);
    }

    const updateStage = (prevStage: STAGE_TYPE) => {
      // first flush the stage
      const newStage = prevStage.map((row) => {
        return (
          row.map((cell) => {
            // TODO: fix tserror
            // @ts-ignore
            return cell[1] === 'clear' ? [0, 'clear'] : cell;
          })
        )
      });

      // draw the shape
      player.shape?.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            // TODO: fix tserror
            // @ts-ignore
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ];
          }
        });
      });

      // check collision
      if (player.collided) {
        resetPlayer();
        // TODO: fix tserror
        // @ts-ignore
        return sweepRows(newStage);
      }

      return newStage;
    };

    // TODO: fix tserror
    // @ts-ignore
    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
}