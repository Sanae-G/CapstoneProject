import henna from '../../images/henna.png';
import { P2, 
    TextBox, Container,
    TagBox, Tag, DateBox, PlaceBox} from './PostCard.styles';
import AdressIcon from '../../icons/adress';

function PostCard() {

    return (
        <>
        <Container>
            <DateBox>
                <div></div>
                <h2>2. April</h2>
                <div></div>
            </DateBox>
        <P2>Thursday</P2>
        <h3>My Henna Tattoo</h3>
        <img src={henna} alt="henna" />
        <TextBox>
            <p>Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.</p>
        </TextBox>
        <TagBox>
            <li>
            <Tag bg='#E6F3C1'><p>henna</p></Tag>
            </li>
            <li>
            <Tag bg='#BEE48E'><p>beauty</p></Tag>
            </li>
            <li>
            <Tag bg='#E6F3C1'><p>tattoo</p></Tag>
            </li>
        </TagBox>
        <PlaceBox>
             <AdressIcon /><p>Ras Al Hanut 33, Casablanca</p>
        </PlaceBox>
        </Container>
        </>
    );
  }
  
  export default PostCard;