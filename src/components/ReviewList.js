import React from 'react'
import { ReviewDetails } from './ReviewDetails'
import data from '../productData'

export function ReviewList(props) {
    return (
        <ul>
            {data.reviews.map(review => {
                return (
                    <li>
                        {<ReviewDetails
                            body={review.body}
                            rating={review.rating}
                            created_at={review.created_at}
                            reviewer={{ full_name: review.reviewer.full_name }}
                        />}
                        <br />
                    </li>
                )
            })}
        </ul>
    )
}
