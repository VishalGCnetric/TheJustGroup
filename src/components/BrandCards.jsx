
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrandContext } from '../contextApi/BrandContextProvider';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 36px;
  }

  .brands {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media(max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    gap: 20px;
  }

  .brand-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 10px 10px 0 0;
    }

    &:hover {
      transform: scale(1.05);
    }

    .brand-logo {
      position: absolute;
      bottom: 20px;
      left: 10px;
      width: 50px;
      height: auto;
    }
  }
`;

const BrandCards = () => {
  const {brands } =useContext(BrandContext)
  let link = brands.catalogGroupView
  console.log(link)
  return (
    (link && <Container>
      <h1>Our Brands</h1>
      <div className='brands'>
       
          <div className="brand-card">
            <a href={link[0].uniqueID}>
            <img src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/about/24AW/JJ24AW_AboutUs02.jpg" alt="Image 1" />
            <img className="brand-logo" src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href={link[1].uniqueID}>
            <img src="https://portmans.jgl.com.au/RJ/aurora/images/espot/static/about/PO23AW_AboutUs@2x_2.jpg"  />
            <img className="brand-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHp2qD9Ofs00hRm8DV96TgGgmkzbKM6KI5oq0nhUUGQ&s" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href={link[2].uniqueID}>
            <img src="https://dotti.jgl.com.au/DT/aurora/images/popup/DT_DESKTP_PopUp_SignUp_1.jpg" alt="Image 3" />
            <img className="brand-logo" src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ciqk9vxtldjuyqpji6oq" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href={link[3].uniqueID}>
            <img src="https://jayjays.jgl.com.au/MJ/aurora/images/products/large/930386_navystripe_back_l.jpg?i10c=img.resize(width:480)" alt="Image 4" />
            <img className="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Jay_Jays_Logo.jpg/800px-Jay_Jays_Logo.jpg" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href={link[4].uniqueID}>
            <img src="https://jacquie.jgl.com.au/EJ/aurora/images/products/large/518022_perfectplum_l.jpg?i10c=img.resize(width:480)" alt="Image 5" />
            <img className="brand-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjiDLjk66KdK3Fm1iN_8yeMFSlsq-7LXDmfl11xRyEw&s" alt="" />
            </a>
          </div>
       
      </div>
    </Container>
    )
      );
};

export default BrandCards;


