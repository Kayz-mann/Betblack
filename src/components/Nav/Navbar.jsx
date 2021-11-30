import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import "./Navbar.css";





const FlexNav = styled.nav`
    display: flex;
    margin-top: 150px;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    
    
}

@media (max-width: 768px) {
  justify-content: space-between;
  width: 100%;
  display: flex;

  .cart {
    align-items: center;
    padding-top: 20px;
    
  }
}

.cart {
  padding-right: 30px;
}

}
`;

const RightNav = styled.nav`
   display: flex;
   padding: 0px;
   align-items: center;
   

   li img {
     height: 30px;
     padding-right: 10px;
     padding-top: 5px;
     align-items: center;
     
   }
}
`;

const RightLog = styled.nav`
margin-top: 20px;
list-style: none;
  @media (max-width: 768px) {
    display: none;
}
`;

const TopBar = styled.div`
align-items: center;
text-align: center;
text-transform: uppercase;
margin-bottom: 20px;
width: 100%;
justify-content: space-between;

z-index: 1;
position: fixed;
/* Animations for nav*/
 transition-timing-function: ease-in;
 transition: all 0.5s;

 img {
  justify-content: center;
  align-items: center;
  object-fit: contain;
  height: 100px;
  width: 100%;
  z-index: -999;
  
}

 h1 {
  margin-bottom: 10px;
  text-align: center;
}

 .MuiDivider-root {
  position: center center;
  justify-content: center;
  
}

}
`;

export const LogFlex = styled.span`
    display: flex;
  @media (max-width: 768px) {
    display: flex;
    float:left;
    justify-content: left;
}
`;

const LogRoute = styled.span`
    display: flex;
    margin-right: 10px;
    margin-left: 15px;
    text-transform: uppercase;
    color: #434343
    text-decoration: none;
    
    .cOodSy a:-webkit-any-link{
      margin-right: 10px !important;
      margin-left: 15px;
      color: #434343 !important;
    }
    a:-webkit-any-link {
      text-decoration: none !important;
    }
    span {
      display: flex;
      text-decoration: none;
    }
  @media (max-width: 768px) {
    display: flex;
}
`;

export const Margin = styled.span`
    margin-right: 10px;
    color: #434343;

    link {
      color: black;
    }
`;

export const TopMargin = styled.span`
    margin-right: 10px;
    color: #434343;
    text-transform: uppercase;
    display: flex;

    li{
      margin-right: 20px;
    }

    link {
      color: black;
      margin-right: 50px;
    }
`;












const Navbar = () => {
 const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  

  

  return (
    <div className={`nav ${show && "nav__black"}`}>
       <TopBar>
           {/* <Link to="/"><img src="#" alt="/logo" /></Link> */}
           <h2>hi</h2>
       </TopBar>
     </div>
    
    
  )
}

export default Navbar
