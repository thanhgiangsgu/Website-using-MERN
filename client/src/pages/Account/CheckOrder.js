import React, { useEffect, useState, useCallback } from 'react'
import './listorder.css'
import ProductItemOrder from './ProductItemOrder'


const CheckOrder = () => {

    const [rowsOrder, setRowsOrder] = useState([])
    const [user, setUser] = useState(null)
    const [listProduct, setListProduct] = useState(null)
    


    const cc = JSON.parse(localStorage.getItem('dataUser'))

    useEffect(() => {
        getDataCustomer()
    }, []);

    useEffect(() => {

        getOrders()
    }, [user]);

    useEffect(() => {
        getListProduct()
    }, [])







    // useEffect(() => {
    //     getOrders()
    //     getDataCustomer()


    // }, []);


    const getDataCustomer = React.useCallback(() => {
        fetch(`http://localhost:3002/customer/get-user/${cc.username}`)
            .then(res => res.json())
            .then(rows => {
                console.log('getDataCustomer', rows);
                setUser(rows)
            })
    })

    const getOrders = useCallback(() => {
        console.log('user after getDatacusstomer', user);
        if (user) {
            fetch(`http://localhost:3002/order/check-order/${user._id}`)
                .then(res => res.json())
                .then(rowsOrder => {
                    console.log('getOrders', rowsOrder)
                    setRowsOrder(rowsOrder)
                })
        }
    })

    const getListProduct = () => {
        const data = {
        }
        rowsOrder.map(productItem => {
            console.log(productItem.listDetails);
        })

    }

   

    return (


        <>

            <div className="group-right">
                {rowsOrder.map(OrderItem => {
                    return (
                        <div className="box-order">
                            <ul className="group-info">
                                <li className="group-info-item">
                                    <span className="order-title">Đơn hàng </span>
                                    <span className="total-price">${OrderItem.order_total_price}</span>
                                </li>
                                <li className="group-info-item">
                                    <span className="date-order">{OrderItem.order_date}</span>
                                    <span className="info-name">{OrderItem.customer_id.customer_name}</span>
                                    <span className="payment"> {OrderItem.order_method}</span>
                                </li>

                                <li className="group-info-item divider-1"></li>
                            </ul>

                            <section className='list-product'>
                                <ProductItemOrder dataProduct={OrderItem.listDetails} dataStatus={OrderItem.order_status} />
                            </section>

                            

                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default CheckOrder
