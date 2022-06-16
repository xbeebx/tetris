import { PLAYER_TYPE } from "./types/PlayerTypes";
import { POSITION_TYPE } from "./types/PositionTypes";
import { STAGE_TYPE } from "./types/StageTypes";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = (): STAGE_TYPE => {
  // create an array with the dimension of height and width of the consts
  return (
    Array.from(Array(STAGE_HEIGHT), () => {
      return new Array(STAGE_WIDTH).fill([0, 'clear'])
    })
  )
}

export const checkCollision = (player: PLAYER_TYPE, stage: STAGE_TYPE, { x: moveX, y: moveY }: POSITION_TYPE) => {
  if (!player.shape) {
    return false;
  }

  // loop through the rows
  for (let y = 0; y < player.shape.length; y += 1) {
    // loop through the cells
    // TODO: fix ts error
    // @ts-ignore
    for (let x = 0; x < player.shape[y].length; x += 1) {
      // check if current cell is on a shape
      // TODO: fix ts error
      // @ts-ignore
      if (player.shape[y][x] !== 0) {
        if (
          // check if move is inside the game area height (y)
          // also stop on the bottom of the game area
          !stage[y + player.pos.y + moveY] ||
          // check if the move is inside the game area width (x)
          // TODO: fix ts error
          // @ts-ignore
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check if the cell is not setted to clear
          // TODO: fix ts error
          // @ts-ignore
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
}