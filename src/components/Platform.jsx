import React from 'react';
import styled from 'styled-components';
import platformlogo from '../svg/platformlogo.svg';
import firstplatform from '../svg/firstplatform.svg';
import secplatform from '../svg/secplatform.svg';
import '../App.css'


const PlatformLayout = styled.div`
   justify-content: center;
   text-align: center;
   padding-top: 20px;
   align-items: center;
   flex: 1;
   display: flex;
   flex-direction: column;
   z-index: 1;
   padding-bottom: 150px;

   @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: -50px;
    
  }

  
`;

const GradientText = styled.h1`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
     style: normal;
     font-size: 70px;

     @media (max-width: 1024px) {
       font-size: 55px;
    }

    @media (max-width: 768px) {
        font-size: 35px;
      
    }

    @media (max-width: 420px) {
        font-size: 20px;
        
     }
`;

const SubGradientText = styled.h1`
     color: rgb(255,255,255);
     color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(160,236,253,1) 0%);
     style: normal;
     font-size: 25px;
     marin-top: -20px;

     @media (max-width: 1024px) {
        font-size: 25px;
     }

     @media (max-width: 768px) {
        font-size: 15px;
      
    }

    @media (max-width: 420px) {
        font-size: 14px;
        
     }
`;

const SmallGradient = styled.button`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
     style: normal;
     font-size: 22px;
     background-color: #fff;
     border-radius: 8px;
     padding: 15px;
     cursor: pointer;
     flex: 0;
     justify-content: center;
     text-align: center;
     border : none;

     @media (max-width: 768px) {
        font-size: 15px;
        margin-top: 20px;
      
    }
`;

const Blur = styled.span`
     display: flex;
     justify-content: space-between;
     position: absolute;
     z-index: 0;
     margin-top: 150px;
     height: 10px;
     

     @media (max-width: 1024px) {
       justify-content: center;
       
     }
     
`;


function Platform() {
    return (
        <>
        <PlatformLayout>
            <Blur>
                <span>
                <img src={secplatform} alt="/" />
                </span>
                <span>
                <img src={firstplatform} alt="/" />
                </span>
            </Blur>
            <img className="platformlogo" src={platformlogo} alt="betblack" />
            <GradientText>Next-Gen gaming for everyone</GradientText>
            <SubGradientText>We are building a new dimension where gaming is fun, accessible<br /> and for the benefit of all participants</SubGradientText>
            <SmallGradient>Get an early invite</SmallGradient>
        </PlatformLayout>
        
        </>
    )
}

export default Platform

