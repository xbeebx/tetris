import React from 'react';

// styled components
import { StyledStage } from './styles/StyledStage';

// components
import Cell from './Cell';

const Stage = ({ stage }) => {
  return (
    <StyledStage
      width={stage[0].length}
      height={stage.length}>
      {
        // loop though the rows
        stage.map((row) => {
          // loop though the cells
          return row.map((cell, x) => {
            return <Cell key={x} type={cell[0]} />;
          })
        })
      }
    </StyledStage>
  )
}

export default Stage;