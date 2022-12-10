import React, { useState } from 'react'
import Axios from 'axios'
import { toast } from 'react-hot-toast'


const initialState = {
  product_id: "",
  product_tmp_amount: "",
}




const CartItem = ({ dataProduct }) => {

  const [quanlity, setQuanlity] = useState(dataProduct.product_tmp_amount)
  const info = initialState;
  const handleDeleteCart = async (item) => {

    Axios.delete(`http://localhost:3002/cart/delete-cart/${item}`)
    toast.success('Xóa thành công')
  }

  const handleIncrease = () => {
     if (quanlity < dataProduct.product_amount)
     {
      setQuanlity(prev => prev + 1)
    info.product_id = dataProduct.product_id
    info.product_tmp_amount = quanlity + 1;
    console.log(info);
    Axios.patch(`http://localhost:3002/cart/update-cart`, info)
     } else 
     {
      toast.error("Sản phẩm trong kho không đủ ")
     }
    // setQuanlity(prev => prev + 1)
    // info.product_id = dataProduct.product_id
    // info.product_tmp_amount = quanlity + 1;
    // console.log(info);
    // Axios.patch(`http://localhost:3002/cart/update-cart`, info)
  }

  const handleDecrease = () => {
    if (quanlity > 1)
      setQuanlity(prev => prev - 1)
    info.product_id = dataProduct.product_id
    info.product_tmp_amount = quanlity - 1;
    Axios.patch(`http://localhost:3002/cart/update-cart`, info)
  }



  return (
    <>
      <tr>
        <td s style={{ display: 'flex', alignItems: 'center' }}>
          <img src={dataProduct.product_img1} style={{ width: '150px' }}></img>
          <span className='title'>{dataProduct.product_name}</span>
        </td>
        <td>
          <p><span className="prices">{dataProduct.product_price}</span><strong>$</strong></p>
        </td>
        <td>
          <div className='abc' style={{marginRight: '-3px'}} onClick={() => handleDecrease()}>-</div>
          <label className='number' style={{ width: '30px', textAlign: 'center' }}>{quanlity}</label>
          <div className='abc' onClick={handleIncrease}>+</div>
        </td>
        <td
          style={{ cursor: 'pointer' }}
        >
          
          <div className='cart-button'>
                      <button 
                          className='cart-button-delete icon_trash_alt'
                          onClick={() => handleDeleteCart(dataProduct.product_id)}
                          >
                           </button>        
                      </div>
        </td>


      </tr>

    </>
  )
}

export default CartItem
