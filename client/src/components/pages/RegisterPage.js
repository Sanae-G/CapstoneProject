import styled from 'styled-components';
import Travel from '../../images/travel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleErrors = async response => {
    if (!response.ok) {
      const message = await response.json();
      throw Error(message.message);
    }
    return response.json();
  };

  function register(e) {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      passwordConfirm,
    };

    fetch('http://localhost:5007/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(handleErrors)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <>
      <StyledForm onSubmit={register}>
        <PhotoBox>
          <Travel />
        </PhotoBox>
        <div>
          <h1>Sign Up</h1>
        </div>
        <section>
          <ErrorText>{error}</ErrorText>
        </section>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            required
            placeholder="peter.parker@marvel.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            required
            placeholder="Peter"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label for="password">Confirm Password</label>
          <input
            type="password"
            required
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          ></input>
        </div>
        <StyledSignUpButton>Sign Up with Email</StyledSignUpButton>
      </StyledForm>
    </>
  );
}

export default RegisterPage;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  input {
    display: block;
    width: 300px;
    height: 47px;

    font-size: 16px;
    font-weight: 300;
    padding-left: 1rem;
    background-color: rgba(156, 205, 250, 0.2);
    border: none;
  }

  ::placeholder {
    color: #c0c0c0;
  }

  button {
    font-weight: 500;
  }

  h1 {
    font-weight: 600;
    width: 300px;
  }

  section {
    margin: 0 auto;
    width: 18.75rem;
  }
`;

const StyledSignUpButton = styled.button`
  width: 300px;
  height: 59px;
  border-radius: 16px;
  font-size: 20px;
  border: none;
  background-color: #6c63ff;
  color: #fff;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const PhotoBox = styled.div`
  padding-left: 3.8rem;
  margin-top: 4rem;
`;

const ErrorText = styled.p`
  display: block;
  color: red;
  font-weight: bold;
`;
