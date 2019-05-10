import React, { Component } from 'react'
import data from '../productsData';

export class ProductIndexPage extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: data
        };
    }

       deleteProduct(id){
           this.setState({
               products: this.state.products.filter(p => p.id !== id)
           })
        }


    render(){
        return(
            <main className="Page">
            <h2>Products</h2>
            <ul style={{
                listStyle:"none",
                paddingLeft: 0
            }}>
              {this.state.products.map(product =>(
                  <li key={product.id}>
                      <a href="">{product.title}</a> <br/>
                      <button onClick={()=>this.deleteProduct(product.id)}>Delete</button>
                  </li>
              ))}
            </ul>
        </main>
        )
    }
}
