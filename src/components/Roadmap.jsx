import React from 'react'
import styled from 'styled-components';
import roadmaplogo from '../svg/roadmaplogo.svg'

const RoadmapLayout = styled.div `
    display: grid;
    place-items: center;
    
`;

const RoadmapPositioning = styled.div `
     display: flex;
     justify-content: space-between;
     padding: 50px;
     margin: 100px;
     color: #fff;
`;

const ML = styled.div `
   margin-left: 100px;
   margin-right: 50px;
`;

const NegativeMT = styled.h1`
    margin-top: -50px;
    font-size: 50px;
`;

const TextMT = styled.p`
     margin-top: 60px;
     line-height: 40px;
`;

const GradientText = styled.h1`
     color:rgb(207,148,243);
     color: linear-gradient(90deg, rgba(207,148,243,1) 0%, rgba(160,236,253,1) 41%);
`;

function Roadmap() {
    return (
        <RoadmapLayout>
            <RoadmapPositioning>
            <span>
            <img src={roadmaplogo} alt="betblack/roadmap" />
            </span>
            <ML>
            <NegativeMT>BetBlack</NegativeMT>
            <TextMT>Betblack is an interesting gaming platform that offers you a chance to
                <br />
                make real money by using your skills in a ton of challenging minigames.
            </TextMT>
            <TextMT>A seamless user iterface and experience for Gamers & Developers, a
                <br />
                friendly Web-based smart-wallet, an end-to-end SDK and powerful APIs
                <br />
                give you everything you'll need to run your games on Betblack.
            </TextMT>
            <TextMT><span>Enter the next generation of internet economies:</span>BetBlack has an
                <br />
                authentic purpose for online gamers. Play games,build games,earn
                <br />
                gand trade virtual goods in the most popular gaming community online.
            </TextMT>
            </ML>
        </RoadmapPositioning>
        <GradientText>Roadmap coming soon</GradientText>
        </RoadmapLayout>
    )
}

export default Roadmap
