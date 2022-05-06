import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Days from '../Days';
import Months from '../Months';
import Date from '../Date';

// id: 1,
//       date: '2. April',
//       day: 'Thursday',
//       title: 'My Henna Tattoo',
//       img: 'http://localhost:5006/images/henna.png',
//       text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
//       tags: [{id: 1.1, tag: 'henna'}, {id: 1.2, tag: 'beauty'}],
//       address: 'Ras Al Hanut 33, Casablanca'

function CreatePage() {
  const navigate = useNavigate();
  const url = '/api';
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [tags, setTags] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const post = { day, title, text, date, month, address, tags };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      console.log('add new post');
      console.log(post)
    });
    handleClick();
  }

  function handleClick() {
    navigate('/');
  }

  return (
 <Container>
      <CreateForm>
        <h1>Keep My Travel Memory</h1>
        <form onSubmit={handleSubmit}>
          <label>Timing:</label>
          <DateBox>
            <Date date={date} setDate={setDate} />
            <Months month={month} setMonth={setMonth} />
            <Days day={day} setDay={setDay} />
          </DateBox>
          <label>Perfect <strong>Title</strong> for my Trip:</label>
          <input
            placeholder='My Trip to...'
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
          <label>My memorable Travel Experience:</label>
          <textarea placeholder='Today was ...' rows='13' required value={text} onChange={e => setText(e.target.value)}></textarea>
          <label>Memorable Place:</label>
          <input
            placeholder='Address or place...'
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          ></input>
           <label>Tag your Memory (separate by Comma):</label>
          <input
          placeholder='festival, beach, ...'
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
          ></input>
          <button>Keep Memory</button>
        </form>
      </CreateForm>
      <CancelButton onClick={handleClick}>Forget it</CancelButton>
    </Container>
  );
}

export default CreatePage;

const CreateForm = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    max-width: 70%;
  }

  label {
    text-align: left;
    display: block;
    margin: 2rem 0 0.5rem 0;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #8edfe4;
  }

  input,
  textarea {
    font-family: 'Poppins', sans-serif;
    color: black;
    width: 100%;
    margin: 7px 0;
    padding: 6px 10px;
    border: none;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    border: 3px solid #C9B6E4;
    border-radius: 7px;
  }

  input{
      height: 2.5rem;
  }


  select {
    text-align: center;
    padding: 5px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    margin-top: 1rem;
    width: 9rem;
    background-color: #8edfe4;
    color: #000;
    border: 0;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
`;

const Container = styled.div`
margin: 2rem 7% 0;
margin-bottom: 4rem;
padding-top: 2rem;

@media only screen and (min-width: 768px) {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
}

@media only screen and (min-width: 1200px) {
    padding-left: 15rem;
    padding-right: 15rem;
}

}
`;


const CancelButton = styled.button`
    width: 9rem;
    background-color: #ff8fa3;
    color: #000;
    border: 0;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 0.7rem;
`;