import React from "react";
import StarRating from './StarRating';

export function ReviewDetails(props){
    return (
        <div className="ReviewDetails">
            <p>
                <StarRating max={5} current={props.rating} />
                {props.body}
            </p>
            <p>
                <small>{props.created_at}</small>
                <small>{props.user && props.user.full_name}</small>
            </p>
        </div>
    )
}
