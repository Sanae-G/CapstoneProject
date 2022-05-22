import styled from 'styled-components';
import { useState } from 'react';
import SearchIcon from '../icons/search';
import CancelationIcon from '../icons/cancelIcon';

function SearchInput({ moments, setMoments, setFilteredPosts }) {
  const [value, setValue] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    setFilteredPosts(
      moments.filter(
        item =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.text.toLowerCase().includes(value.toLowerCase()) ||
          item.address.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  async function handleReset() {
    await fetch('https://capstone-sg.herokuapp.com/api/posts')
      .then(res => res.json())
      .then(data => {
        setMoments(data);
        setFilteredPosts(data);
        setValue('');
      });
  }

  return (
    <StyledForm onSubmit={handleSearch}>
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <CancelButton onClick={handleReset}>
        <CancelationIcon />
      </CancelButton>
    </StyledForm>
  );
}

export default SearchInput;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 90%;
  height: 3rem;
  border-radius: 60px;
  background-color: #f9f3ee;
  margin: 1rem auto;
  padding: 0 10px;

  input {
    background: transparent;
    flex: 1;
    height: 2.5rem;
    width: 13rem;
    border: none;
    outline: none;
    padding-left: 1rem;
    color: black;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

const SearchButton = styled.button`
  border: 0;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  border-right: 1px solid #deb6ab;
  background: transparent;

  svg {
    width: auto;
    height: 1.7rem;
  }
`;

const CancelButton = styled.button`
  border: 0;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  background: transparent;
  padding-left: 0.5rem;

  svg {
    width: auto;
    height: 2rem;
  }
`;
