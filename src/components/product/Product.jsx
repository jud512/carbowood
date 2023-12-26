import React from 'react'
import './product.css'

const Product = (images) => {
    console.log('PRODUCT',images)
    console.log(images.name)
  return (
    <div className='product'>
        <div className="productContainer">
            <div className="productImgTop">
                <img src={images.imgEgesz} alt={images.name} />

            </div>
            <div className="productMiddle">
                <div className="productImg">
                    <img src={images.imgCsucs} alt={images.nameCsucs} />
                </div>
                <div className="productImg"><img src={images.imgKapa} alt={images.nameKapa} /></div>
            </div>
            <div className="productText">{images.name}</div>

        </div>
    </div>
  )
}

export default Product
