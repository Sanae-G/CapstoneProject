import {
  StyledParagraph,
  TextBox,
  Container,
  TagBox,
  Tag,
  DateBox,
  PlaceBox,
  DecoLine,
} from './PostCard.styles';
import AdressIcon from '../../icons/adress';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DeleteIcon from '../../icons/delete';
import EditIcon from '../../icons/edit';

function PostCard({ setMoments, filteredPosts, setFilteredPosts, chronological }) {
  function handleDeleteClick(_id) {
    fetch(`https://capstone-sg.herokuapp.com/api/posts/${_id}`, { method: 'DELETE' }).then(() => {
      fetch('https://capstone-sg.herokuapp.com/api/posts')
        .then(res => res.json())
        .then(data => {
          setMoments(data);
          setFilteredPosts(data);
        }); // eslint-disable-next-line
    });
  }

  return (
    <StyledUnorderedList chronological={chronological}>
      {filteredPosts &&
        filteredPosts.map(post => (
          <Container key={post._id}>
            <DateBox>
              <DecoLine />
              <h2>
                {post.month} {post.date}
              </h2>
              <DecoLine />
            </DateBox>
            <StyledParagraph>{post.day}</StyledParagraph>
            <h3>{post.title}</h3>
            {post.img !== '' && <img src={post.img} width="150px" alt="moment"></img>}
            <TextBox>
              <p>{post.text}</p>
            </TextBox>
            <TagBox>
              {post.tags &&
                post.tags.map(subtag =>
                  subtag !== '' ? (
                    <li key={subtag}>
                      <Tag>
                        <p>{subtag}</p>
                      </Tag>
                    </li>
                  ) : (
                    ''
                  )
                )}
            </TagBox>
            {post.address !== '' ? (
              <PlaceBox>
                <AdressIcon />
                <p>{post.address}</p>
              </PlaceBox>
            ) : (
              ''
            )}
            <IconBox>
              <NavLink to={`/update/${post._id}`}>
                <button>
                  <EditIcon />
                </button>
              </NavLink>
              <button type="button" onClick={() => handleDeleteClick(post._id)}>
                <DeleteIcon />
              </button>
            </IconBox>
          </Container>
        ))}
    </StyledUnorderedList>
  );
}

export default PostCard;

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: ${props => (props.chronological ? 'column' : 'column-reverse')};

  button {
    background: none;
    border: none;
    margin-right: 1rem;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 2%;

  button {
    margin-top: 1.1rem;
    cursor: pointer;
  }
`;
