import React, {useContext} from 'react'
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context'
import './cart.css'
import CartItem from './cart-item'

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
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
    </div>
  )
}

export default Cart