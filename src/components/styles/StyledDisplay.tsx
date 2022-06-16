import { StyledDisplayProps } from 'src/types/DisplayTypes';
import styled from 'styled-components';

export const StyledDisplay = styled.div<StyledDisplayProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #27282c;
  min-height: 30px;
  width: 100%;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1rem;

  span {
    color: #999;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    padding-left: 4px;
    margin-left: auto;
  }
`;