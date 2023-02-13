import React, {useContext} from 'react'
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context'
import './cart.css'
import CartItem from './cart-item'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1 className='cartTitle'>Your Cart Items</h1>
      </div>
      <div className='itemContainer'>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
            }
          })}
        </div> 
      </div>
          <Link className="toCheckout" to="/checkout">To Checkout<FontAwesomeIcon className='checkoutIcon' icon="fa-credit-card" /></Link>
    </div>
  )
}

export default Cart