import { SHAPE_TYPE } from "./ShapeTypes"

export type PLAYER_POS_TYPE = {
  x: number,
  y: number
  collided: boolean,
}

export type PLAYER_TYPE = {
  pos: { x: number, y: number },
  shape: SHAPE_TYPE,
  collided: boolean,
}