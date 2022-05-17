import styled from "styled-components";
import Travel from "../../images/travel";

function RegisterPage() {
  return (
    <>
      <StyledForm>
        <PhotoBox>
          <Travel />
        </PhotoBox>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="peter.parker@marvel.com"
          ></input>
        </div>
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" placeholder="Peter"></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password"></input>
        </div>

        <div>
          <label for="password">Confirm Password</label>
          <input type="password" name="password"></input>
        </div>

        <StyledLoginButton type="submit">Sign Up with Email</StyledLoginButton>
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

const PhotoBox = styled.div`
  padding-left: 3.8rem;
  margin-top: 4rem;
`;
