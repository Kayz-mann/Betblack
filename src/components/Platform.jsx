import React from 'react';
import styled from 'styled-components';
import platformlogo from '../svg/platformlogo.svg';
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
   padding-bottom: 120px;

   img{
       padding-top: 10px;
       height: 130px;
   }

   @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: -50px;
    
  }

  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 20px;
    
  }

  
`;

const GradientText = styled.h1`
     font-weight: 700;
     background: rgba(207, 148, 254, 1.0);
     background: -webkit-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     background: -moz-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     background: linear-gradient(to right, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     font-size: 70px;

     @media (max-width: 1024px) {
       font-size: 55px;
    }

    @media (max-width: 768px) {
        font-size: 35px;
      
    }

    @media (max-width: 420px) {
        // font-size: 20px;
        
     }
`;

const SubGradientText = styled.h1`
background: rgba(255, 255, 255, 1.0);
background: -webkit-linear-gradient(right, rgba(255, 255, 255, 1.0), rgba(160, 236, 253, 1.0));
background: -moz-linear-gradient(right, rgba(255, 255, 255, 1.0), rgba(160, 236, 253, 1.0));
background: linear-gradient(to left, rgba(255, 255, 255, 1.0), rgba(160, 236, 253, 1.0));
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     style: normal;
     font-size: 25px;
     line-height: 28.73px;
     font-weight: 500;
     marin-top: -10px;

     @media (max-width: 1024px) {
        // font-size: 25px;
     }

     @media (max-width: 768px) {
        // font-size: 15px;
      
    }

    @media (max-width: 420px) {
        // font-size: 14px;
        
     }
`;

const SmallGradient = styled.button`
     color: #867AF6;
     font-weight: 700;
     style: normal;
     font-size: 22px;
     background-color: #fff;
     border-radius: 8px;
     padding: 15px;
     cursor: pointer;
     justify-content: center;
     text-align: center;
     border : none;
     margin-top: 20px;

     @media (max-width: 768px) {
        font-size: 15px;
        margin-top: 20px;
      
    }
`;




function Platform() {
    return (
        <>
        <PlatformLayout>
          <img className="platformlogo" src={platformlogo} alt="betblack" />
            <GradientText>Next-Gen Gaming for Everyone</GradientText>
            <SubGradientText>We are building a new dimension where gaming is fun, accessible<br /> and for the benefit of all participants</SubGradientText>
            <SmallGradient>Get an early invite</SmallGradient>
        </PlatformLayout>
        
        </>
    )
}

export default Platform

