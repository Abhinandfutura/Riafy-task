import React from 'react'
import  styled from 'styled-components'

function Header() {
  return (
    <HeaderContainer>
    <Container>

        <span>Search</span>
        <UnderLine></UnderLine>
    </Container>
    </HeaderContainer>
  )
}

export default Header
const HeaderContainer=styled.div`
    position: fixed;
    top: 0;
  
    background: white;
    width: 100%;

`;
const Container=styled.div`
padding: 15px;;
font-weight: bold; 
font-size:1.2em ;
position: relative;
color : #30384d;

`;

const UnderLine=styled.span`
    left: 0;
    bottom: 0;
width:100%;
height:2px;
background-color: black;
position: absolute;
`;