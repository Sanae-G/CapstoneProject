import styled from 'styled-components';

export const Header = styled.header`
background-color: ${({color}) => color};
margin: 0;
height: 9.7rem;
width: 100vw;

h1 {
    text-align: center;
    padding-top: 3.4rem;
    font-size: 1.5rem; 
}

p{
    text-align: center;
    padding-top: 1rem;
    font-size: 1rem;
    padding-bottom: 5rem; 
}
`;


export const DateBox = styled.ul`
width: 100%;
height: 3rem;
list-style: none;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
margin-top: 1rem;

h2{
    text-align: center;
    font-size: 1.5rem;  
}

div{
    width: 34%;
height: 4px;
background-color: #E6F3C1;
}

`;


export const P2 = styled.p`
text-align: center;
padding-top: 0.5rem;
font-size: 1rem;
color: grey;
`;


export const TextBox = styled.div`
padding-bottom: 1rem;
border-bottom: 1px solid #DBDBDB;
`;


export const Container = styled.div`
margin: 0 7%;
margin-bottom: 4rem;

h3{
    text-align: center;
    padding-top: 2rem;
    font-size: 1.3rem; 
}

img{
    width: 85vw;
    height: auto;
    border-top-right-radius: 112px;
    border-bottom-left-radius: 112px;
    margin: 1rem auto;
    border: 7px solid #E6F3C1; 
}
`;

export const Tag = styled.div`
padding: 0.2rem 1.1rem 0 1.1rem;
height: 2rem;
background-color: ${(props) => props.bg};
border-radius: 8px;

p{
    text-align: center;
}
`;


export const TagBox = styled.ul`
width: 100%;
list-style: none;
display: flex;
justify-content: center;
margin-top: 1rem;
flex-wrap: wrap;
gap: 0.9rem;
& li:nth-child(even) ${Tag} {
    background: #BEE48E;
`;


export const PlaceBox = styled.div`
    margin-top: 1.3rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
`;



