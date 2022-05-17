import decoration from '../../images/decoration.png';
import styled from 'styled-components';

function JournalHeader({
  color = '#FFD6BA',
  heading = 'Exciting Trip to Morocoo',
  period = '01.04 - 10.04.2022',
}) {
  return (
    <Header color={color}>
      <StyledImg src={decoration} />
      <h1>{heading}</h1>
      <p>{period}</p>
    </Header>
  );
}

export default JournalHeader;

export const Header = styled.header`
  background-color: ${({ color }) => color};
  margin: 0;
  height: 9.7rem;
  width: 100vw;

  h1 {
    text-align: center;
    padding-top: 0;
    font-size: 1.5rem;
    color: #614124;
  }

  p {
    text-align: center;
    padding-top: 1rem;
    font-size: 1rem;
    padding-bottom: 5rem;
    color: #614124;
  }
`;

const StyledImg = styled.img`
  display: block;
  width: 10rem;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  opacity: 40%;
`;
