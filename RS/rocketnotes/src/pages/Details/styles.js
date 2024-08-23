
import styled from 'styled-components';

export const Container = styled.h1`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "contend";
  
`;


export const Links = styled.ul`

list-style: none

>li{
  margin-top: 12px;
  
}

a{
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 25px;
}

`
