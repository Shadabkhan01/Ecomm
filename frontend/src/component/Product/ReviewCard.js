import React from 'react';
import { Rating } from "@material-ui/lab";
import profilePng from "../../images/profile.png"

const ReviewCard = (review) => {
    const options = {
        size: "large",
        value: review.review.rating,
        readOnly: true,
        precision: 0.5,
    };
    return (
        
        <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.review.name}</p>
      <Rating {...options} />
      <span >{review.review.comment}</span>
    </div>
    );
};

export default ReviewCard
