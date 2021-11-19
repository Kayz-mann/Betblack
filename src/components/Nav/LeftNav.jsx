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
    top: 0;
    // left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 0.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    opacity: 98%;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h2 {
        color: #000;
    }
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
      {/* <Link to="/"><Link to="/">About</h2></Link>
      <Link  to="/"><h2>Portfolio</h2></Link>
      <Link  to="/"><h2>Skills</h2></Link>
      <Link to="/"><h2>Blog</h2></Link> */}
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
