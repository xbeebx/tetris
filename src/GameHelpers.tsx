import { CLEAR_SHAPE_CELL_VALUE, EMPTY_SHAPE_CELL } from "./Shapes";
import { PLAYER_TYPE } from "./types/PlayerTypes";
import { POSITION_TYPE } from "./types/PositionTypes";
import { STAGE_TYPE } from "./types/StageTypes";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = (): STAGE_TYPE => {
  // create an array with the dimension of height and width of the consts
  return (
    Array.from(Array(STAGE_HEIGHT), () => {
      return new Array(STAGE_WIDTH).fill({ type: EMPTY_SHAPE_CELL, status: CLEAR_SHAPE_CELL_VALUE })
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

    const shapeRow = player.shape[y];
    if (shapeRow) {
      for (let x = 0; x < shapeRow.length; x += 1) {
        // check if current cell is on a shape

        if (shapeRow[x] !== EMPTY_SHAPE_CELL) {
          const nextRow = stage[y + player.pos.y + moveY];
          if (
            // check if move is inside the game area height (y)
            // also stop on the bottom of the game area
            !nextRow ||
            // check if the move is inside the game area width (x)
            !nextRow[x + player.pos.x + moveX]
          ) {
            return true;
          }
          else {
            const nextCell = nextRow[x + player.pos.x + moveX];
            // check if the cell is not setted to clear
            if (nextCell && nextCell.status !== CLEAR_SHAPE_CELL_VALUE) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}