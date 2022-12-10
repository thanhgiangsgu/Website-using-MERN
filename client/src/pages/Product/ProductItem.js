import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import Axios from 'axios';



const initialState = {
  product_id: "",
  product_name: "",
  product_img1: "",
  product_price: "",
  product_amount: "",
  product_tmp_amount: "1"
}
const ProductItem = ({ dataProduct }) => {

  console.log("dataProduct",dataProduct)

  // const [soldOut , setSoldOut] = useState("")

  // const checkShowOut = () => 
  // {
  //     if (dataProduct.product_amount == 0) 
  //     setSoldOut("1")
  // }

  // checkShowOut()
  const addCart = async (product) => {

    const res = await Axios.post(`http://localhost:3002/cart/check-cart/${product.product_id}`)
    if (res.data.check == "false") {
      if (product.product_amount < 1) {
        toast.error("Sản phẩm trong kho không đủ")
      } else {
        const info = initialState
        info.product_id = product.product_id
        info.product_name = product.product_name
        info.product_img1 = product.product_img1
        info.product_price = product.product_price
        info.product_amount = product.product_amount
        info.product_tmp_amount = 1;
        Axios.post(`http://localhost:3002/cart/add-cart`, info)
        toast.success('Thêm thành công')
      }
    } else {
      toast.error('Sản phẩm đã tồn tại trong giỏ hàng')
    }

  };
  const addFavourite = async (product) => {

    const res = await Axios.post(`http://localhost:3002/wishlist/check-wishlist/${product.product_id}`)
    if (res.data.check == "false") {
      const info = initialState
      info.product_id = product.product_id;
      info.product_name = product.product_name;
      info.product_img1 = product.product_img1;
      info.product_price = product.product_price;
      info.product_amount = product.product_amount;
      info.product_tmp_amount = 1;

      Axios.post(`http://localhost:3002/wishlist/add-wishlist`, info)
      toast.success('Thêm thành công')
    } else {
      toast.error('Sản phẩm đã tồn tại trong giỏ hàng')
    }
  };

  const handleClickProduct = (dataProduct) =>
  {
     if (localStorage.getItem('dataProductDetail') != null)
      {
        localStorage.removeItem('dataProductDetail')
      }
    localStorage.setItem('dataProductDetail', JSON.stringify(dataProduct))
      return (
        window.location.href = `/product-detail/${dataProduct.product_id}`
      )
  }

  

  return (
    
    
      <div className="col-lg-4 col-md-6" style={{ border: '5px boid #333' }}>
        <div className="product__item sale">
          <div className="product__item__pic set-bg" style={{ backgroundImage: 'url()' }}>

            {/* <img src={soldOut}
               style={{width : '100px',overflow: 'hidden', position: 'absolute', top : '30px' }}
                /> */}
            <img src={dataProduct.product_img1} 
              style={{cursor: 'pointer'}}
              onClick={() => handleClickProduct(dataProduct)}
            />

            <ul className="product__hover">
              <li><a href="#" onClick={() => addFavourite(dataProduct)}><span className="icon_heart_alt"></span></a></li>
              <li><a href="#" onClick={() => addCart(dataProduct)}><span className="icon_bag_alt"></span></a></li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6><a onClick={() => handleClickProduct(dataProduct)} href="product-detail">{dataProduct.product_name}</a></h6>
            <div className="product__price">{dataProduct.product_price} <span></span></div>
          </div>
        </div>
      </div>
  
  )
}

export default ProductItem
