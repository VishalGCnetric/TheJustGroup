import React from 'react';
import styled from 'styled-components';
import banner from '../assets/banner.png'

const Container = styled.div`
  position: relative;
  margin-top:-4px;
  width: 100%;
  height: 500px;
  @media (max-width: 600px) {
    height:200px;
}

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
 
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 500px;
  background-color: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  @media (max-width: 600px) {
    height:200px;
}
  
  button{
    background-color:transparent;
    color:white;
    border:1px solid white;
    padding:10px 20px; 
    border-radius:5px;
    font-size:1.2em;
    margin-top:50px; 
    &:hover {
      background-color: white;
      a{
        color:black;
      }
    }
    a{
      text-decoration:none;
      color:white;
    }  
    @media (max-width: 600px) {
        margin-top:20px; 
    }
  }
`;

const Text = styled.h1`
  color: white;
  font-size: 4em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2em;
  }
}
`;

const Welcome = () => {
  return (
    <Container>
      <Image src={banner} alt="" />
      <Overlay>
        <Text>Welcome to The Just Group </Text>
        <button><a href="/about">About us</a></button>
      </Overlay>
    </Container>
  );
};

export default Welcome;
