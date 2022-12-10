import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/font-awesome.min.css'

const Sidebar = () => {
  return (
    <ul className="group-left">
            <li className="group-left-item"><h4>TÀI KHOẢN</h4></li>
            <li className="divider"></li>
            <li className="group-left-item"><Link to="info"><i className="icon_info_alt"></i>Thông tin tài khoản</Link></li>
            <li className="group-left-item"><Link to="changepass"><i className="icon_key_alt"></i>Đổi mật khẩu</Link></li>
            <li className="group-left-item"><Link to="listorder"><i className="icon_folder-alt"></i>Quản lí đơn hàng</Link></li>
            <li onclick="logout()" className="group-left-item"><a href="index.html"><i className="arrow_back"></i>Đăng xuất</a></li>     
        </ul>
  )
}

export default Sidebar
