import React from 'react'


function CartItem(props) {
    const {productName, price, artist, productImage} = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName}/>
        <div className='description'>
          <div className="productName">
            <p><b>{productName}</b></p>
            <p>{artist}</p>
          </div>
        </div>
            <div className="price">
              <p>{price}</p>
          </div>
    </div>
  )
}

export default CartItem