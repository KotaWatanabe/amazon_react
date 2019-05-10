import React from 'react'
import { ReviewDetails } from './ReviewDetails'
import data from '../productData'

export function ReviewList(props) {
    const { reviews }= props;
    return(
        <ul 
        style={{
            listStyle: "none",
            paddingLeft: 0
        }}>
            {reviews.map(review =>(
                <li key={review.id}>
                <ReviewDetails onDeleteClick={props.onReviewDeleteClick} {...review} />
            </li>
              ))}
        </ul>
    )
}
