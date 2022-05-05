import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Days from '../Days';
import Months from '../Months';
import Date from '../Date';
import CancelIcon from '../../icons/cancel';

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

  function handleSubmit(e) {
    e.preventDefault();
    const post = { day, title, text };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      console.log('add new post');
    });
    handleClick();
  }

  function handleClick() {
    navigate('/');
  }

  return (
 <Container>
     <div onClick={handleClick}>
     <CancelIcon/>
     </div>
      <CreateForm>
        <h1>Add a new Moment</h1>
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <DateBox>
            <Date date={date} setDate={setDate} />
            <Months day={month} setDay={setMonth} />
            <Days month={day} setMonth={setDay} />
          </DateBox>
          <label>Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
          <label>Blog post:</label>
          <textarea rows='7' required value={text} onChange={e => setText(e.target.value)}></textarea>
          <button>Add Page</button>
        </form>
      </CreateForm>
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
    width: 100%;
    margin: 10px 0;
    padding: 6px 10px;
    border: none;
    box-sizing: border-box;
    display: block;
    background-color: #f8f5f5;
  }

  input{
      height: 2.5rem;
  }

  textarea{
      height: 
  }

  select {
    text-align: center;
    padding: 5px;
  }

  button {
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
margin: 3rem 7% 0;
margin-bottom: 4rem;

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