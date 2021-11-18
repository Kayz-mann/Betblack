import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Burger from '../components/Nav/Burger';
import careerpic from '../svg/careerpic.svg';

const CareersLayout = styled.div`
     background-color: #000;
     pading-top: 20px;
     justify-content: center;
     align-items: center;
     width: 100%;
     
`;

const Content = styled.div`
   
    
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
    // align-items: center;
    // justify-content: center;
    // display: flex;
    // flex-direction: column;

    @media (max-width: 1024px) {
        text-align: center;
        font-size: 30px;
    }
`;

const SmallTitle = styled.h1`
color: #fff;
padding-top: 10px;
font-size: 20px;
// align-items: center;
// justify-content: center;
// display: flex;
// flex-direction: column;
padding-bottom: 10px;

@media (max-width: 1024px) {
    text-align: center;
    font-size: 15px;
}

`;

const Description = styled.p`
    color: #fff;
    margin-top: 50px;
    font-size: 20px;
    // align-items: center;
    // justify-content: center;
    // display: flex;

    @media (max-width: 1024px) {
        text-align: center;
        font-size: 16px;
        padding: 0;
    }

`;

const OptionalDescription = styled.p`
    color: #fff;
    padding-top: 10px;
    padding-bottom: 40px;
    font-size: 20px;

    @media (max-width: 1024px) {
        text-align: center;
    }
`;

const Button = styled.span`
      padding: 18px;
      color: #fff;
      font-size: 22px;
      background-color: #0d0c0c;
      border-radius: 25px;
      margin-top: 50px;
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
     padding-top: 150px;
     padding-bottom: 100px;

     @media (max-width: 1024px) {
        display: none;
       
    }
`;

const List = styled.ul`
    color: #fff;
    margin-top: 5px;
    font-size: 20px;
    line-height: 40px;
    

`;

function CareerScreen() {
    return (
        <CareersLayout>
            <Burger />
            <Content>
            <Title>Join us in building the next generation <br/>of the gaming industry</Title>
            <Description>BetBlack is building a new universe where the gaming industry is fun, accessible and for the benefit of all <br/>participants</Description>
            <ButtonContainer>
            <Button>See Open Positions</Button>
            </ButtonContainer>
            <Image>
            <img src={careerpic} style={{ objectFit: 'contain' }} alt="/web3/betblack" />
            </Image>
            <Title>We're driving Web3 adoption by making <br/>
             blockchain easy, fun and powerful for<br/> users and developers
            </Title>
            <Description>We're driven by three core values of </Description>
            <SmallTitle>Love</SmallTitle>
            <OptionalDescription>We are commited to living with loving intentions and helping the world become a more loving place </OptionalDescription>
            <SmallTitle>Openness</SmallTitle>
            <OptionalDescription>We are commited to living with a more free, open, equitable and inclusive internet, and a more free open,<br/>equitable and inclusive world</OptionalDescription>
            <SmallTitle>Play</SmallTitle>
            <OptionalDescription>We are commited to a world where everyone gets to play, create and express themselves freely.</OptionalDescription>
            <Title>These are the traits we embody to realize<br/> our vision and mission:</Title>
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
                We're conscious about mental health, have modern vacation policies, and embrace remote work. Our team is<br/>
                made of wonderful people who have built and sold successful companies, launched amazing products, and<br/>
                have rich experience in infrastructure, architecture, blockchain, games,finance,investing,strategy,consulting<br/>
                design,marketing. community and more.
                <br/>
                <br/>
                We're looking for passionate people who align with our mission and will expand our culture ad expertise,If<br/>
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
