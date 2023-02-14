import React, {useContext} from 'react'
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context'
import './cart.css'
import CartItem from './cart-item'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
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
        <div className="checkout">
          <p>Subtotal: £{totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart