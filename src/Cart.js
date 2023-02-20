import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    price : 999,
                    title : 'Phone',
                    qty : 1,
                    img : '',
                    key : 1
                },
                {
                    price : 555,
                    title : 'Laptop',
                    qty : 3,
                    img : '',
                    key : 2

                },
                {
                    price : 789,
                    title : 'TV',
                    qty : 2,
                    img : '',
                    key : 3

                },

            ]
        }
        
    }
    

     render(){
        const {products} = this.state;
        return (
            <div className="cart" >
                {   products.map((product)=>{
                        return (
                            <CartItem 
                                product = { product } 
                                key = {product.key}
                            />
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default Cart;