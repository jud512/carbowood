import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='product'>
        <div className="productContainer">
            <div className="productImgTop">
                <img src="https://img.kytary.com/eshop_hu/velky_v2/na/637490143043330000/3e7981ae/64823344/palatino-violin-bow-250-4-4.jpg" alt="" />
            </div>
            <div className="productMiddle">
                <div className="productImg">
                    <img src="https://robertmorrowbowmaker.com/wp-content/uploads/2018/12/gold-mounted-viola-bow-1-1.jpg" alt="" />
                </div>
                <div className="productImg"><img src="https://robertmorrowbowmaker.com/wp-content/uploads/2018/12/gold-mounted-viola-bow-2-1.jpeg" alt="" /></div>
            </div>
            <div className="productText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptatem beatae totam inventore. Sunt doloribus numquam hic. Necessitatibus dolorum nam neque aut blanditiis fuga aperiam? Illo perferendis distinctio excepturi veniam.</div>
            
        </div>
    </div>
  )
}

export default Product