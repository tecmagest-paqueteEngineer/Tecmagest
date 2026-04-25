import React from 'react'
import styled from "styled-components";
import africanoamericano  from "../../images/africanoamericano.jpg"
import Animated from "../../components/animated/Animated";

const Container = styled.div`
    display: flex;
    backgound-color: #0e0f18;
    @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
}
`;

const DivLeft = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
    display: none;
}
`;

const Image = styled.img`
    width: 80%;
`;

const DivRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
    width: 100%;
}
`;

const Title = styled.h1`
    color: white;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

const SubTitle = styled.span`
    font-size: 25px;
    font-style: italic;
    color: #f4f4f4;
    margin-top: -50px;
`;

const Description = styled.p`
    font-size: 20px;
    color: #f4f4f4;
    margin-top: 30px;
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
 `;

const Button = styled.button`
    width: 150px;
    padding: 15px; 20px;
    background-color: #117bd8;
    font-size: 20px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactText = styled.span`
    color:  #444;
    margin-top: 5px;
`;

const TelPhone = styled.span`
    color:  #ff802f;
    font-weight: bold;
`;


const IntroFeature = () => {
    return (
        <Container>
             <DivLeft>  
                <Image src={africanoamericano} />
            </DivLeft>
            <DivRight>
                <Title>A Revolução das Tecnologias & Soluções. A maior Empresa de Software Engineer !
                </Title>
            {/* <Title2>Academia de Ensino à Distância, Cyber Security & Marketing Digital !</Title2> */}
                <SubTitle>Desenvolvemos Sistemas com Inovação.</SubTitle>
             <Description>
                Sistemas Web, Aplicativo Mobile, Loja Virtual & Cursos Online.
                A 1ª que criou e lançou o Sistema Integrado de Gestão Académica - SIGA.<br/>Formador do 1º Curso de Hardware Avançado & Redes.
            </Description>
                <Button>SOLICITE UMA SOLUÇÃO</Button>
                * <Contact>
                    <TelPhone>Ligue agora-BR (55) 41 995 862 632</TelPhone>
                    <TelPhone>Ligue agora-AO (244) 923 545 130</TelPhone>
                    <ContactText>Dúvidas? Fale Conosco!</ContactText>
                </Contact> 
            </DivRight>
             <Animated/>          
        </Container>
    );
};

export default IntroFeature;
