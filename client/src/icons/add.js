import styled from 'styled-components';

function Create() {
  return (
    <CreateIcon
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26ZM14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM6 13.75C6 13.1977 6.44772 12.75 7 12.75H13V7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7V12.75H21C21.5523 12.75 22 13.1977 22 13.75C22 14.3023 21.5523 14.75 21 14.75H15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V14.75H7C6.44772 14.75 6 14.3023 6 13.75Z"
        fill="black"
      />
    </CreateIcon>
  );
}

export default Create;

const CreateIcon = styled.svg`
  &:hover path {
    fill: pink;
  }
`;
