import henna from '../../images/henna.png';
import { P2, 
    TextBox, Container,
    TagBox, Tag, DateBox, PlaceBox, Section, FlexBox} from './PostCard.styles';
import AdressIcon from '../../icons/adress';

function PostCard({moments}) {

    return (
        <ul>
        {moments && moments.map((moment) => (
            <Container key={moment.id}>
            <DateBox>
                <div></div>
                <h2>{moment.date}</h2>
                <div></div>
            </DateBox>
            <P2>{moment.day}</P2>
            <h3>{moment.title}</h3>
            <img src={henna} alt="henna" />
            <TextBox>
            <p>{moment.text}</p>
            </TextBox>
            <FlexBox>
            <Section >
                <TagBox>
                <li>
                <Tag bg='#E6F3C1'><p>{moment.tag1}</p></Tag>
                </li>
                <li>
                <Tag bg='#BEE48E'><p>{moment.tag2}</p></Tag>
                </li>
                <li>
                <Tag bg='#E6F3C1'><p>{moment.tag3}</p></Tag>
                </li>
                </TagBox>
            </Section>
            <PlaceBox>
                <AdressIcon /><p>{moment.address}</p>
            </PlaceBox>
            </FlexBox>
            </Container>
        ))}
        </ul>
    );
  }
  
  export default PostCard;