import React from 'react';

// styled components
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton
      onClick={callback}>
      Start Game
    </StyledStartButton>
  )
}

export default StartButton;