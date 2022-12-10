import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Cart.css'
import { toast } from 'react-hot-toast'
import CartItem from './CartItem'


var CartArray = []


const Cart = () => {
    //const [CartArrayy, setCartArray] = useState(JSON.parse(localStorage.getItem("Cart")) || []);
    const [rowsCart, setRowsCart] = useState([])
    const [total, setTotal] = useState(0);


    useEffect(() => {
        getDataCart()
    }, [rowsCart]);

    const getDataCart = React.useCallback(() => {
        var tmpTotal = 0
        fetch('http://localhost:3002/cart')
            .then(res => res.json())
            .then(rowsCart => {
                setRowsCart(rowsCart)
            })

        rowsCart.map(item => {
            tmpTotal = tmpTotal + item.product_price * item.product_tmp_amount;
        })
        setTotal(tmpTotal)
    })


    const handleDeleteWishList = async (item) => {

        Axios.delete(`http://localhost:3002/cart/delete-cart/${item}`)
        toast.success('Xóa thành công')
        getDataCart()
    }

 



    return (
        <>
            <section class="cart">
                <h2>Giỏ hàng</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowsCart.map(dataProduct => {

                            return (
                                <CartItem dataProduct={dataProduct} />
                            )
                        })}

                    </tbody>
                </table>
                <div style={{ textAlign: 'right', }} class="price-total">
                    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Tạm tính: <span>{total}<sup>$</sup></span></p>
                </div>

                <div class="selection-btn">
                    <a href="/"><button class="btn-product-page">TRỞ VỀ TRANG SẢN PHẨM</button></a>
                    <a href="/checkout"><button class="btn-payment-page">ĐI ĐẾN TRANG THANH TOÁN</button></a>
                   
                </div>
            </section>
        </>
    )
}

export default Cart
