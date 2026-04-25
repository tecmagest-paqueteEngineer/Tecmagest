import React from 'react';
import styled from "styled-components";
import {SliderData} from "../../SliderData"


const Container = styled.div`
  width:  100%;
  height: 100%;px;
 `;


const Slider = styled.img`
  width:  50px;
  height: 50px;
 `;
 
const ImageSlider = () => {
    return (
        <Container>
            <Slider>
        {SliderData.map((slide, index) => {
            return (
                <img src={slide.image} alt="Print de alguns serviços" />
            )
        })}        
            </Slider>
        </Container>
    );
};

export default ImageSlider;