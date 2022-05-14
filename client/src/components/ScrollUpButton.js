// import styled from 'styled-components';
import { useEffect, useState } from 'react';

function ScrollUpButton() {
  const [buttonState, setButtonState] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) {
        setButtonState(true);
      } else {
        setButtonState(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (

    buttonState && (
      <button style={{
        position: 'fixed',
        bottom: '80px',
        left: '50px',
        height: '50px',
        width: '50px'
      }} onClick={scrollUp}>Up</button>
    )
   
    
    )
}

export default ScrollUpButton;
