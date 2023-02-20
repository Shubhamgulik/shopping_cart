const Navbar = (props)=>{
    // const { products } = props;
    // let total = 0;
    // for(let product of products){
    //     total += product.qty;
    // }
    return (    
        <div style={styles.nav}>
          <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon" />
            <span style={styles.cartCount}>{props.count}</span>
          </div>        
        </div>
      );
    
}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      paddingRight : 10,
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
  
  export default Navbar;