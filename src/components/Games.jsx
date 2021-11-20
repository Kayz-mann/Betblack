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
import divider from '../svg/divider.svg';



const GamesLayout = styled.div `
   display: flex;
   justify-content: space-between;
   padding-bottom: 150px;
   overflow: hidden;
   
   @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

 @media (max-width: 768px) {
    text-align: center;
}

@media (max-width: 420px) {
    overflow: hidden;
}
`;

const ImageFlex = styled.div`
     flex: 0.5;

     @media (max-width: 768px) {
         padding-top: 100px;
    }
`;

const GameFlex = styled.span`
     flex: 0.5;
     display: flex;
     align-items: center;

     @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }

   

     @media (max-width: 1024px) {
        justify-content: center;
        text-align: center;
        align-items: center;
        
    }
`;
const RatingsFlex = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
   

   
`;

const RatingsDescription = styled.span`
    color: #959595;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    flex: 0.4;

    @media (max-width: 1024px) {
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    @media (max-width: 420px) {
    //    padding-left: 18px;
    //    padding-right: 18px;
    }

   
`;


const Game = styled.span`
    color: #fff;
    margin-top: 120px;
    padding-left: 130px;
    padding-right: 130px;

    

    @media (max-width: 1024px) {
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    
`;

const GameIcons = styled.span`
    display: flex;
    margin-top: 30px;

    

    

     @media (max-width: 1024px) {
        justify-content: center;
        text-align: center;
        align-items: center;
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
   h1{
       font-weight: 700;
       font-size: 32px;
       
    @media (max-width: 420px) {
        justify-content: center;
        text-align: center;
        align-items: center;
    }
}

@media (max-width: 1024px) {
    justify-content: center;
    text-align: center;
    align-items: center;
}

   
`;

const Ratings = styled.span`
padding-left: 55px;
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
             <h1 style={{ color: '#fff', marginLeft: '20px', fontSize: '14px' }}>Game Ratings</h1>
            </ML>
            <Ratings>
             <GameRatings />
             </Ratings>
            </RatingsFlex>
            </GameFlex>
            <Margin>
            <span style={{ marginLeft: '30px' }}>
            <h1>Pro Pool</h1>
            
            <RatingsDescription>Stake & earn  real money when you play games with<br/> your
            friends and pals. Playing with friends is easy:<br/> sign and 
            you'll be able to challenge your friends<br/> straight from 
            the game</RatingsDescription>
            </span>
           </Margin>
           <div></div>
            <img src={divider} alt="/divider" />
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
