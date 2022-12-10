import { Input } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="col-lg-2 col-md-2" style={{marginTop: '30px', marginLeft: '30px'}}>
    <div className="shop__sidebar">
            <div className="sidebar__categories">
                <div className="section-title">
                        <h4>DANH MỤC</h4>
                        </div>
                        <div className="categories__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseOne">Bàn phím</a>
                                       
                                    </div>
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Chuột</a>
                                        
                                    </div>
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseThree">Tai nghe</a>
                                        
                                    </div>
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseFour">Phụ kiện</a>
                                       
                                    </div>
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseFive">Swtich</a>
                                    </div>
                                    <div className="card">
                                        <a data-toggle="collapse" data-target="#collapseFive">Bàn ghế</a>
                                    </div>
                                </div>
                            </div>
            </div>


            <div className="sidebar__categories">
                <div className="section-title">
                        <h4>SẮP XẾP</h4>
                        </div>
                        <div className="categories__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <a style={{color: '#333'}} href='/keyboard/1?sort=tang' data-toggle="collapse" data-target="#collapseOne">Giá tăng dần</a>
                                       
                                    </div>
                                    <div className="card">
                                        <a style={{color: '#333'}} href='/keyboard/1?sort=giam' data-toggle="collapse" data-target="#collapseTwo">Giá giảm dần</a>
                                        
                                    </div>
                                    
                                </div>
                            </div>
            </div>

            <div className="sidebar__filter">
                            <div className="section-title">
                                <h4>Shop by price</h4>
                            </div>
                            <div className="filter-range-wrap">
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="99"></div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <p>Price:</p>
                                        {/* <input type="text" id="minamount">
                                        <input type="text" id="maxamount"> */}
                                        <input type="text" id="minamount"></input>
                                        <input type="text" id="maxamount"></input>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Filter</a>
                        </div>
        </div>
    </div>
        
    </>
  )
}

export default Sidebar
