import React from 'react';
import styled from 'styled-components';
import discord from '../svg/discord.svg';
import twitter from '../svg/twitter.svg';
import bigtelegram from '../svg/bigtelegram.svg';
import { Link } from 'react-router-dom';

const ContactLayout = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #000;
    object-fit: contain;
    margin-top: -20px;
    padding-bottom: 150px;

    

   
`;



const ContactTitle = styled.h2`
     color: #9a9999;
     font-size: 20px;
     font-weight: 400px;
`;

const GradientText = styled.h1`
    background: rgba(207, 148, 254, 1.0);
    background: -webkit-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
    background: -moz-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
    background: linear-gradient(to right, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     font-size: 50px;
   
     @media (max-width: 768px) {
        font-size: 30px;
     }

     
`;

const SecondLayout = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #02050c;
    object-fit: contain;
    margin-top: -40px;
    padding-top: 100px;
    padding-bottom: 150px;
`;

const ButtonFlex = styled.div`
    display: flex;
    justify-content: center;
    

    @media (max-width: 420px) {
        
        flex-direction: column;
        overflow: hidden;
        
     }
    
`;

const Image = styled.div`
   justify-content: space-around;
   margin: auto;
   width: 30%;
   display: flex;
//    justify-content: center;
  img{
      height: 50px;
    //   display: flex;
    // justify-content: space-between;
    // width: 50%;
    
  }
// @media (max-width: 420px) {
// padding: px;
//     img{
//         height: 20px;
//         overflow: hidden;
        
//     }
//  }



 
    
`;

const Button = styled.button`
     color: #fff;
     background-color: #0f1016;
     padding-left: 12px;
     padding-right: 12px;
     padding-top: 8px;
     padding-bottom: 8px;
     

     a li{
        text-decoration: none;
        list-style: none;
        color: #fff;
     }
     
     border-radius: 20px;
     margin: 60px;
     border: none;
     font-size: 22px;
     cursor: pointer;

     @media (max-width: 420px) {
        font-size: 14px;
        
     }

   
`;


function Contact() {
    return (
        <>
        <ContactLayout id="contact">
            <ContactTitle>Contact</ContactTitle>
            <GradientText>Join our Community</GradientText>
            <Image>
            <img src={discord} style={{ cursor: 'pointer' }} alt="/" />
            <img src={twitter} style={{  marginLeft: 35, marginRight: 35, cursor: 'pointer' }} alt="/" />
            <img src={bigtelegram} style={{ cursor: 'pointer', color: "#fff", height: 55, }} alt="/" />
            </Image>
        </ContactLayout>
        <SecondLayout>
              <GradientText>Get in Touch</GradientText>
              <ButtonFlex>
                   <Button>
                       <a href="mailto:kayzmann2@gmail.com" style={{ textDecoration: 'none', listStyle: 'none', color: "#fff" }}>Got a Question?</a>
                   </Button>
                   <Button><Link to="/careers" style={{ textDecoration: 'none', listStyle: 'none', color: "#fff" }}>Career Openings</Link></Button>
              </ButtonFlex>
        </SecondLayout>
        </>
    )
}

export default Contact
