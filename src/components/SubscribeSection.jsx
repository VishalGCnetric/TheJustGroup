import React from 'react';
import styled from 'styled-components';
import newsletterImage from '../assets/newsletter.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMobile } from 'react-icons/fa';

const SubscribeSection = () => {
  return (
    <StyledSubscribeSection>
      <div className="newsletter-image">
        <img src={newsletterImage} alt="Newsletter" />
      </div>
      <div className="subscriptionContent">
        <h2>Subscribe To Our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <StyledContactInfo>
        <div className="email">
            <FaEnvelope className="icon" />
            <span>info@thejustgroup.com</span>
          </div>
          <div className="phone">
            <FaMobile className="icon" />
            <span>+1234567890</span>
          </div>
          
        </StyledContactInfo>
        <StyledSocialIcons>
          <FaFacebook className="icon" />
          {/* <FaTwitter className="icon" /> */}
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
        </StyledSocialIcons>
        
      </div>
    </StyledSubscribeSection>
  );
};

const StyledSubscribeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:20px;
  text-align: center;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  
  .newsletter-image {
    width: 100%;
    max-width: 400px; /* Limiting the width for smaller screens */
    margin-bottom: 20px;
  }
  
  .newsletter-image > img {
    width: 100%;
    height: auto;
  }
  
  .subscriptionContent {
    width: 100%;
    max-width: 400px; /* Limiting the width for smaller screens */
  }

  h2 {
    margin-bottom: 20px;
  }

  form {
    display :flex;
    margin-bottom: 20px;

    input {
      width: calc(100% - 80px); /* Adjusting input width */
      padding: 10px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      width: 80px; /* Adjusting button width */
      padding: 10px 0;

      border-radius: 5px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #2c4268;
      color: white;
     
    }
  }
 
  @media (min-width: 768px) {
    flex-direction: row;
    gap:100px;
    .newsletter-image,
    .subscriptionContent {
      width: 50%;
    }

    .subscriptionContent {
      margin-left: 20px;
    }
  }
`;

const StyledSocialIcons = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
margin-left:-20px;
  .icon {
    margin: 0 10px;
    font-size: 20px;
    color: black;
    cursor: pointer;
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .phone,
  .email {
    text-align:left;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .icon {
    margin-right: 10px;
    font-size: 20px;
    color: black;
  }
`;

export default SubscribeSection;
