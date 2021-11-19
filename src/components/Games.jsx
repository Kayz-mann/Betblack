import React from 'react'
import styled from 'styled-components';
import CoverflowImage from './CoverflowImage';
import GameRatings from './Games/GameRatings';
import LoadProgress from './Games/LoadProgess';
import android from '../svg/android.svg';
import apple from '../svg/apple.svg';
import otherplatform from '../svg/otherplatform.svg';
import firstgame from '../svg/firstgame.svg';
import secgame from '../svg/secgame.svg';

const GamesLayout = styled.div `
   display: flex;
   justify-content: space-between;
   padding-bottom: 150px;

   @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

 @media (max-width: 768px) {
    text-align: center;
}
`;

const ImageFlex = styled.div`
     flex: 0.5;
`;

const GameFlex = styled.span`
     flex: 0.5;
     display: flex;
     align-items: center;

     @media (max-width: 768px) {
        margin-left: 100px;
    }

    @media (max-width: 420px) {
        padding-right: 10px;
     }
`;
const RatingsFlex = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;

   
`;

const RatingsDescription = styled.span`
    color: #959595;
    font-size: 14px;
`;

const Game = styled.span`
    color: #fff;
    margin-left: 50px;
    margin-top: 120px;
    margin-left: 150px;

    @media (max-width: 768px) {
        margin-right: 150px;
        padding-bottom: 100px;
    }
`;

const GameIcons = styled.span`
    display: flex;
    margin-top: 30px;

    @media (max-width: 768px) {
        margin-left: 120px;
    }

    @media (max-width: 420px) {
        padding-right: 100px;
     }
`;

const Button = styled.button`
    padding: 8px;
    background-color: #00994A;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    margin-top: 30px;
    border: none;
    font-weight: 700;
`;

const ML = styled.span`
    margin-left: 16px;
`;

const MT = styled.span`
    margin-top: 250px;
    margin-left: -80px;
    
`;

const MS = styled.span`
   margin-top: -200px;
`;

const Blur = styled.span`
     display: flex;
     justify-content: space-between;
     position: absolute;
     height: 10px;

     @media (max-width: 1024px) {
        display: none;
    }
  
`;

const Margin = styled.span`
@media (max-width: 768px) {
    margin-right: 00px;
}
`;



function Games() {
    return (
        <GamesLayout>
            <Blur>
                <MS>
                <img src={firstgame} alt="/" />
                </MS>
                <MT>
                <img src={secgame} alt="/" />
                </MT>
            </Blur>
            <Game>
            <GameFlex>
            <LoadProgress />
            <RatingsFlex>
             <ML>
            <GameRatings />
             </ML>
            <h1 style={{ color: '#fff', marginLeft: '20px', fontSize: '14px' }}>Game Ratings</h1>
            </RatingsFlex>
            </GameFlex>
            <Margin>
            <span style={{ marginLeft: '30px' }}>
            <h1>Pro Pool</h1>
            <RatingsDescription>Stake & earn  real money when you play games with your <br/>
            friends and pals. Playing with friends is easy: sign and <br />
            you'll be able to challenge your friends straight from <br />
            the game</RatingsDescription>
            </span>
            </Margin>
            <GameIcons>
                <img  src={android} alt="/" />
                <img style={{ marginLeft: '20px' }} src={apple} alt="/" />
                <img style={{ marginLeft: '20px' }} src={otherplatform} alt="/" />
            </GameIcons>
            <Button>Coming Soon</Button>
            </Game>
            <ImageFlex>
              <CoverflowImage />
            </ImageFlex>
        </GamesLayout>
    )
}

export default Games
