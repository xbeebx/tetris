import { useCallback, useState } from 'react';
import { checkCollision, STAGE_WIDTH } from '../GameHelpers';

import { SHAPES, randomShape } from '../Shapes';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    shape: SHAPES[0].shape,
    collided: false
  });

  const rotate = (shape, direction) => {
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

  const playerRotate = (stage, direction) => {
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

  const updatePlayerPos = ({x, y, collided}) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x + x), y: (prev.pos.y + y)},
      collided,
    }));
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
      shape: randomShape().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}