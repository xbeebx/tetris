import React from 'react';

// styled components
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton
      onClick={callback}>
      <span>
        Start
      </span>
      <i></i>
    </StyledStartButton>
  )
}

export default StartButton;