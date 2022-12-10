import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProductItemOrder = ({ dataProduct, dataStatus }) => {

  const [details, setDetails] = useState([]);
  const [status, setStatus] = useState(dataStatus)

  useEffect(() => {
    getStatus()
  }, [])

  const getStatus = () => {
    if (status == "Đang xử lý") {
      setStatus("Hủy đơn hàng")
    }
    if (status == "Đang giao hàng")
    {
      setStatus("Xác nhận đơn hàng")
    }
  }


  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const idArray = [];
    dataProduct.map(index => {
      idArray.push(index.product_id)
    })
    const res = await axios.post(`http://localhost:3002/product/get-list-product/`, idArray)
    const productsCreated = res.data;
    const detailsCreated = [];
    dataProduct.forEach(item => {
      const product = productsCreated.find(product => product.product_id === item.product_id);
      detailsCreated.push({
        ...item,
        product
      })
    });
    setDetails(detailsCreated)
  }
  console.log(details);


  const handleStatus = () => {

    console.log(dataProduct);

  }
  const handleDeleteOrder = async (dataProduct) => {
    const res = dataProduct[0].order_id;

    await axios.delete(`http://localhost:3002/orderdetail/delete-product-by-order-id/${res}`)
    await axios.delete(`http://localhost:3002/order/delete-order-by-id/${res}`)
    window.location.reload(); 
  }

  const handleClickStatus = () => {
    if (status == "Hủy đơn hàng") {
      const check = window.confirm("Bạn chắc chắn muốn xóa đơn hàng")
      if (check) {
        handleDeleteOrder(dataProduct)
      }
    } 
    if (status == "Xác nhận đơn hàng")
    {
      const check = window.confirm("Bạn chắc chắn đã nhận được hàng")
      if (check)
      {
        console.log(dataProduct);
        const data = {
          order_id: dataProduct[0].order_id,
          order_status: "Hoàn tất",
        }
        axios.patch('http://localhost:3002/order/update-order', data)
        //window.location.reload()
      }
    }
  }

  return (
    <>
      {details.map((detail, index) => {
        return (
          <>
            <div className='product-item' key={index}>
              <img src={detail.product.product_img1} className='co-img' />
              <h6 className='co-title'>{detail.product.product_name}</h6>
              <h4 className='co-product-amount'>x{detail.product_amount}</h4>
              <div className='co-price'>
                <h3>Đơn giá : {detail.od_unit_price}</h3>
                <h3>Tổng tiền : {detail.od_into_money}</h3>
              </div>
            </div>
          </>
        )
      })}

      <div className='order-check'>
        <button onClick={handleClickStatus}>{status}</button>
      </div>

      {/* <div className='product-item' >
          <img src='https://akkogear.com.vn/wp-content/uploads/2022/12/ban-phim-co-akko-monsgeek-mg108-doll-of-princess-01-646x800.jpg' className='co-img' />
          <h6 className='co-title'>Akko</h6>
          <h4 className='co-product-amount'>x5</h4>
          <div className='co-price'>
            <h3>Đơn giá : 20</h3>
            <h3>Tổng tiền : 100</h3>
          </div>
        </div> */}
    </>
  )
}

export default ProductItemOrder
