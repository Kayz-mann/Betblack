import React from 'react';
import styled from 'styled-components';
import roadmaplogo from '../svg/roadmaplogo.svg';
import '../App.css';

const RoadmapLayout = styled.div `
    display: grid;
    place-items: center;
    padding-bottom: 150px;
    
`;

const RoadmapPositioning = styled.div `
     display: flex;
     justify-content: space-between;
     
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
        font-size: 14px;
    }
`;



const NegativeMT = styled.h1`
    padding-top: 50px;
    font-size: 50px;

    @media (max-width: 1024px) {
        margin-top: 100px;
    }

`;

const TextMT = styled.p`
     margin-top: 60px;
     line-height: 40px;
     @media (max-width: 768px) {
        line-height: 50px;
    
    }
`;

const Margin = styled.span`
    flex: 0.5;
    @media (max-width: 1024px) {
        padding: 60px;
    
    }

`;

const Logo = styled.span`
      flex: 0.5;

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
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);

    
`;

const SmallText = styled.span`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
`;

function Roadmap() {
    return (
        <RoadmapLayout>
            <RoadmapPositioning>
            <Logo>
            <img src={roadmaplogo} alt="betblack/roadmap" />
            </Logo>
            <Margin>
            <NegativeMT>BetBlack</NegativeMT>
            <TextMT>Betblack is an interesting gaming platform that offers you a chance to
                <br />
                make real money by using your skills in a ton of challenging minigames.
            
            A seamless user interface and experience for Gamers & Developers, a
                <br />
                friendly Web-based smart-wallet, an end-to-end SDK and powerful APIs
                <br />
                give you everything you'll need to run your games on Betblack.
            
            <SmallText> Enter the next generation of internet economies:</SmallText> BetBlack has an
                <br />
                authentic purpose for online gamers. Play games,build games,earn
                <br />
                gand trade virtual goods in the most popular gaming community online.
            </TextMT>
            </Margin>
            
        </RoadmapPositioning>
        <GradientText>Roadmap coming soon</GradientText>
        </RoadmapLayout>
    )
}

export default Roadmap
