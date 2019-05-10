import React, { Component } from "react";
import { ProductDetails }from "./ProductDetails";
import { ReviewList }from "./ReviewList";
import data from '../productData';


export class ProductShowPage extends Component {
    constructor(props){
        super(props)

        this.state={
            product: data
        };
    }
    deleteReview(id){
        this.setState({
          product: {
            ...this.state.product, 
            reviews: this.state.product.reviews.filter(r => r.id !== id)
          }
        })
    }
        render(){
    return (
        <main className="Page">
            <ProductDetails 
             {...this.state.product}
            />
            <ReviewList 
            onReviewDeleteClick={id => this.deleteReview(id)}
            reviews={this.state.product.reviews}
            />

        </main>
    );
    }
  }

