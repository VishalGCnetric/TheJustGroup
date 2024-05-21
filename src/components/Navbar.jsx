import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import CustomAccordion from './CustomAccordian';
import { BrandContext } from '../contextApi/BrandContextProvider';

const Navbar = () => {
  const {brands} = useContext(BrandContext)
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
// console.log(brands.catalogGroupView)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        // Click is outside of drawer, so close it
        setOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <nav>
      <NavbarDiv>
        <div className="logo">
          <Link to='/'>
            <img
            //  src={'https://www.justgroup.com.au/images/logo.png'} 
             src="/image.png"
             alt='Company Logo' />

          </Link>
        </div>
        <div className="links">
          <NavLink to="/about"
            onMouseEnter={() => document.getElementById('about_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('about_dropdown').style.display = 'none'}
          >About</NavLink>
          <DropDown
            onMouseEnter={() => document.getElementById('about_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('about_dropdown').style.display = 'none'}
            id='about_dropdown' style={{ display: 'none' }} >
            <ul>
              <li><a href="#"><b>OUR HISTORY</b></a></li>
              <li><a href="#"><b>OUR PEOPLE</b></a></li>
              <ul>
                <li><a href="#">Bord of Directors</a></li>
                <li><a href="#">Senior Leaders</a></li>
              </ul>
              <li><a href="#"><b>OUR INVESTORS</b></a></li>
              <ul>
                <li><a href="#">PMV</a></li>
              </ul>
            </ul>
          </DropDown>

          <NavLink to="/our_brands"
            onMouseEnter={() => document.getElementById('brands_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('brands_dropdown').style.display = 'none'}
          >Our Brands</NavLink>
          <DropDown id='brands_dropdown' style={{ display: 'none', width: '480px' }}
            onMouseEnter={() => document.getElementById('brands_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('brands_dropdown').style.display = 'none'}
          >
            <ul>
              {brands.catalogGroupView?.map((brand) => (
                <li key={brand.uniqueID} ><a target="_blank" rel="noopener noreferrer" href={brand.uniqueID} ><b>{brand.name}</b></a></li>
              ))}
            
            </ul>
          </DropDown>
          <NavLink to="/better_practices"
            onMouseEnter={() => document.getElementById('practieces_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('practieces_dropdown').style.display = 'none'}
          >Better Practices</NavLink>
          <DropDown id='practieces_dropdown' style={{ display: 'none', width: '360px' }}
            onMouseEnter={() => document.getElementById('practieces_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('practieces_dropdown').style.display = 'none'}
          >
            <ul>
              <li><a href=""><b>OUR COMMITMENT</b></a></li>
              <ul>
                <li><a href="#">People</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Planet</a></li>
                <li><a href="#">Product</a></li>
              </ul>
            </ul>
          </DropDown>
          <NavLink to="/careers"
            onMouseEnter={() => document.getElementById('careers_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('careers_dropdown').style.display = 'none'}
          >Careers</NavLink>
          <DropDown id='careers_dropdown' style={{ display: 'none', width: '290px' }}
            onMouseEnter={() => document.getElementById('careers_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('careers_dropdown').style.display = 'none'}
          >
            <ul>
              <li><a href="#"><b>RETAIL STORES</b></a></li>
              <li><a href="#"><b>SUPPORT OFFICE</b></a></li>
              <li><a href="#"><b>DISTRIBUTION CENTRE</b></a></li>
              <li><a href="#"><b>JOB SEARCH</b></a></li>
              <li><a href="#"><b>EXISTING APPLICANTS</b></a></li>
            </ul>
          </DropDown>
          <NavLink to="/contact"
            onMouseEnter={() => document.getElementById('contacts_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('contacts_dropdown').style.display = 'none'}
          >Contact</NavLink>
          <DropDown id='contacts_dropdown' style={{ display: 'none', width: '290px' }}
            onMouseEnter={() => document.getElementById('contacts_dropdown').style.display = 'block'}
            onMouseLeave={() => document.getElementById('contacts_dropdown').style.display = 'none'}
          >
            <ul>
              <li><a href="#"><b>CORPORATE GIFT CARDS</b></a></li>
              <li><a href="#"><b>JUST GROUP ENQUIRIES</b></a></li>
              <li><a href="#"><b>BRAND ENQUIRIES</b></a></li>
            </ul>
          </DropDown>
        </div>

        <div className='humburger'>
          {!open ? <RxHamburgerMenu onClick={() => setOpen(!open)} /> : <MdClose onClick={() => setOpen(!open)} />}
        </div>
      </NavbarDiv>
      {open && <Drawer ref={drawerRef} >

        <CustomAccordion />
      </Drawer>}

    </nav>
  )
}

export default Navbar;

const nav = styled.nav`
  width:100%;
}
`

const NavbarDiv = styled.div`
// position: fixed;

  width:100%;
  height: 110px;
  top:0;
  right:0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #FDF7E4;
  z-index:10;
  @media (max-width: 600px){
    height: 60px;
  }
  .humburger{
    display:none;
    // color:#ffff;
    color: #30497a;
    font-size:40px;
    @media (max-width: 600px){
      font-size:30px;
    }
    @media (max-width: 400px){
      font-size:20px;
    }
    @media (max-width: 300px){
      font-size:15px;
    }
    @media (max-width: 960px){
      display:block;
    }
    
  }
 

  .logo{
    height:100%;
    width:40%;
  }
.logo img {
    height: 100%;
    // width:100%;
    @media (max-width: 500px) {
    //  width:100%; 
    //  height: 80%;
    //  margin-top:10px;
    }
  }

 
.links {
    display: flex;
    gap: 20px;
    align-items: center;
    
  @media (max-width: 960px) {
    font-size: 0.9rem;
    display:none;
   
  }
  
  }
`;

const NavLink = styled(Link)`
 
  // color: #ffff;
  color: #30497a;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;
  padding:10px 10px;
  border-radius: 10px;
  
  &:hover {
    text-decoration : underline; 

    background-color: rgba(0, 0, 0, 0.2); 
  }
`;
const DropDown = styled.div`
 

  position: absolute;
  top: 70px;
  right: 10px;
  padding:10px;
  width: 570px;
  // background-color: #67729D;
  background-color: white;
  transition: border-bottom 0.3s ease;
  z-index:20;

  ul {
    list-style: none;
    margin:3px;
    padding: 5px;
  }

  li {
    padding: 5px;
    a:hover {
      text-decoration: underline;
    }
  }
  li a{
    text-decoration:none;
    // color: #ffff;
    color: #30497a;
   
  }
  li a b{
    text-decoration:none;
    // color: #fffff;
  }
`;

const Drawer = styled.div`
  position:absolute;
  width:85%;
  z-index:100;
  @media (min-width: 960px){
    display:none;
  }

`

