import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 0 20px;

    div {
      min-width: 200px;
    }
  }
`;