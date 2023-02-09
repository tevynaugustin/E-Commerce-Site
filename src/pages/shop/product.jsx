import React from 'react'
import {ShopContext} from '../../context/shop-context'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product'>
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p className='price'>{price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default Product;
