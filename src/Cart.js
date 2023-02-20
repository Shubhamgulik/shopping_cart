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
                    id : 1
                },
                {
                    price : 555,
                    title : 'Laptop',
                    qty : 3,
                    img : '',
                    id : 2

                },
                {
                    price : 789,
                    title : 'TV',
                    qty : 2,
                    img : '',
                    id : 3

                },

            ]
        }
        
    }

    handleIncreaseQuantity = (product) => {
        console.log("Hey increase quqntity of : ",product);
        const { products } = this.state;

        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState(()=>{
              return {
                products
            }
        })

    }

    handleDecreaseQuantity = (product) => {
        if(product.qty == 0) return;
        console.log("Decrease quantity : ",product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty -= 1;

        this.setState(()=>{
            return {
                products
            }
        })
    }
    

     render(){
        const {products} = this.state;
        return (
            <div className="cart" >
                {   products.map((product)=>{
                        return (
                            <CartItem 
                                product = { product } 
                                key = {product.id}
                                onIncreaseQuantity = {this.handleIncreaseQuantity}
                                onDecreaseQuantity = {this.handleDecreaseQuantity}
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