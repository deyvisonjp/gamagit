import styled from "styled-components";

export const HomeConatainer = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Title = styled.h1`
   text-align: center;
   font-size: 2rem;
   font-family: sans-serif;
   color: #333;
`;

export const Input = styled.input`
   border: 1px solid #ddd;
   height: 1.5rem;
   padding: 0 .5rem;
   border-radius: .25rem 0 0 .25rem;

   &:focus, &:active {
      outline: none;
      box-shadow: none;
   }
`;

export const Button = styled.button`
   height: 1.5rem;
   border: 1px solid #647896;
   background: #0719ef;
   color: #fff;
   border-radius: 0 .25rem .25rem 0;

   &:focus, &:active {
      outline: none;
      box-shadow: none;
   }
`;

export const Error = styled.span`
   display: block;
    font-size: 0.8rem;
    color: #FF5722;
    font-weight: 600;
    margin-top: 1rem;
   
`