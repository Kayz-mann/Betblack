import React from 'react'
import styled from 'styled-components';
import footerlogo from '../svg/footerlogo.svg';

const FooterLayout = styled.div`
     justify-content: center;
     align-items: center;
     text-align: center;
     background-color: #000;
     color: #fff;
     padding-bottom: 150px;

     p{
         font-size: 22px;
         font-wieght: 400px;
     }
     

     @media (max-width: 1024px) {
        padding-top: 100px;
     }

     @media (max-width: 420px) {
        overflow: hidden;
        p{
            font-size: 15px;
        }

      
    
    }
    
`;

function Footer() {
    return (
        <FooterLayout id="footer">
            <img src={footerlogo} style={{ marginTop: '50px' }} alt="/" />
            <p>Decentralized with Hubs in India , Lagos, the Sun,<br />
               the Moon and the Sky.
            </p>
            <p>©2021 BetBlack Private Ltd. All rights reserved.</p>
        </FooterLayout>
    )
}

export default Footer
