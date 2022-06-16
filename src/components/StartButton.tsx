import React from 'react';
import { STARTBUTTON_TYPE } from 'src/types/StartButtonTypes';

// styled components
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }: STARTBUTTON_TYPE) => {
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