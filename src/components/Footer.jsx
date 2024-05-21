import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrandContext } from '../contextApi/BrandContextProvider';
import MoreBrand from './MoreBrand';


const Footer = () => {
  const {brands} = useContext(BrandContext);
const link = [
  "https://justjeans.jgl.com.au/",
  "https://portmans.jgl.com.au/",
  "https://dotti.jgl.com.au/",
  "https://jayjays.jgl.com.au/",
"https://jacquie.jgl.com.au/"
]
  return (
    <FooterDiv>
      <div className="logo">
        <div>
          <Link to='/'>
            <img
            //  src={'https://www.justgroup.com.au/images/logo.png'} 
             src="/image.png"
             alt='Company Logo' />
          </Link>
        </div>
      </div>
      <div className="resposiveFootergrid">
        <div className="aboutfooter">
          <ul>
            <li><a href="#">ABOUT</a></li>
            <ul >
              <li><a href="#">OUR HISTORY</a></li>
              <li><a href="#">OUR PEOPLE</a></li>
              <ul id='anchortext'>
                <li><a href="#">Board of Directors</a></li>
                <li><a href="#">Senior Leaders</a></li>
              </ul>
              <li><a href="#">OUR INVESTORS</a></li>
              <ul>
                <li><a href="#">PMV</a></li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="ourbrandfooter">
          <ul>
            <li className="headingList"><a href="#">OUR BRAND</a></li>
            <ul>
              {brands.catalogGroupView?.map((brand,i) => (
                <li key={brand.uniqueID}><a target="_blank" rel="noopener noreferrer" href={link[i]}>{brand.name}</a></li>
              ))}
              {/* <li><a href="#">JUST JEANS</a></li>
              <li><a href="#">PORTMANS</a></li>
              <li><a href="#">DOTTI</a></li>
              <li><a href="#">JAY JAYS</a></li>
              <li><a href="#">JACQUI E</a></li> */}
            </ul>
          </ul>
        </div>
        <div className="betterpractices">
          <ul>
            <li className="headingList"><a href="#">BETTER PRACTICES</a></li>
            <ul>
              <li><a href="#">OUR COMMITMENT</a></li>
            <ul id='anchortext'>
              
              <li><a href="#">People</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Planet</a></li>
              <li><a href="#">Product</a></li>
            </ul>
            </ul>
            <li><a href="#">SUPPLIER PORTAL</a></li>
          </ul>
        </div>
        <div className="careerfooter">
          <ul>
            <li className="headingList"><a href="#">CAREERS</a></li>
            <ul>
              <li><a href="#">RETAIL STORES</a></li>
              <li><a href="#">SUPPORT OFFICE</a></li>
              <li><a href="#">DISTRIBUTION CENTRE</a></li>
              <li><a href="#">JOB SEARCH</a></li>
              <li><a href="#">EXISTING APPLICANTS</a></li>
            </ul>
          </ul>
        </div>
        <div className="contactfooter">
          <ul>
            <li className="headingList" ><a href="#">CONTACT</a></li>
            <ul>
              <li><a href="#">CORPORATE GIFT CARDS</a></li>
              <li><a href="#">JUST GROUP ENQUIRIES</a></li>
              <li><a href="#">BRAND ENQUIRIES</a></li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="acknowledgement">
        <div>
          <p>ACKNOWLEDGEMENT OF COUNTRY</p>
          <img 
          src="https://www.justgroup.com.au/images/flags.png" 
          // src="/image.png"
          alt="flag" className="flag" />
          <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
          <p className='ackcontent'>
            We acknowledge the Traditional Custodians of Country throughout Australia and recognise their
            continuing connection to land, waters and communities. We pay our respects to Aboriginal and Torres Strait Islander cultures and to Elders, past, present and emerging.
          </p>
          </div>
        </div>

      </div>
      <MoreBrand/>
      <div className='footerbottom'>
        <div><a href="#">TERMS OF USE</a></div> | <div><a href="#">PRIVACY POLICY</a></div>
      </div>
    </FooterDiv>
  )
}







export default Footer;


const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #30497a;
  // color: #ffff;
  // background-color: #67729D;
  background-color: #DCDCDC;
 
  
  .logo  {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      width:80%;
    }


  }
  a {
    color: #30497a;
    // color: #ffff;
    text-decoration: none;
    font-size:14px;
  }
  a:hover {
    text-decoration: underline;
  }
  .headinglist> a {
    font-weight: bold;
    font-size:16px;

  }
  .logo img{
    width:100%;
    height:100px;
  }
  li {
    font-weight: bold;
    list-style: none;
    padding: 5px;
  }

  ul ul {
    padding-left: 20px;
    font-weight: normal;
  }

  ul ul  {
    font-weight: normal;
  }
 
  .resposiveFootergrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    text-decoration: none;
    text-align: left;
  }
  #anchortext >li {
    font-weight: normal;
  }
  .acknowledgement{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align:center;
     font-weight: bold;
  }

  .flag{
    width: 100px;
    height: auto;
    margin-left: 10px;
    margin:20px 0;
  }
  
  .ackcontent {
    // width:70%;
    font-weight: normal;
    margin-bottom:20px;
    text-align:center;
    padding:10px;
  }
  .footerbottom {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #30497a;
    color: white;
    width:100%;
    padding: 10px;
  }
  .footerbottom  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding:10px;
  }
  @media (min-width: 768px) {
    .resposiveFootergrid {
      grid-template-columns: repeat(3, 1fr);
      gap:50px;
    }
  }
  @media (min-width: 500px) {
    .resposiveFootergrid {
      grid-template-columns: repeat(2, 1fr);
      gap:50px;
    }
  }
  @media (min-width: 1024px) {
    .resposiveFootergrid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;