import axios from 'axios';
import React, { useState, useEffect, cloneElement } from 'react'
import toast from 'react-hot-toast';




const Info = () => {

    const [user, setUser] = useState({})
    const cc = JSON.parse(localStorage.getItem('dataUser'))

    useEffect(() => {
        getDataCustomer()
    }, []);

    const getDataCustomer = React.useCallback(() => {
        fetch(`http://localhost:3002/customer/get-user/${cc.username}`)
            .then(res => res.json()) 
            .then(rows => {
                console.log(rows);
                console.log(rows);
                setUser(rows)
            })
    })

    const { customer_name, customer_address, customer_phone } = user


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    const dataUser = {
        username: cc.username,
        customer_name: user.customer_name,
        customer_phone: user.customer_phone,
        customer_address: user.customer_address
    }


    const handleUpdateUser = () => {
        if (user.customer_name == "" || user.customer_phone == "" || user.customer_address == "") {
            toast.error("Bạn vui lòng nhập đầy đủ thông tin ")
        }
        else {
            var check = window.confirm("Update data")
            if (check) {
                axios.patch('http://localhost:3002/customer/update-customer', dataUser)
                toast.success("Cập nhật thành công")
            }
        }


    }


    return (
        <ul className="group-right">
            <li className="group-right-item"><h4>Thông tin tài khoản</h4></li>
            <li className="divider-1"></li>
            <li className="group-right-item">
                <h6>Họ và tên</h6>
                <input className="info-input" type="text" id="info-name"
                    name='customer_name'
                    value={customer_name}
                    onChange={handleChangeInput}
                />
            </li>
            <li className="group-right-item">
                <h6>Số điện thoại</h6>
                <input className="info-input" type="text" id="info-phone"
                    name='customer_phone'
                    value={customer_phone}
                    onChange={handleChangeInput}
                />
            </li>

            <li className="group-right-item">
                <h6>Địa chỉ</h6>
                <input className="info-input" type="text" id="info-address"
                    name='customer_address'
                    value={customer_address}
                    onChange={handleChangeInput}
                />
            </li>
            <li className="group-right-item">
                <button onclick="update()" className="btn-update" onClick={handleUpdateUser}>Cập nhật</button>
            </li>
        </ul>
    )
}

export default Info