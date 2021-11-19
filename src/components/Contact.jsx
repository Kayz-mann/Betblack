import React from 'react';
import styled from 'styled-components';
import discord from '../svg/discord.svg';
import twitter from '../svg/twitter.svg';
import medium from '../svg/medium.svg';

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
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
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
    padding-top: -20px;
    
`;

const Image = styled.div`

  img{
      height: 50px;
  }
@media (max-width: 420px) {
padding: px;
    img{
        height: 20px;
        
    }
 }

 @media (max-width: 375px) {
    
       img{
           height: 8px;
           
       }
    }

 
    
`;

const Button = styled.button`
     color: #fff;
     background-color: #0f1016;
     padding: 12px;
     border-radius: 20px;
     margin: 60px;
     border: none;
     font-size: 22px;
     cursor: pointer;

     @media (max-width: 420px) {
        font-size: 8px;
        
     }

     @media (max-width: 385px) {
        font-size: 6px;
        
     }
`;

function Contact() {
    return (
        <>
        <ContactLayout>
            <ContactTitle>Contact</ContactTitle>
            <GradientText>Join our Community</GradientText>
            <Image>
            <img src={discord} style={{ cursor: 'pointer' }} alt="/" />
            <img src={twitter} style={{ marginLeft: '10px',  cursor: 'pointer' }} alt="/" />
            <img src={medium} style={{ marginLeft: '10px', cursor: 'pointer' }} alt="/" />
            </Image>
        </ContactLayout>
        <SecondLayout>
              <GradientText>Get in Touch</GradientText>
              <ButtonFlex>
                   <Button>Got a Question?</Button>
                   <Button>Career Openings</Button>
              </ButtonFlex>
        </SecondLayout>
        </>
    )
}

export default Contact
