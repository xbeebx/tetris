import { useState, useEffect, useMemo } from 'react';
import { CLEAR_SHAPE_CELL_VALUE, EMPTY_SHAPE_CELL, MERGED_SHAPE_CELL_VALUE } from 'src/Shapes';
import { PLAYER_TYPE } from 'src/types/PlayerTypes';
import { STAGE_TYPE } from 'src/types/StageTypes';

import { createStage, STAGE_WIDTH } from '../GameHelpers';

export const useStage = (player: PLAYER_TYPE, resetPlayer: Function): [stage: STAGE_TYPE, setStage: Function, rowsCleared: number] => {
  const [stage, setStage] = useState<STAGE_TYPE>(createStage());
  const [rowsCleared, setRowsCleared] = useState<number>(0);

  const pop = useMemo(() => new Audio(process.env.PUBLIC_URL + '/pop.mp3'), []);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: STAGE_TYPE) => {
      let removeCounter = 0;

      newStage.forEach((row, rowIndex) => {
        if (row.findIndex(cell => cell.type === '0') === -1) {
          setRowsCleared(prev => prev + 1);

          // remove the row with all filled cells
          newStage.splice(rowIndex, 1);

          removeCounter++;

          // add on top an empty row
          newStage.unshift(new Array<{type: string, status: string}>(STAGE_WIDTH).fill({ type: EMPTY_SHAPE_CELL, status: CLEAR_SHAPE_CELL_VALUE }));
        }
      })

      // play sound if there was mininum 1 line completly filled with blocks
      if(removeCounter > 0) {
        console.log('play sound!');
        pop.play();
      }
    }

    const updateStage = (prevStage: STAGE_TYPE): STAGE_TYPE => {
      // first flush the stage
      const newStage = prevStage.map((row) => {
        return (
          row.map((cell) => {
            return cell.status === CLEAR_SHAPE_CELL_VALUE ? { type: EMPTY_SHAPE_CELL, status: CLEAR_SHAPE_CELL_VALUE } : cell;
          })
        )
      });

      // draw the shape
      player.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== EMPTY_SHAPE_CELL) {
            const nextRow = newStage[y + player.pos.y];
            if (nextRow) {
              nextRow[x + player.pos.x] = {
                type: value,
                status: `${player.collided ? MERGED_SHAPE_CELL_VALUE : CLEAR_SHAPE_CELL_VALUE}`
              };
            }
          }
        });
      });

      // check collision
      if (player.collided) {
        resetPlayer();
        sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer, pop]);

  return [stage, setStage, rowsCleared];
}