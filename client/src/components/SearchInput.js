import styled from 'styled-components';
import { useState } from 'react';

function SearchInput({ moments, setFilteredPosts }) {
  // const [searchButtonState, setSearchButtonState] = useState(false);
  const [value, setValue] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    setFilteredPosts(
      moments.filter(
        item =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.text.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleReset() {}

  return (
    <StyledForm onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <button type="submit">Search</button>
      <button onClick={handleReset}>Reset</button>
    </StyledForm>
  );
}

export default SearchInput;

const StyledForm = styled.form`
  position: fixed;
  bottom: 80px;
  right: 50px;
  align-content: center;

  input {
    height: 50px;
    width: 20rem;
  }

  button {
    height: 50px;
    width: 5rem;
  }
`;
