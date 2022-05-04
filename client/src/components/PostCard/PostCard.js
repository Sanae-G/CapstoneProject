import { P2, 
    TextBox, Container,
    TagBox, Tag, DateBox, PlaceBox, DecoLine} from './PostCard.styles';
import AdressIcon from '../../icons/adress';

function PostCard({moments}) {

    return (
        <ul>
        {moments && moments.map((moment) => (
            <Container key={moment.id}>
            <DateBox>
            <DecoLine/>
                <h2>{moment.date}</h2>
            <DecoLine/>
            </DateBox>
            <P2>{moment.day}</P2>
            <h3>{moment.title}</h3>
            <img src={moment.img} alt="henna" />
            <TextBox>
            <p>{moment.text}</p>
            </TextBox>
                <TagBox>
                {moment.tags && moment.tags.map((subtag) => (
                <li key = {subtag.id}>
                <Tag bg='#E6F3C1'><p>{subtag.tag}</p></Tag>
                </li>
                ))}
                </TagBox>
            <PlaceBox>
                <AdressIcon /><p>{moment.address}</p>
            </PlaceBox>
            </Container>
        ))}
        </ul>
    );
  }
  
  export default PostCard;