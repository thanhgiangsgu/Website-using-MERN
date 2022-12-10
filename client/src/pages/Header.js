import React, { useState } from 'react'

const Header = () => {
    const cc = JSON.parse(localStorage.getItem('dataUser'))
    const [leftBtn, setLeftBtn] = useState(cc == null ? "Đăng nhập" : cc.username)
    const [rightBtn, setRightBtn] = useState(cc == null ? "Đăng ký" : "Đăng xuất")
    const [leftLinkBtn, setLeftLinkBtn] = useState(cc == null ? "/login" : "")
    const [rightLinkBtn, setRightLinkBtn] = useState(cc == null ? "/signup" : "")
    const [search, setSearch] = useState(" ")

    var dataUser = [

    ]

    const handleLeftBtn = () => {

        if (localStorage.getItem('dataUser') == null) {
            window.location.href = "/login"
        } else {
            window.location.href = "/account/info"
        }




    }

    const handleRightBtn = () => {
        if (localStorage.getItem('dataUser') == null) {
            window.location.href = "/signin"
        } else {
            localStorage.removeItem("dataUser");
            window.location.href = "/"
        }
    }



    const setLogin = () => {

        if (localStorage.getItem('dataUser') == null) {
            setLeftBtn("Đăng nhập")
            setRightBtn("Đăng ký")
            setLeftLinkBtn('/login')
            setRightLinkBtn('/signup')
        }
        else {
            dataUser = JSON.parse(localStorage.getItem("dataUser"))
            setLeftBtn(dataUser.username)
            setRightBtn("Đăng xuất")
            setLeftLinkBtn('')
            setRightLinkBtn('')
        }

        setLogin()

    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setSearch({[name]: value })
        console.log(search.search);
    }

    const handleClickBtnSearch = () => {
        window.location.href = `/keyboard/1?search=${search.search}`
       
    }


    return (
        <div>
            <>
                {/* <!-- Page Preloder --> */}
                {/* <div id="preloder">
        <div class="loader"></div>
    </div> */}

                {/* <!-- Offcanvas Menu Begin --> */}
                <div class="offcanvas-menu-overlay"></div>
                <div class="offcanvas-menu-wrapper">
                    <div class="offcanvas__close">+</div>
                    <ul class="offcanvas__widget">
                        <li><span class="icon_search search-switch"></span><input type={'text'}></input></li>
                        <li><a href="#"><span class="icon_heart_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                        <li><a href="#"><span class="icon_bag_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                    </ul>
                    <div class="offcanvas__logo">

                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div class="offcanvas__auth">
                        <a href="#">{leftBtn}</a>
                        <a href="#">{rightBtn}</a>
                    </div>
                </div>

                <header class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-1 col-lg-4">     
                                <div class="header__logo">

                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7">
                                <nav class="header__menu">      
                                    <ul>
                                        <li class="active"><a href="">TRANG CHỦ</a></li>
                                        <li><a href="/keyboard/1">BÀN PHÍM</a></li>
                                        <li><a href="/mouse">CHUỘT</a></li>
                                        <li><a href="/headphone">TAI NGHE</a></li>
                                        <li><a href="/accessory">PHỤ KIỆN</a></li>
                                        <li><a href="/switch">SWITCH</a></li>
                                        <li><a href="/furniture">BÀN GHẾ</a></li>
                                        <li><a href="/contact">LIÊN HỆ</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-4">
                                <div class="header__right" style={{ display: 'flex' }}>
                                    <div class="header__right__auth" style={{ display: 'flex', cursor: 'pointer' }}>
                                        <div style={{ marginRight: '10px' }} onClick={() => handleLeftBtn()}>{leftBtn}</div>
                                        <div onClick={() => handleRightBtn()} href={rightLinkBtn}>{rightBtn}</div>
                                    </div>
                                    <ul class="header__right__widget" style={{display: 'flex'}}>
                                        <li style={{display: 'flex'}}><input type={'text'} style={{ width: '80px', borderRadius: '10%' }} name='search' onChange={handleChangeInput} ></input><span class="icon_search search-switch" onClick={handleClickBtnSearch}></span></li>
                                        <li><a href="/wishlist"><span class="icon_heart_alt"></span>

                                        </a></li>
                                        <li><a href="/cart"><span class="icon_bag_alt"></span>

                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="canvas__open">
                            <i class="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
                {/* <!-- Header Section End --> */}



            </>
        </div>
    )
}

export default Header
