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

function PostCard({ setMoments, moments, filteredPosts, setFilteredPosts }) {
  function handleDeleteClick(_id) {
    fetch(`/posts/${_id}`, { method: 'DELETE' }).then(() => {
      fetch('/posts')
        .then(res => res.json())
        .then(data => {
          setMoments(data);
          setFilteredPosts(data);
        }); // eslint-disable-next-line
    });
  }

  return (
    <ul>
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
            {post.img !== '' ? <img src={post.img} width="150px" alt="moment"></img> : ''}
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
            <NavLink to={`/update/${post._id}`}>
              <button>Edit</button>
            </NavLink>
            <button type="button" onClick={() => handleDeleteClick(post._id)}>
              Delete
            </button>
          </Container>
        ))}
    </ul>
  );
}

export default PostCard;
