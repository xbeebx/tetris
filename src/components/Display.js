import React from 'react';

// styled components
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
}

export default Display;