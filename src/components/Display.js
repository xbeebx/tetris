import React from 'react';
import { useSpring, animated } from 'react-spring';

// styled components
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text, value }) => {
  const props = useSpring({
    to:
    {
      value: value || 0,
    }
  })

  return (
    <StyledDisplay
      gameOver={gameOver}>
      {text}

      {/* animate the value */}
      {!gameOver &&
        <animated.span>{props.value.to(val => Math.floor(val))}</animated.span>
      }
    </StyledDisplay>
  )
}

export default Display;