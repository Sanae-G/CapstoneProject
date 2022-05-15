import styled from 'styled-components';
import ChronologicalOrderIcon from '../icons/chronological';
import AntichronologicalOrderIcon from '../icons/antichronological';

function SortButton({ chronological, setChronological }) {
  function handleChronology() {
    setChronological(!chronological);
  }

  console.log(chronological);

  return (
    <StyledButton onClick={handleChronology}>
      {chronological ? <ChronologicalOrderIcon /> : <AntichronologicalOrderIcon />}{' '}
    </StyledButton>
  );
}

export default SortButton;

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    width: auto;
    height: 2.5rem;
  }
`;
