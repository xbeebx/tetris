import styled from 'styled-components';

export const StyledStartButton = styled.a`
  position: relative;
  background: #27282c;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  padding: 10px 30px;
  transition: 0.5s;
  font-family: 'Poppins', sans-serif;
  background: #1e9bff;

  :hover {
    letter-spacing: 0.25rem;
    background: #1e9bff;
    color: #1e9bff;
    box-shadow: 0 0 25px #1e9bff;
    cursor: pointer;

    i::before {
      width: 20px;
      left: 20%;
    }

    i::after {
      width: 20px;
      left: 80%;
    }
  }

  ::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }

  span {
    position: relative;
    z-index: 1;
  }

  i {
    text-align: start;
    position: absolute;
    inset: 0;
    display: block;
  }

  i::before {
    content: '';
    position: absolute;
    top: -3.5px;
    left: 80%;
    width: 10px;
    height: 5px;
    border: 2px solid #1e9bff;
    background: #27282c;
    transform: translateX(-50%);
    transition: 0.5s;
  }

  i::after {
    content: '';
    position: absolute;
    bottom: -3.5px;
    left: 20%;
    width: 10px;
    height: 5px;
    border: 2px solid #1e9bff;
    background: #27282c;
    transform: translateX(-50%);
    transition: 0.5s;
  }
`;