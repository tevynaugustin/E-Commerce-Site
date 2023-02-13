import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'

const Product = (props) => {
    const {id, productName, price, artist, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className='product' key={id}>
        <img src={productImage} alt="product"/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>{artist}</p>
            <p className='price'>{price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product;
