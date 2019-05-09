import React from "react";
import { ProductDetails }from "./ProductDetails";
import { ReviewList }from "./ReviewList";
import data from '../productData';


export function ProductShowPage(){
    return (
        <main className="Page">
            <ProductDetails 
             title={data.title}
             description = {data.description}
             created_at = {data.created_at}
             seller = {{ full_name: data.seller.full_name }}
            />
            <ReviewList />

        </main>
    )
}
