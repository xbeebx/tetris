export type SHAPE_TYPE = Array<Array<number | string>>;

export type SHAPE_DEF_TYPE = {
  shape: SHAPE_TYPE,
  color: string
}

export type SHAPES_TYPE = Record<number | string, SHAPE_DEF_TYPE>