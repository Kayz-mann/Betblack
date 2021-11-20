import React  from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./LeftNav.css"
import logo from '../../svg/logo.svg';

// import { HashLink as Link } from 'react-router-hash-link';




const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  z-index: 1px;
;

h2 {
    color: #fff;
    margin-right: 20px;
}
  a:-webkit-any-link {
    text-decoration: none;
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0px;
    height: 100vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
  
    justify-content: center;
    align-items: center;
    text-align: center;
    
    
    h2 {
        color: #000;
    }
  }

  @media (max-width: 418px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90vw;
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 89vw;
  }

  @media (max-width: 325px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 86vw;
  }



 
`;

const Flex = styled.span`
   display: flex;
   justify-content: space-between;
   width: 100%;
  //  margin-top: 30px;
   align-items: center;
   

  @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
     text-align: center;
     width: 100%;
   }
   
`;

const RightFlex = styled.span`
   display: flex;
   justify-content: space-between;
   align-items: center;

   h2{
     font-size: 18px;
     font-weight: 400;
     line-height: 48px;
   }

  @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
     text-align: center;
     width: 100%;
   }
   
`;
const MT = styled.span`
  align-items: center;
  color: #fff;

`;



const LeftNav = ({ open }) => {

return (

    <Ul open={open}>
    <Flex>
      <MT>
      <img src={logo} alt="logo" />
      </MT>
      <RightFlex>
      <Link to="/"><h2>Platform</h2></Link>
      <Link to="/"><h2>Roadmap</h2></Link>
      <Link to="/"><h2>Games</h2></Link>
      <Link to="/"><h2>Contact</h2></Link>
      <Link to="/careers"><h2>Careers</h2></Link>
      </RightFlex>
      </Flex>
    </Ul>
  )
}

export default LeftNav
