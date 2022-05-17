import { useEffect, useState } from 'react';
import ScrollUpIcon from '../icons/scrollUp';
import styled from 'styled-components';

function ScrollUpButton() {
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setButtonState(true);
      } else {
        setButtonState(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    buttonState && (
      <StyledButton onClick={scrollUp}>
        <ScrollUpIcon />
      </StyledButton>
    )
  );
}

export default ScrollUpButton;

const StyledButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 10px;
  height: 50px;
  width: 50px;
  background: none;
  border: none;
  cursor: pointer;
`;
