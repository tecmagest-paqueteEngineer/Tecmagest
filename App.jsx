import styled from "styled-components";
import NavBar from "./components/navBar/NavBar";
import IntroFeature from "./components/introFeature/IntroFeature";

const Container = styled.div`
  height: 100vh;
  background-color:#0e0f18; 
  overflow: hidden;
`

const ImageShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: #ff802f;
`;

const App = () => {
  return (
  <Container>
    <NavBar />
    <IntroFeature />
    <ImageShape />
  </Container>
  );
};

export default App;