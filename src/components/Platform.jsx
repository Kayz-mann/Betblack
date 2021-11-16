import React from 'react';
import styled from 'styled-components';
import platformlogo from '../svg/platformlogo.svg';


const PlatformLayout = styled.div`
   justify-content: center;
   text-align: center;
   margin-top: 20px;
   align-items: center;
   flex: 1;
   display: flex;
   flex-direction: column;

  @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
     text-align: center;
     
   }
   
`;

const GradientText = styled.h1`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
     font-family: sans-serif;
     style: normal;
     font-size: 70px;
`;

const SubGradientText = styled.h1`
     color: rgb(255,255,255);
     color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(160,236,253,1) 0%);
     font-family: sans-serif;
     style: normal;
     font-size: 25px;
     marin-top: -20px;
`;

const SmallGradient = styled.h3`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
     font-family: sans-serif;
     style: normal;
     font-size: 22px;
     background-color: #fff;
     border-radius: 8px;
     padding: 15px;
     cursor: pointer;
     flex: 0;
     justify-content: center;
     text-align: center;
`;

function Platform() {
    return (
        <>
        <PlatformLayout>
            <img src={platformlogo} alt="betblack" />
            <GradientText>Next gen gaming for everyone</GradientText>
            <SubGradientText>We are building a new dimension where gaming is fun, accessible<br /> and for the benefit of all participants</SubGradientText>
            <SmallGradient>Get an early invite</SmallGradient>
        </PlatformLayout>
        
        </>
    )
}

export default Platform

