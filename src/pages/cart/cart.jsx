import React, {useContext} from 'react'
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context'
import './cart.css'
import $ from 'jquery'
import CartItem from './cart-item'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      {totalAmount > 0 ?
      <>
      <div>
      <h1 className='cartTitle'>Your Cart Items</h1>
    </div>
    <div className="checkout">
        <p>Total: £{totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <br/>
        <button>Checkout Now</button>
      </div>
      </>
    : <h1 className='emptyBasket'>Your Basket Is Empty! :(</h1>}
        <div className='itemContainer'>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
            }
          })}
        </div>
        </div>
        <div className='border'></div>
      </div>
  )
}

export default Cart