import React from 'react';

// styled components
import { StyledCell } from './styles/StyledCell';

import { SHAPES } from '../Shapes';

const Cell = ({ type }) => {
  return (
    <StyledCell
      type={type}
      color={SHAPES[type].color}/>
  )
}

export default React.memo(Cell);