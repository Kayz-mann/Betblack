import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';



const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 999;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    // padding-top: 20px;
    margin-left: 20px;
    padding: 8px;
    border-radius: 999px;
    color: #1E133C;
    
    
  }
  

  div {
    width: 2.0rem;
    height: 0.1rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-left: ${({ open }) => open ? '4px' : '0px'};
    

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Spacing = styled.div`
   padding-top: 20px;
`;

const NavMargin = styled.div`
   padding-left: -30px;
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

return (
    <Spacing>
      <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMargin>
      <LeftNav open={open}/>
      </NavMargin>
    </Spacing>
  )
}

export default Burger
