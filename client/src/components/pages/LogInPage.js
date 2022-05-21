import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.png';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleErrors = async response => {
    if (!response.ok) {
      const message = await response.json();
      throw Error(message.message);
    }
    return response.json();
  };

  function login(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    fetch('http://localhost:5007/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(handleErrors)
    .then(() => {})
    .catch(error => {
      setError(error.message);
    });
}

  console.log(password);
  console.log(email);

  return (
    <>
      <StyledForm onSubmit={login}>
        <Img src={logo}></Img>
        <section>
          <ErrorText>{error}</ErrorText>
        </section>
        <label for="email" hidden="hidden">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Email"
        ></input>
        <label for="password" hidden="hidden">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Password"
        ></input>
        <StyledLoginButton>Log In</StyledLoginButton>
      </StyledForm>
      <StyledText>
        No account yet?{' '}
        <NavLink to="/register">
          <span>Sign Up</span>
        </NavLink>
      </StyledText>
    </>
  );
}

export default LogInPage;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  input {
    width: 300px;
    height: 47px;

    font-size: 20px;
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
`;

const StyledLoginButton = styled.button`
  width: 300px;
  height: 59px;
  border-radius: 16px;
  font-size: 20px;
  border: none;
  background-color: #9c51e0;
  color: #fff;
  cursor: pointer;
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  display: block;
  margin-top: 1rem;

  span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 350px;
  height: auto;
`;

const ErrorText = styled.p`
  display: block;
  color: red;
  font-weight: bold;
`;