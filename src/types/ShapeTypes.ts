export type SHAPE_TYPE = Array<Array<string>>;

export type SHAPE_DEF_TYPE = {
  shape: SHAPE_TYPE,
  color: string
}

export type SHAPES_TYPE = Record<string, SHAPE_DEF_TYPE>