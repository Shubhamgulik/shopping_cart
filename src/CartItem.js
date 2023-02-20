import React from "react";

class CartItem extends React.Component{
    

    // increaseQuantity(){
    //     // setState form 1 : when we dont require prevState
    //     // this.setState({
    //     //     qty : this.state.qty +1
    //     // })
    //     // set State form 2 : when required prevState use this
    //     this.setState((prevState)=>{
    //         return {
    //             qty : prevState.qty + 1,
    //         }
    //     })
    // }
    // decreaseQuantity(){
    //     this.setState((prevState)=>{
    //         return {
    //             qty : prevState.qty - 1,
    //         }
    //     })
    // }   
     
    

    render(){
        const {price,title,qty} = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity} = this.props;

        return(
            <div className="cart-item" >
                
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} } >{title}</div>
                    <div style={ {color : '#777'} } >Rs. {price}</div>
                    <div style={ {color : '#777'} } >Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            className="action-icons"
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={() =>  onIncreaseQuantity(product)}
                        />
                        <img 
                            className="action-icons" 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick = {() => onDecreaseQuantity(product)}
                        
                        />
                        <img
                            className="action-icons" 
                            alt="delete" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                         
                         />

                    </div>
                </div>

            </div>
        );
    }
}
const styles = {
        image : {
            height : 110,
            width : 110,
            borderRadius : 4,
            background: '#ccc'

        }
}

export default CartItem;