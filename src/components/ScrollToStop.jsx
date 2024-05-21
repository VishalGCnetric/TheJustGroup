import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ArrowButton onClick={scrollToTop} style={{ opacity: isVisible ? 1 : 0 }}>
      <ArrowIcon />
    </ArrowButton>
  );
}

export default ScrollToTopArrow;

const ArrowButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease; /* Add transition for opacity */
`;

const ArrowIcon = styled(IoIosArrowUp)`
  color: #30497a;
  font-size: 20px;
`;
