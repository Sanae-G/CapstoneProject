import { Header } from '../PostCard/PostCard.styles';

function JournalHeader({color = '#FFD6BA', heading = 'Crazy Trip to Morocoo', period = '01.04 - 10.04.2022'}) {

    return (
        <Header color={color}>
            <h1>{heading}</h1>
            <p>{period}</p>
        </Header>
        );
  }
  
  export default JournalHeader;