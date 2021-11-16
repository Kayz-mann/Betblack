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
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '200px',
              backgroundColor: 'black',
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }
          }}
        >
          <img src={poolgame} alt='Pool' data-action="/"/>
          <img src={firstimage} alt='Stacked' data-action="/"/>
          <img src={scrabble} alt='Scrabble' data-action="/"/>
        </Coverflow>
        </StyleRoot>
      
    )
}

export default CoverflowImage
