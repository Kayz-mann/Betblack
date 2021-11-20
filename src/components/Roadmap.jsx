import React from 'react';
import styled from 'styled-components';
import roadmaplogo from '../svg/roadmaplogo.svg';
// import firstplatform from '../svg/firstplatform.svg';
// import secplatform from '../svg/secplatform.svg';
import '../App.css';

const RoadmapLayout = styled.div `
    display: grid;
    place-items: center;
    padding-bottom: 200px;
    padding-top: 150px;

    @media (max-width: 420px) {
        overflow: hidden;
    }
   
    
`;

const RoadmapPositioning = styled.div `
     display: flex;
     justify-content: space-between;
     width: 70%;
     align-items: center;
     color: #fff;
     z-index: 1;
 

     @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 10px;
        font-weight: bold;
        
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`;



const NegativeMT = styled.h1`
    padding-top: 50px;
    font-size: 50px;
    font-weight: 700;

    @media (max-width: 1024px) {
        margin-top: 100px;
    }

`;

const TextMT = styled.p`
     margin-top: 10px;
     line-height: 40px;
     font-size: 16px;
  
     @media (max-width: 768px) {
        line-height: 50px;
    
    }

    @media (max-width: 420px) {
       
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
    
    }
`;

const Margin = styled.span`
   @media (max-width: 1024px) {
        // padding: 10px;
    
    }

`;

const Logo = styled.span`
      
    

      img{
          margin-top: 80px;
      }
      
      
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        display: grid;
        place-items: center;
        
    }


    @media (max-width: 420px) {
        img{
            height: 200px;
        }
    }
`

const GradientText = styled.h1`
     padding-top: 150px;
     font-weight: 700;
     font-size: 30px;
     background: rgba(207, 148, 254, 1.0);
     background: -webkit-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     background: -moz-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     background: linear-gradient(to right, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;

    

    
`;

const SmallText = styled.span`
background: rgba(207, 148, 254, 1.0);
background: -webkit-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
background: -moz-linear-gradient(left, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
background: linear-gradient(to right, rgba(207, 148, 254, 1.0), rgba(160, 236, 253, 1.0));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const Blur = styled.span`
     display: flex;
     justify-content: space-between;
     position: absolute;
    
     @media (max-width: 1024px) {
       display: none;
       
     }
     
`;

const FirstImage = styled.span`
    //  margin-top: -100px;
    //  margin-left: -0px;
    //  transform: rotate(-0deg);
     
`;

const SecondImage = styled.span`
    //  margin-right: -165px;
    //  transform: rotate(-0deg);
     
`;

function Roadmap() {
    return (
        <RoadmapLayout>
              <Blur>
                <FirstImage>
                {/* <img src={secplatform} alt="/" /> */}
                </FirstImage>
                <SecondImage>
                {/* <img src={firstplatform} alt="/" /> */}
                </SecondImage>
            </Blur>
            <RoadmapPositioning>
            <Logo>
            <img src={roadmaplogo} alt="betblack/roadmap" />
            </Logo>
            <Margin>
            <NegativeMT>BetBlack</NegativeMT>
            <TextMT>Betblack is an interesting gaming platform that offers you a chance to
                <br />
                make real money by using your skills in a ton of challenging minigames.
            </TextMT>
            
            <TextMT>A seamless user interface and experience for Gamers & Developers, a
                <br />
                friendly Web-based smart-wallet, an end-to-end SDK and powerful APIs
                <br />
                give you everything you'll need to run your games on Betblack.
            </TextMT>
            
            <TextMT>
            <SmallText> Enter the next generation of internet economies:</SmallText> BetBlack has an
                <br />
                authentic purpose for online gamers. Play games,build games,earn
                <br />
                gand trade virtual goods in the most popular gaming community online.
            </TextMT>
            </Margin>
            
        </RoadmapPositioning>
        <GradientText>Roadmap Coming Soon</GradientText>
        </RoadmapLayout>
    )
}

export default Roadmap
