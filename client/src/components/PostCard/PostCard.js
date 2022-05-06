import { StyledParagraph, 
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
            <StyledParagraph>{moment.day}</StyledParagraph>
            <h3>{moment.title}</h3>
            {moment.img !== '' ? 
            <img src={moment.img} alt="moment" /> : ''
            }
            <TextBox>
            <p>{moment.text}</p>
            </TextBox>
                <TagBox>
                {moment.tags && moment.tags.map((subtag) => (
                <li key = {subtag}>
                <Tag><p>{subtag}</p></Tag>
                </li>
                ))}
                </TagBox>
            {moment.address !== '' ? 
            (
                <PlaceBox>
                    <AdressIcon /><p>{moment.address}</p>
                </PlaceBox>
            ) : ''
            }
            </Container>
        ))}
        </ul>
    );
  }
  
  export default PostCard;