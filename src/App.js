
import React from "react";

import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
            {
                price : 999,
                title : 'Phone',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                id : 1
            },
            {
                price : 555,
                title : 'Laptop',
                qty : 3,
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                id : 2

            },
            {
                price : 789,
                title : 'Watch',
                qty : 2,
                img : 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
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

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item)=>item.id !== id);

      this.setState(()=>{
          return {
              products : items
          }
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let total = 0;

    products.forEach(product => {
      total = total + product.qty * product.price;
    });

    return total;

  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <h1>Shopping Cart</h1>
        < Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize : 30, padding : 10 }} >Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
// 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