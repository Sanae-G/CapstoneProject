import styled from 'styled-components';


function SortButton({chronological, setChronological}) {
  
  function handleChronology(){
    setChronological(!chronological)
  }

  console.log(chronological)

  return (
    <StyledButton onClick={handleChronology}>{chronological ? 'chronological' : 'anti-chronological'} </StyledButton>
  );
}

export default SortButton;

const StyledButton = styled.button`
margin: 1rem 45%;
`