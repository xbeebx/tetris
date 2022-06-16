import React from 'react';

// styled components
import { StyledCell } from './styles/StyledCell';

import { SHAPES } from '../Shapes';
import { CellProps } from 'src/types/CellTypes';

const Cell = ({ type }: CellProps) => {
  return (
    <StyledCell
      type={type}
      color={SHAPES[type]?.color}/>
  )
}

export default React.memo(Cell);