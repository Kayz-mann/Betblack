import React from 'react';
import styled from 'styled-components';
import discord from '../svg/discord.svg';
import twitter from '../svg/twitter.svg';
import medium from '../svg/medium.svg';
import { Grade } from '@mui/icons-material';
const ContactLayout = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #000;
    height: 50vh;
    object-fit: contain;
    margin-top: -20px;
`;



const ContactTitle = styled.h2`
     color: #9a9999;
     font-size: 20px;
`;

const GradientText = styled.h1`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
     font-size: 50px;
     padding-top: 40px;
     margin-bottom 80px;
`;

const SecondLayout = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #02050c;
    height: 50vh;
    object-fit: contain;
    margin-top: -40px;
`;

const ButtonFlex = styled.div`
    display: flex;
    justify-content: center;
    
`;

const Button = styled.button`
     color: #fff;
     background-color: #0f1016;
     padding: 18px;
     border-radius: 18px;
     margin: 60px;
     border: none;
     font-size: 22px;
     cursor: pointer;
`;

function Contact() {
    return (
        <>
        <ContactLayout>
            <ContactTitle>Contact</ContactTitle>
            <GradientText>Join our community</GradientText>
            <img src={discord} style={{ cursor: 'pointer' }} alt="/" />
            <img src={twitter} style={{ marginLeft: '80px', height: '60px', cursor: 'pointer' }} alt="/" />
            <img src={medium} style={{ marginLeft: '80px', cursor: 'pointer' }} alt="/" />
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
