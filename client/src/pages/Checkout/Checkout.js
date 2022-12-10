import React from 'react'
import './Checkout.css'
import { useState, useEffect } from 'react';
import  toast  from 'react-hot-toast'
import axios from 'axios';



const Checkout = () => {


    const [user, setUser] = useState({})
    const [rowsCart, setRowsCart] = useState([])
    const cc  = JSON.parse(localStorage.getItem('dataUser')) 
    const current = new Date()
    

  useEffect(() => {
    getDataCustomer()
    getDataCart()
    
  }, []);

  

   const getDataCustomer = React.useCallback(() => {
    fetch(`http://localhost:3002/customer/get-user/${cc.username}`)
    .then(res => res.json())
    .then(rows => {
    console.log(rows);
      setUser(rows)
    })
   }) 

   const getDataCart = React.useCallback(() => {
    fetch(`http://localhost:3002/cart`)
    .then(res => res.json())
    .then(rowsCart => {
        console.log(rowsCart);
        setRowsCart(rowsCart)
    })
   }) 

    
    const {customer_name, customer_address, customer_phone} = user
    
    

    const handleChangeInput = e => {
        const  {name, value} = e.target
        setUser({...user, [name]:value})
        console.log(user);
      }

      const order = {
        order_id : "",
        customer_id : "",
        order_date: "",
        order_address: "",
        order_phone : "",
        order_method: "",
        order_status: "",
        order_status: "",
        order_note: "", 
        order_total_price : 0
     }


     const order_detail = {
        order_id: "",
        product_id: "",
        product_amount: 0,
        od_unit_price: 0,
        od_into_money: 0,
     }


      const handleSubmitCheckout =  async () =>
      {
        console.log("handleSubmutCheckout");
        if (user.customer_name == "" || user.customer_address == "" || user.customer_phone == "")
        {
            toast.error("Vui lòng nhập đầy đủ thông tin !")
        } else 
        {
            let tmp = await axios.get('http://localhost:3002/order/get-last-data')     
            order.order_id = tmp.data    
            order.customer_id = user._id
            order.order_date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} ${current.getFullYear()}-${current.getMonth()}-${current.getDay()}`
            order.order_address = user.customer_address
            order.order_phone = user.customer_phone
            order.order_method = "Thanh toán khi nhận hàng"
            order.order_status = "Đang xử lý"
            order.order_note = "Hong biết gì hết"
            order.order_total_price = total
            
            //handle add data order
            axios.post('http://localhost:3002/order/add-order', order)
            
            
            rowsCart.map(cartItem =>
            {
                order_detail.order_id = order.order_id
                order_detail.product_id =  cartItem.product_id
                order_detail.product_amount = cartItem.product_tmp_amount
                order_detail.od_unit_price = cartItem.product_price
                order_detail.od_into_money = cartItem.product_price * cartItem.product_tmp_amount
                 axios.post('http://localhost:3002/orderdetail/add-order-detail', order_detail)
            })
            
            
            axios.delete(`http://localhost:3002/cart/delete-all-cart`)
            toast.success("Thêm thành công")
            window.location.href = "/"
        }
      }


   var total = 0;
  return (
   
    <div class="container-checkouts">
        <div class="information">
            <div class="shipment-details">
                <h2 class="checkouts-title" >Thông tin khách hàng</h2>
                <div class="form-info">
                    <h6>Họ và tên </h6>
                    <input class="info-input" type="text" id="info-name" name='customer_name' value={customer_name} onChange = {handleChangeInput}/>
                </div>
                
                <div class="form-info">
                    <h6>Số điện thoại</h6>
                    <input class="info-input" type="text" id="info-phone" name='customer_phone' value={customer_phone} onChange = {handleChangeInput}/>
                </div>
                <div class="form-info">
                    <h6>Địa chỉ</h6>
                    <input class="info-input" type="text" id="info-address" name='customer_address' value={customer_address} onChange = {handleChangeInput}/>
                </div>
            </div>

            <div class="payment-methods">
                <div class="checkouts-title">Phương thức thanh toán</div>
                <div class="box">
                    <input type="radio" name="select" id="option-1" checked value="Thanh toán khi nhận hàng" />
                    <input type="radio" name="select" id="option-2" value="Thanh toán qua ATM"/>
                    <input type="radio" name="select" id="option-3" value="Thanh toán qua ZaloPay"/>
                    <input type="radio" name="select" id="option-4" value="Thanh toán qua Momo"/>
                    <label for="option-1" class="option-1" >
                        <div class="dot"></div>
                        <div class="text">Thanh toán khi nhận hàng</div>
                    </label>
                    
                    
                </div>
            </div>
            <div class="shipping-method">
                <div class="checkouts-title">Phương thức vận chuyển</div>
                <div class="shipping-title">
                    <span>Giao hàng tận nơi</span>
                    <span class="shipping-price">Miễn phí <sup>đ</sup></span>
                </div>
            </div>
        </div>
        
        <div class="cart-container" style={{marginLeft: '30px'}}>
           <ul class="list-group">
                <li class="list-group-item cart-title">ĐƠN HÀNG</li>
                <li class="list-group-item cart-divider"></li>
                {rowsCart.map(cartItem => {
                    total = total + cartItem.product_price*cartItem.product_tmp_amount
                    return(
                        <>
                            <li class="list-group-item name-and-price">
                    <span class="name-product">{cartItem.product_name}</span>
                    <span class="price-product" >{cartItem.product_price} $</span>
                </li>
                <li class="list-group-item size-and-amount">
                    <span class="amount-product">Số lượng :  {cartItem.product_tmp_amount}</span>
                </li> 
                        </>
                    )
                }
                   
                )}
                {/* <li class="list-group-item name-and-price">
                    <span class="name-product">Vintas Flannel - High Top - Cement</span>
                    <span class="price-product">495.000 VNĐ</span>
                </li>
                <li class="list-group-item size-and-amount">
                    <span class="size-product">Size: 41</span>
                    <span class="amount-product">x 2</span>
                </li> */}
                <li class="list-group-item cart-divider-1"></li>
                <li class="list-group-item current-price">
                    <span class="title-order">Đơn hàng</span> 
                    <span class="title-current-price">{total} $</span>
                </li>
                <li class="list-group-item shipping-fee">
                    <span class="phivanchuyen">Phí vận chuyển</span>
                    <span class="title-shipping-fee">Miễn phí</span>
                </li>
                <li class="list-group-item cart-divider-1"></li>
                <li class="list-group-item"> 
                    <span class="title-total-price">TỔNG CỘNG</span>
                    <span class="title-total-price-2">
                        <span class="total-price">{total}</span>
                         $
                    </span>
                </li>
                <li class="list-group-item">
                    <button data-href="completed.html" class="btn-cart" onClick={() => handleSubmitCheckout()}>HOÀN TẤT ĐƠN HÀNG</button>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Checkout
