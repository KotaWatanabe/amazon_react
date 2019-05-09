import React from "react";
import Star from './Star';

export default function StarRating(props){
    const { max, current } = props;
    return(
        <div className="StarRating">
        {
            Array.from({ length:max }).map((value,index)=>{

                return(
                <Star 
                key={index} 
                style={
                    {color: index < current ? 'yellow' : null, 
                    width:'50px', 
                    height: '50px'}
                }
                />
                )
            })
        }

        </div>
    )
}
