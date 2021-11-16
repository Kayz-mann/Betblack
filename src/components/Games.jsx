import React from 'react'
import styled from 'styled-components';
import CoverflowImage from './CoverflowImage';
import GameRatings from './Games/GameRatings';
import LoadProgress from './Games/LoadProgess';
import android from '../svg/android.svg';
import apple from '../svg/apple.svg';
import otherplatform from '../svg/otherplatform.svg';

const GamesLayout = styled.div `
   display: flex;
   justify-content: space-between;
`;

const ImageFlex = styled.div`
     flex: 0.5;
`;

const GameFlex = styled.span`
     flex: 0.5;
     display: flex;
     align-items: center;
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
`;

const GameIcons = styled.span`
    display: flex;
    margin-top: 30px;
`;

const Button = styled.button`
    padding: 12px;
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



function Games() {
    return (
        <GamesLayout>
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
            <span style={{ marginLeft: '30px' }}>
            <h1>Pro Pool</h1>
            <RatingsDescription>Stake & earn  real money when you play games with your <br/>
            friends and pals. Playing with friends is easy: sign and <br />
            you'll be able to challenge your friends straight from <br />
            the game</RatingsDescription>
            </span>
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
