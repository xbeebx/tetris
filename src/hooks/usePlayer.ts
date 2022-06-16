import { useCallback, useState } from 'react';
import { PLAYER_POS_TYPE, PLAYER_TYPE } from 'src/types/PlayerTypes';
import { SHAPE_TYPE } from 'src/types/ShapeTypes';
import { STAGE_TYPE } from 'src/types/StageTypes';
import { checkCollision, STAGE_WIDTH } from '../GameHelpers';

import { SHAPES, randomShape } from '../Shapes';

export const usePlayer = (): [player: PLAYER_TYPE, updatePlayerPos: Function, resetPlayer: Function, playerRotate: Function] => {
  const [player, setPlayer] = useState<PLAYER_TYPE>({
    pos: { x: 0, y: 0 },
    shape: SHAPES[0]?.shape,
    collided: false
  });

  const rotate = (shape: SHAPE_TYPE, direction: number) => {
    // make the rows to become cols
    const rotatedShape = shape.map((_, index) => {
      return shape.map((col) => {
        return col[index];
      });
    });

    // reverse each row to get a rotated shape
    if(direction > 0) {
      return rotatedShape.map((row) => row.reverse());
    }
    else {
      return rotatedShape.reverse();
    }
  }

  const playerRotate = (stage: STAGE_TYPE, direction: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.shape = rotate(clonedPlayer.shape, direction);

    const position = clonedPlayer.pos.x;
    let offset = 1;
    while(checkCollision(clonedPlayer, stage, {x: 0, y: 0})) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      // rotate the shape back if it would collide with something
      if(offset > clonedPlayer.shape[0].length) {
        rotate(clonedPlayer.shape, -direction);
        clonedPlayer.pos.x = position;
      }
    }

    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({x, y, collided}: PLAYER_POS_TYPE) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x + x), y: (prev.pos.y + y)},
      collided,
    }));
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
      shape: randomShape()?.shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}