import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BrandContext } from '../contextApi/BrandContextProvider';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AccordionWrapper = styled.div`
  width: 95%;
  z-index:120;
`;

const AccordionItem = styled.div`
//   margin-bottom: 1px;
border: 1px solid #ffff;

  
`;

const AccordionButton = styled.button`

  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  outline: none;
  div{
    font-size: 20px;
    color: #30497a;
    
  }
  div a{
    text-decoration: none;
    color: #30497a;
  }
`;


const AccordionContent = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.5s ease;
  
`;

const NestedLink = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #30497a;
  background-color:#ffff;
  border: 1px solid #f0f0f0;
`;

const NestedAccordionContent = styled.div`
//   margin-left: 20px;

`;

const CustomAccordion = () => {
    const { brands } = useContext(BrandContext)
    const [openIndex, setOpenIndex] = useState(null);
    const [openNestedIndex, setOpenNestedIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const toggleNestedAccordion = (nestedIndex) => {
        setOpenNestedIndex(openNestedIndex === nestedIndex ? null : nestedIndex);
    };

    return (
        <div style={{ height: '100%', width: "100%" }}>
            <AccordionWrapper>
                <AccordionItem>
                    <AccordionButton onClick={() => toggleAccordion(0)}>

                        <div ><a href=""> About </a></div> <div>{openIndex === 0 ? '-' : '+'}</div>
                    </AccordionButton>
                    <AccordionContent isOpen={openIndex === 0}>
                        <NestedAccordionContent>
                            <NestedLink href="#">Our History</NestedLink>
                            {/* <NestedLink href="#">Our People</NestedLink> */}
                            <AccordionItem style={{ backgroundColor: '#ffff' }}>
                                <AccordionButton onClick={() => toggleNestedAccordion(0)}>

                                    <div style={{ fontSize: '16px', paddingLeft: '10px' }}><a href="">  Our People </a></div> <div>{openNestedIndex === 0 ? '-' : '+'}</div>
                                </AccordionButton>
                                <AccordionContent isOpen={openNestedIndex === 0}>
                                    <NestedAccordionContent>
                                        <NestedLink style={{ backgroundColor: "#DDDDDD", paddingLeft: '35px' }} href="#">Board of Directors</NestedLink>
                                        <NestedLink style={{ backgroundColor: "#DDDDDD", paddingLeft: '35px' }} href="#">Senior Leaders</NestedLink>

                                    </NestedAccordionContent>
                                </AccordionContent>
                            </AccordionItem>
                            {/* <NestedLink href="#">Our Investor</NestedLink> */}
                            <AccordionItem style={{ backgroundColor: '#ffff' }}>
                                <AccordionButton onClick={() => toggleNestedAccordion(1)}>

                                    <div style={{ fontSize: '16px', paddingLeft: '10px' }}><a href="">Our Investor</a></div> <div>{openNestedIndex === 1 ? '-' : '+'}</div>
                                </AccordionButton>
                                <AccordionContent isOpen={openNestedIndex === 1}>
                                    <NestedAccordionContent>
                                        <NestedLink style={{ backgroundColor: "#DDDDDD", paddingLeft: '35px' }} href="#">PMV</NestedLink>

                                    </NestedAccordionContent>
                                </AccordionContent>
                            </AccordionItem>

                        </NestedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton onClick={() => toggleAccordion(1)}>
                        <div><a href="">Our Brands</a></div> <div>{openIndex === 1 ? '-' : '+'}</div>
                    </AccordionButton>
                    <AccordionContent isOpen={openIndex === 1}>
                        <NestedAccordionContent>
                            {brands.catalogGroupView?.map((brand) => (
                                <NestedLink a target="_blank" rel="noopener noreferrer" href={brand.uniqueID}>{brand.name}</NestedLink>
                            ))}

                        </NestedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton onClick={() => toggleAccordion(2)}>
                        <div><a href="">Better Practices</a></div> <div>{openIndex === 2 ? '-' : '+'}</div>
                    </AccordionButton>
                    <AccordionContent isOpen={openIndex === 2}>
                        <NestedAccordionContent>
                            <NestedLink href="#">Our Commitment</NestedLink>

                        </NestedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton onClick={() => toggleAccordion(3)}>
                        <div><a href="">Careers</a></div> <div>{openIndex === 3 ? '-' : '+'}</div>
                    </AccordionButton>
                    <AccordionContent isOpen={openIndex === 3}>
                        <NestedAccordionContent>
                            <NestedLink href="#">Retail Stores</NestedLink>
                            <NestedLink href="#">Support Office</NestedLink>
                            <NestedLink href="#">Distribution Centre</NestedLink>
                            <NestedLink href="#">Job Search</NestedLink>
                            <NestedLink href="#">Existing Applicants</NestedLink>

                        </NestedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton onClick={() => toggleAccordion(4)}>
                        <div><a href="">Contact</a></div> <div>{openIndex === 4 ? '-' : '+'}</div>
                    </AccordionButton>
                    <AccordionContent isOpen={openIndex === 4}>
                        <NestedAccordionContent>
                            <NestedLink href="#">Corporate Gift Cards</NestedLink>
                            <NestedLink href="#">Just Group Enquiries</NestedLink>
                            <NestedLink href="#">Brand Enquiries</NestedLink>
                        </NestedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
            </AccordionWrapper >
        </div>
    );
};

export default CustomAccordion;
