import React from 'react'
import styled, { keyframes } from 'styled-components';

const Loder = () => {
  return (
    <LoaderContainer/>
  )
}

export default Loder;


// Keyframes for animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader
const LoaderContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #000;
  animation: ${spin} 1s ease-in-out infinite;
`;