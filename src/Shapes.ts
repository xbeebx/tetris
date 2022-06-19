import { SHAPES_TYPE, SHAPE_DEF_TYPE } from "./types/ShapeTypes";

export const EMPTY_SHAPE_CELL = '0';
export const CLEAR_SHAPE_CELL_VALUE = 'clear';
export const MERGED_SHAPE_CELL_VALUE = 'merged';

export const NO_SHAPE = {
  shape: [[EMPTY_SHAPE_CELL]],
  color: '0, 0, 0'
};

const SHAPE_I = {
  shape: [
    [EMPTY_SHAPE_CELL, 'I', EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'I', EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'I', EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'I', EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL]
  ],
  color: '80, 227, 230'
};

const SHAPE_J = {
  shape: [
    [EMPTY_SHAPE_CELL, 'J', EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'J', EMPTY_SHAPE_CELL],
    ['J', 'J', EMPTY_SHAPE_CELL],
  ],
  color: '36, 59, 223'
};

const SHAPE_L = {
  shape: [
    [EMPTY_SHAPE_CELL, 'L', EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'L', EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'L', 'L'],
  ],
  color: '223, 173, 36'
};

const SHAPE_O = {
  shape: [
    ['O', 'O'],
    ['O', 'O'],
  ],
  color: '223, 217, 36'
};

const SHAPE_S = {
  shape: [
    [EMPTY_SHAPE_CELL, 'S', 'S'],
    ['S', 'S', EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
  ],
  color: '48, 211, 56'
};

const SHAPE_T = {
  shape: [
    [EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
    ['T', 'T', 'T'],
    [EMPTY_SHAPE_CELL, 'T', EMPTY_SHAPE_CELL],
  ],
  color: '132, 61, 198'
};

const SHAPE_Z = {
  shape: [
    ['Z', 'Z', EMPTY_SHAPE_CELL],
    [EMPTY_SHAPE_CELL, 'Z', 'Z'],
    [EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL, EMPTY_SHAPE_CELL],
  ],
  color: '227, 78, 78'
};

export const SHAPES: SHAPES_TYPE = {
  // zero as a string
  '0': NO_SHAPE,
  'I': SHAPE_I,
  'J': SHAPE_J,
  'L': SHAPE_L,
  'O': SHAPE_O,
  'S': SHAPE_S,
  'T': SHAPE_T,
  'Z': SHAPE_Z,
}

export const randomShape = (): SHAPE_DEF_TYPE => {
  // all possible shapes
  const shapes = 'IJLOSTZ';

  // get a random shape index
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)]

  // should not happen!
  if (randomShape === undefined) {
    return SHAPE_I;
  }

  // default shape should be never returned! Just for typescript.
  return SHAPES[randomShape] || SHAPE_I;
}