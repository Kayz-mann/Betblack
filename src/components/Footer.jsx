import React from 'react'
import styled from 'styled-components';
import footerlogo from '../svg/footerlogo.svg';

const FooterLayout = styled.div`
     justify-content: center;
     align-items: center;
     text-align: center;
     background-color: #000;
     height: 50vh;
     color: #fff;
    
`;

function Footer() {
    return (
        <FooterLayout>
            <img src={footerlogo} style={{ marginTop: '50px' }} alt="/" />
            <p>Decentralized with Hubs in India , Lagos the Sun,<br />
               the Moon and the Sky.
            </p>
            <p>©2021 BetBlack Private Ltd. All rights reserved.</p>
        </FooterLayout>
    )
}

export default Footer
