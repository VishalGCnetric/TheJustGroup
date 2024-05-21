import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandContext } from '../contextApi/BrandContextProvider';
import { API_BASE_URL } from '../Api/api';

const SliderComponent = () => {
  const { brands } = useContext(BrandContext);
  const ids = brands.catalogGroupView || []; // Ensure ids is initialized properly
  const [data, setData] = useState([]);
// const link = ids.find(link => link.name === data[0].title);
// console.log(link)
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/content/justGroup`);
      const apiData = res.data;


      // const mergedData = apiData.map(item => {
      //   const matchedItem = ids.find(linkItem => linkItem.name === item.title);
      //   if (matchedItem) {
      //     return {
      //       ...matchedItem,
      //       ...item
      //     };
      //   } else {
      //     return item;
      //   }
      // });
  
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = (url) => {
    // Define your logic for handling the image click
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowDiv className={className} style={{ ...style, right: "20px" }} onClick={onClick}>
        <FaArrowRight />
      </ArrowDiv>
    );
  };
  const link = [
    "https://portmans.jgl.com.au/",
    "https://jayjays.jgl.com.au/",
    "https://jacquie.jgl.com.au/",
    "https://justjeans.jgl.com.au/",
    "https://dotti.jgl.com.au/",
  ]
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowDiv className={className} style={{ ...style, left: "20px" }} onClick={onClick}>
        <FaArrowLeft />
      </ArrowDiv>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    speed: 1000,
    pauseOnHover: true,
    arrows: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
// console.log(data)
  return (
    <SliderDiv>
      {data.length > 0 && ( // Check if data has items before rendering the slider
        <StyledSlider {...settings}>
         {data.map((item, index) => {
  // const link = ids.find(link => link.name === item.title);
  return (
    <div key={index}>
      <a href={link[index]} target="_blank" rel="noopener noreferrer">
        <img src={item.url} alt={item.title} />
      </a>
    </div>
  );
})}
        </StyledSlider>
      )}
    </SliderDiv>
  );
}

export default SliderComponent;

const SliderDiv = styled.div`
  cursor: pointer;
  margin:0;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: auto;
  }
`;

const ArrowDiv = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  svg {
    width: 20px;
    height: 20px;
  }
`;
