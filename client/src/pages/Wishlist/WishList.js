import React, { useEffect, useState } from 'react'
import './WishList.css'
import Axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';





const WishList = () => {

  const [wishLists, setWishLists] = useState(JSON.parse(localStorage.getItem("WishLists")) || []);
  const [rowsWishList, setRowsWishList] = useState([])

  useEffect(() => {
    getDataWishList()
  }, [rowsWishList])

  const getDataWishList = React.useCallback(() => {
    fetch('http://localhost:3002/wishlist')
      .then(res => res.json())
      .then(rowsWishList => {
        setRowsWishList(rowsWishList)
      })
  })

  const handleAddCart = async (product) => {
    if (product.product_amount < 1) {
      toast.error("Sản phẩm trong kho không đủ")
    } else {
      const res = await Axios.post(`http://localhost:3002/cart/check-cart/${product.product_id}`)
      if (res.data.check == "false") {

        Axios.post(`http://localhost:3002/cart/add-cart`, product)
        toast.success('Thêm thành công')
      } else {
        toast.error('Sản phẩm đã tồn tại trong giỏ hàng')
      }
    }
  }

  const handleDeleteCart = async (item) => {

    Axios.delete(`http://localhost:3002/wishlist/delete-wishlist/${item}`)
    toast.success('Xóa thành công')
    getDataWishList()
  }


  return (
    <>
      <h2 style={{ marginLeft: '20%', marginTop: '50px' }}>  YÊU THÍCH </h2>

      {rowsWishList.map(WishListItems => {
        return (
          <section class="wishlist">

            <div className='wl-left'>
              <img src={WishListItems.product_img1} />
              <h3>{WishListItems.product_name}</h3>
            </div>
            <div className='wl-right'>
              <div className='price'>{WishListItems.product_price} <bold>$</bold></div>
              <div className='wishlist-button'>
                <button
                  className='wishlist-button-cart icon_bag_alt'
                  onClick={() => handleAddCart(WishListItems)}
                >

                </button>

              </div>

              <div className='wishlist-button'>
                <button
                  className='wishlist-button-delete icon_trash_alt'
                  onClick={() => handleDeleteCart(WishListItems.product_id)}
                >
                </button>
              </div>
            </div>
          </section>
        )
      })}

    </>
  )
}

export default WishList
