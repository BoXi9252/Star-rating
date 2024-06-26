import React from "react";
import Star from "../Star";
import Constants from "../../constants";
import "./index.css";

const StarRating = () => {
  const [rate, setRate] = React.useState(Constants.defStar);



  return (
    <div className="star-rating-wrapper">
      <div>
        {Constants.starInfo.map((star, score) => {
          const isActive = rate.score >= star.score;
          return (
            <Star
              key={score}
              size={Constants.starSize}
              isActive={isActive}
              onClick={() => {
                setRate(star);
              }}
            />
          );
        })}
      </div>
      <h2 className="text">{rate.text}</h2>
    </div>
  );
};

export default StarRating;
