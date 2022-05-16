import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Days from '../Days';
import Months from '../Months';
import Date from '../Date';

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [tags, setTags] = useState('');

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  function handleSubmit(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      const post = {
        day,
        title,
        text,
        date,
        month,
        address,
        tags,
        base64EncodedImage: reader.result,
      };

      fetch('/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      }).then(() => {
        handleClick();
      });
    };
  }

  function handleClick() {
    navigate('/');
  }

  return (
    <Container>
      <h1> Keep My Travel Memory</h1>
      <form onSubmit={handleSubmit}>
        <label id="Timing-label">Timing:</label>
        <DateBox>
          <Date date={date} setDate={setDate} />
          <Months month={month} setMonth={setMonth} />
          <Days day={day} setDay={setDay} />
        </DateBox>
        <label id="title">
          Perfect <strong>Title</strong> for my Trip:
        </label>
        <input
          aria-labelledby="title"
          placeholder="My Trip to..."
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        ></input>
        {previewSource && <img src={previewSource} alt="chosen" style={{ height: '300px' }} />}
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
          accept="image/png, image/jpeg, image/jpg"
        />
        <label id="travelMemory">My memorable Travel Experience:</label>
        <textarea
          aria-labelledby="travelMemory"
          placeholder="Today was ..."
          rows="13"
          required
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <label id="address">Memorable Place:</label>
        <input
          aria-labelledby="address"
          placeholder="Address or place..."
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        ></input>
        <label id="tags">Tag your Memory (separate by Comma):</label>
        <input
          aria-labelledby="tags"
          placeholder="festival, beach, ..."
          type="text"
          value={tags}
          onChange={e => setTags(e.target.value)}
        ></input>
        <CreateButton>Keep Memory</CreateButton>
      </form>
      <CancelButton onClick={handleClick}>Forget it</CancelButton>
    </Container>
  );
}

export default CreatePage;

const Container = styled.div`
  max-width: 100%;
  margin: 10% auto;
  padding: 5vh 5vw;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    max-width: 70%;
    padding: 1vh 10vw;
  }

  @media only screen and (min-width: 810px) {
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
    border: 3px solid #c9b6e4;
    border-radius: 7px;
  }

  input {
    height: 2.5rem;
  }

  select {
    text-align: center;
    padding: 5px;
    font-family: 'Poppins', sans-serif;
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
`;

const CreateButton = styled.button`
  margin-top: 1rem;
  width: 9rem;
  background-color: #8edfe4;
  color: #000;
  border: 0;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
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
