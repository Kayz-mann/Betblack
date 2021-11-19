import ReactStars from "react-rating-stars-component";
import React from "react";

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

function GameRatings() {
    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#01f368"
        />
    )
}

export default GameRatings
