// components/Review.js or components/Review.jsx
import React, { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from 'react-icons/md';

const Review = ({ initialRating, reviews, className, editable, large, ratingText, medium, ...rest }) => {
    const [rating, setRating] = useState(initialRating);

    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    return (
        <div className={`rating d-flex align-items-center ${className}`}>
            <input {...rest} hidden value={rating} onChange={() => console.log} />
            {Array(5).fill('').map((el, index) => (
                <MdOutlineStarPurple500
                    key={index.toString()}
                    color={index < rating ? "#f57207" : "rgba(0,0,0,.2)"}
                    className="me-1"
                    size={24}
                    aria-disabled={!editable}
                    onClick={() => editable && setRating(index + 1)}
                />
            ))}
            {reviews && <span className="review-number">({reviews})</span>}
            {ratingText && <span className="rating-text">{rating}</span>}
        </div>
    );
}

export default Review;
