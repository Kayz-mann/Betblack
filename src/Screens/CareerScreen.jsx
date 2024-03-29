import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Burger from '../components/Nav/Burger';
import careerpic from '../svg/careerpic.svg';
import careers1 from '../svg/careers1.svg';
import careers2 from '../svg/careers2.svg';
import careers3 from '../svg/careers3.svg';
import careers4 from '../svg/careers4.svg';
import careers5 from '../svg/careers5.svg';
import careers6 from '../svg/careers6.svg';

const CareersLayout = styled.div`
     background-color: #000;
     pading-top: 20px;
    
    
    display: flex;
    flex-direction: column;
    
     
`;

const Content = styled.div`
justify-content: center;
align-items: center;
// padding-left: 150px;
// padding-right: 150px;
    // width: 100%;
    justify-content: center;
    display: grid;
    place-items: center;

    @media (max-width: 1024px) {
        padding-left: 50px;
        padding-right: 50px;
    }
    
`;

const Title = styled.h1`
    color: #fff;
    margin-top: 100px;
    font-size: 55px;
    font-weight: 500;
    width: 70%;
   @media (max-width: 1024px) {
        text-align: center;
        font-size: 30px;
    }
`;

const SmallTitle = styled.h1`
    color: #fff;
    padding-top: 10px;
    font-size: 20px;
    line-height: 40px;
    // padding-bottom: 10px;
    width: 65%;
   @media (max-width: 1024px) {
      text-align: center;
      font-size: 15px;
   }

`;

const Description = styled.p`
    color: #fff;
    margin-top: 50px;
    font-size: 20px;
    line-height: 40px;
    font-weight: normal;
    width: 65%;


    @media (max-width: 1024px) {
        text-align: center;
        font-size: 16px;
        padding: 0;
    }

    @media (max-width: 380px) {
        line-height: 20px;
    }


`;

const OptionalDescription = styled.p`
    color: #fff;
    padding-bottom: 40px;
    font-size: 20px;
    width: 65%;

    @media (max-width: 1024px) {
        text-align: center;
        font-size: 16px;
    }
`;

const Button = styled.span`
      padding: 18px;
      color: #fff;
      font-size: 22px;
      background-color: #0d0c0c;
      border-radius: 25px;
      margin-top: 50px;
      margin-bottom: 50px;
      border: none;
      

      @media (max-width: 1024px) {
        font-size: 15px;
    }
`

const ButtonContainer = styled.div`
      align-items: center;
      justify-content: center;
      display: flex;
`;

const Image = styled.div`
     display: grid;
     place-items: center;
     padding-top: -250px;
     padding-bottom: 100px;

     img{
         object-fit: contain;
         height: 650px;
     }

     @media (max-width: 768px) {
        img{
            object-fit: contain;
            height: 300px;
            padding-top: 150px;
        }
    }

    @media (max-width: 420px) {
        img{
            
            height: 250px;
        }
    }

    
    @media (max-width: 380px) {
        img{
            
            height: 230px;
        }
    }
`;

const List = styled.ul`
    color: #fff;
    margin-top: 5px;
    font-size: 20px;
    line-height: 40px;
    width: 65%;
    
    @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 25px;
    }

`;

const Svg = styled.span`
    z-index: 2;
    margin-top: -650px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const SecondSvg = styled.span`
    margin-top: -850px;
    margin-bottom: -500px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const ThirdSvg = styled.span`
    margin-top: -850px;
    margin-bottom: -500px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    width: 99%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

function CareerScreen() {
    return (
        <CareersLayout>
            <Burger />
            <Content>
                <Title>Join us in building the next generation<br /> of the Gaming industry</Title>
            <Description>BetBlack is building a new universe where the gaming industry is fun, accessible and for the benefit of all <br/>participants</Description>
            <ButtonContainer>
            <Button>See Open Positions</Button>
                </ButtonContainer>
                <Svg>
                    <img src={careers1} alt="careers" />
                    <img src={careers2} alt="careers" />
                </Svg>
            <Image>
            <img src={careerpic} style={{ objectFit: 'contain' }} alt="/web3/betblack" />
            </Image>
            <Title>We're driving Web3 adoption by making blockchain easy, fun and powerful for<br/> users and developers
            </Title>
                <SecondSvg>
                    <img src={careers3} alt="careers" />
                    <img src={careers4} alt="careers" />
                </SecondSvg>
            <Description>We're driven by three core values of </Description>
            <SmallTitle>Love</SmallTitle>
            <OptionalDescription>We are commited to living with loving intentions and helping the world become a more loving place </OptionalDescription>
            <SmallTitle>Openness</SmallTitle>
            <OptionalDescription>We are commited to living with a more free, open, equitable and inclusive internet, and a more free open,<br/>equitable and inclusive world</OptionalDescription>
            <SmallTitle>Play</SmallTitle>
            <OptionalDescription>We are commited to a world where everyone gets to play, create and express themselves freely.</OptionalDescription>
                <Title>These are the traits we embody to realize our vision and mission:</Title>
                <ThirdSvg>
                    <img src={careers5} alt="careers" />
                    <img src={careers6} alt="careers" style={{ marginTop: '750px '}} />
                </ThirdSvg>
            <List>
                <li>Produce world-class products and delight our community </li>
                <li>Act like an owner, deliver impact, and collaborate </li>
                <li>Be an energy giver and take care of each other</li>
                <li>Be candid and kind </li>
                <li>Focus on simplicity</li>
                <li>Be transparent</li>
                <li>Be curious</li>
                <li>Embrace change</li>
                <li>Continuosly reflect. Continuosly improve</li>
                <li>Respect the diverse experience of all teammates and community members</li>
                <li>Live well and be kind to yourself</li>
            </List>
            <Title>What we offer</Title>
            <Description>
                We pay competitive salaries, offer equity to every employee, and invest in everyone's personal development.<br/>
                We're conscious about mental health, have modern vacation policies, and embrace remote work. Our team is
                made of wonderful people who have built and sold successful companies, launched amazing products, and<br/>
                have rich experience in infrastructure, architecture, blockchain, games,finance,investing,strategy,consulting<br/>
                design,marketing. community and more.
                <br/>
                <br/>
                We're looking for passionate people who align with our mission and will expand our culture ad expertise, If
                you're looking for the chance to deliver massive impact at a fast moving startup committed to redefining the<br/>
                Internet as we know it, we'd love to hear from you.
            </Description>
            <ButtonContainer>
            <Button>See Open Positions</Button>
            </ButtonContainer>
            </Content>
            <Footer />
        </CareersLayout>
    )
}

export default CareerScreen
