import React from 'react'
import './ProductDetail.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from '../Product/ProductItem'
import  Axios  from 'axios'
import { toast } from 'react-hot-toast'


const initialState = {
    product_id: "",
    product_name: "",
    product_img1: "",
    product_price: "",
    product_amount: "",
    product_tmp_amount: "1"
  }

const ProductDetail = () => {

    
    const [rows, setRows] = useState([])
    const [productDetail, setProductDetail] = useState([])
    const cc = localStorage.getItem('dataProductDetail')
    const params = useParams()

    
    // 


    useEffect(() => {
        getDataProductDetail()
        getRandomProduct()
        
    }, []);


    const getRandomProduct = React.useCallback(() => {
        
        fetch('http://localhost:3002/product/product-random')
            .then(res => res.json())
            .then(rows => {
                console.log(rows);
                setRows(rows)
            })
    })

    const getDataProductDetail = React.useCallback(() => {
        console.log(params.product_id);
        fetch(`http://localhost:3002/product/get-product-by-id/${params.product_id}`)
            .then(res => res.json())
            .then(rows => {
                console.log(rows);
                setProductDetail(rows)
            })
    })


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

    const handlePayment  = async () =>
    {
        const res = await Axios.get(`http://localhost:3002/cart/check-all-cart`)
        if (res.data == null)
        {
            toast.error("Bạn chưa có sản phẩm ở giỏ hàng")
        } else 
        window.location.href = "/checkout"
    }




 
    // const dataProductDetail = localStorage.getItem('dataProductDetail')


    return (
        <>
        {console.log(productDetail)}
        <div className='container'>
            <div className="product_detaiil_container">
                <div className='pd_left'>
                    <img src={productDetail.product_img1} />
                </div>
                <div className='pd_right'>
                    <div className='product_name'>
                        {productDetail.product_name}
                    </div>
                    <div className='product_price'>
                       Giá :  ${productDetail.product_price}
                    </div>

                    <div className='product_detail'>
                        <h2>Thông tin sản phẩm</h2>
                        <p>{productDetail.product_detail}</p>
                    </div>

                    <div className='product_social_link'>
                        <p>Share At: </p>
                        <a href='' className='social_facebook social'></a>
                        <a href='' className='social_twitter social'></a>
                        <a href='' className='social_instagram social'></a>
                        <a href='' className='social_pinterest social'></a>
                    </div>


                    <div className='purchase-info'>
                        <div className='cal'>
                            <div className='cart'>
                                <span onClick={() => addCart(productDetail)}> THÊM VÀO GIỎ HÀNG</span>
                            </div>
                            <div className='favorite'>
                                <span onClick={() => addFavourite(productDetail)} className='icon_heart_alt'></span>
                            </div>
                        </div>

                        <div className='payment'>
                            <span onClick={handlePayment}>THANH TOÁN </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product_trend'>
                <h2>Các sản phẩm tương tự</h2>
                <div className='similar-product'>
                    {rows.map(dataProduct => {
                        console.log(dataProduct);
                        return(
                            <ProductItem dataProduct = {dataProduct}/>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
