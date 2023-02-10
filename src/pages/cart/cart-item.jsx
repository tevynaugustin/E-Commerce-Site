import React from 'react'


function CartItem(props) {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
          <div className="productName">
            <p><b>{productName}</b></p>
          </div>
        </div>
            <div className="price">
              <p>{price}</p>
          </div>
    </div>
  )
}

export default CartItem