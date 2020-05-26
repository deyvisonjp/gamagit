import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
   max-width: 991px;
   margin: 0 auto;
`

export const Title = styled.h1`
   text-align: center;
   font-size: 2rem;
   font-family: sans-serif;
   color: #333;
`;

export const List = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   font-family: sans-serif;
`;

export const  ListItem = styled.li`
   margin: .5rem 0;
   background: #000;
   color: #fff;
   padding: .5rem;
`

export const LinkHome = styled(Link)`
   display: block;
   width: 4rem;
   text-align: center;
   padding: .5rem;
   margin: 2rem auto;
   background-color: #000;
   color: #fff; 
   text-decoration: none;
   box-shadow: 1px 2px #ddd;
`