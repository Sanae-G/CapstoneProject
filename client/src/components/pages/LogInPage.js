import styled from "styled-components";
import GoogleIcon from "../../icons/google";
import { NavLink } from "react-router-dom";
import Photography from "../../images/photography";

function LogInPage() {
  return (
    <>
      <StyledForm>
      <PhotoBox>
        <Photography />
      </PhotoBox>
        <label for="email" hidden="hidden">
          Email
        </label>
        <input type="email" name="email" placeholder="Email"></input>
        <label for="password" hidden="hidden">
          Password
        </label>
        <input type="password" name="password" placeholder="Password"></input>
        <StyledLoginButton type="submit">Log In</StyledLoginButton>
        <GoogleButton>
          <GoogleIcon />
          <p>Log In with Google</p>
        </GoogleButton>
      </StyledForm>
      <StyledText>
        No account yet?{" "}
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
  background-color: #6c63ff;
  color: #fff;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 300px;
  height: 59px;
  border-radius: 16px;
  font-size: 20px;
  border: 2px solid #6c63ff;
  background-color: #fff;

  img {
    width: 50px;
    height: auto;
  }
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

const PhotoBox = styled.div`
  padding-left: 3.8rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;
