import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
const initialState = {
  password1: "",
  password2: "",
  password3: "",
}


const ChangePass = () => {


  const [show, setShow] = useState("password")
  const [dataPass, setDataPass] = useState(initialState)
  const { password1, password2, password3 } = dataPass
  const cc = JSON.parse(localStorage.getItem('dataUser'))

  const handleClickShowPass = () => {
    if (show == "password")
      setShow("text"); else
      setShow("password") 
  }


  const handleChangInput = e => {
    const { name, value } = e.target
    setDataPass({ ...dataPass, [name]: value })
    console.log(dataPass)
  }



  const handleChangePass = async () => {
    if (dataPass.password1 == "" || dataPass.password2 == "" || dataPass.password3 == "") {
      toast.error("Bạn vui lòng nhập đầy đủ thông tin ")
    } else {
      if (dataPass.password2 != dataPass.password3) {
        toast("Mật khẩu không khớp")
      } else {
        const dataLogin = {
          email : cc.username,
          password : password1
        }
        console.log(dataLogin);
        const check = window.confirm("Bạn có chắc chắn thay đổi mật khẩu")
        const res = await axios.post('http://localhost:3002/account/login', dataLogin)
        console.log(res.data.check);
        
        if (check) {
           if (res.data.check == "false")
           {
              toast.error("Mat khau hien tai khong chinh xac")
           } else {
            const dataUser = axios(`http://localhost:3002/account/${cc.username}`)
            const data = {
            username: cc.username,
            password: password2
            }
          toast.success("Cập nhật thành công !!")
          axios.patch(`http://localhost:3002/account/update-account`, data)
           }
        }


      }
    }
  }

  return (
    <>
      <ul class="group-right">
        <li class="group-right-item"><h4>Thay đổi mật khẩu</h4></li>
        <li class="divider-1"></li>
        <li class="group-right-item">
          <h6>Mật khẩu hiện tại</h6>
          <input class="info-input" type={show} id="pass1"
            name='password1'
            value={password1}
            onChange={handleChangInput}
          />
          <span class="eye" onclick="clickeye1()">
          </span>
        </li>
        <li class="group-right-item">
          <h6>Mật khẩu mới</h6>
          <input class="info-input" type={show} id="pass2"
            name='password2'
            value={password2}
            onChange={handleChangInput}
          />
          <span class="eye" onclick="clickeye2()">
          </span>
        </li>

        <li class="group-right-item">
          <h6>Xác nhận mật khẩu mới</h6>
          <input class="info-input" type={show} id="pass3"
            name='password3'
            value={password3}
            onChange={handleChangInput}
          />
          <span class="eye" onclick="clickeye3()">

          </span>
        </li>
        <span><input type={"checkbox"} onChange={handleClickShowPass} /> Hiển thị mật khẩu</span>

        <li class="group-right-item">
          <button onClick={handleChangePass} class="btn-update">Thay đổi</button>
        </li>
      </ul>
    </>
  )
}

export default ChangePass
