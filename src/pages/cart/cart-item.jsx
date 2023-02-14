import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'


function CartItem(props) {
    const {id, productName, price, artist, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName}/>
        <div className='description'>
          <div className="productName">
            <p><b>{productName}</b></p>
            <p>{artist}</p>
            <p>£{price}</p>
          </div>
        </div>
              <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
              </div>
    </div>
  )
}

export default CartItem