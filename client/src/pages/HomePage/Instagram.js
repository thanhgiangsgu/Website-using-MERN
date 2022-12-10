import React from 'react'
import './instagram.css'


const Instagram = () => {
  return (
    <div className="instagram">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0" >
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-.jpg"  style={{backgroundImage: 'url(img/instagram/insta-2.jpg)'}}>
                    
                    {/* <img src='img/instagram/insta-1.jpg'/> */}
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-2.jpg" style={{backgroundImage: 'url(img/instagram/insta-1.jpg)'}}>

                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-3.jpg" style={{backgroundImage: 'url(img/instagram/insta-3.jpg)'}}>
                
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-4.jpg" style={{backgroundImage: 'url(img/instagram/insta-4.jpg)'}}>
                
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg" style={{backgroundImage: 'url(img/instagram/insta-5.jpg)'}}>
                
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg" style={{backgroundImage: 'url(img/instagram/insta-6.jpg)'}}>
                
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Instagram
