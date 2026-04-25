import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 50px;
    background-color:#242424; 
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivLeft = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    color: #0d6cbf;
    font-weight: bold;
    text-decoration: underline #ff802f;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width: 480px) {
        display: none;
      }

`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

const Button = styled.button`
    border: 2px solid #ff802f;
    padding: 10px 15px;
    background-color: #ff6600;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;


const NavBar = () => {
   return (
       <Container>
           <Wrapper>
            <DivLeft>
            <Logo>Tecmagest</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Quem somos</MenuItem>
                <MenuItem>Nossos Serviços</MenuItem>
                <MenuItem>Sistemas & Sites</MenuItem>
                <MenuItem>Cursos Online</MenuItem>
                <MenuItem>Contactos</MenuItem>
            </Menu>
            </DivLeft>
            <Button>INICIE HOJE!</Button>
           </Wrapper>
       </Container>
   );
};

export default NavBar;