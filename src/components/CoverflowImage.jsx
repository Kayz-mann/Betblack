import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import poolgame from '../images/poolgame.png';
import firstimage from '../images/firstimage.png';
import scrabble from '../images/scrabble.png';

function CoverflowImage() {

    return (
        <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation={false}
          infiniteScroll
          enableHeading={false}
          active={3}
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '200px',
              backgroundColor: 'transparent',
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }, 
            // '@media (max-width: 420px)': {
            //   width: '400px',
            //   height: '400px',
            //   backgroundColor: 'transparent',
            // },
            // '@media (min-width: 420px)': {
            //   width: '460px',
            //   height: '600px'
            // }, 
            // '@media (max-width: 375px)': {
            //   width: '300px',
            //   height: '400px',
            //   backgroundColor: 'transparent',
            // },
            // '@media (min-width: 375px)': {
            //   width: '360px',
            //   height: '600px'
            // }
          }}
        >
          <img src={poolgame}  alt='Pool' data-action="/"/>
          <img src={firstimage}  alt='Stacked' data-action="/"/>
          <img src={scrabble}  alt='Scrabble' data-action="/"/>
        </Coverflow>
        </StyleRoot>
      
    )
}

export default CoverflowImage
