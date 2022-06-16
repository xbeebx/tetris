import React from 'react';

// styled components
import { StyledStage } from './styles/StyledStage';

// components
import Cell from './Cell';
import { STAGE_TYPE } from 'src/types/StageTypes';

interface STAGE_PROP {
  stage: STAGE_TYPE
}

const Stage = ({ stage }: STAGE_PROP) => {
  return (
    <StyledStage
      width={stage[0]?.length || 0}
      height={stage.length}>
      {
        // loop though the rows
        stage.map((row) => {
          // loop though the cells
          return row.map((cell, x) => {
            // TODO: FIX type!
            // @ts-ignore
            return <Cell key={x} type={cell[0]} />;
          })
        })
      }
    </StyledStage>
  )
}

export default Stage;