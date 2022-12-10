import React from 'react'

const Discount = () => {
  return (
    <section className="discount">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 p-0">
                <div className="discount__pic" style={{height: '100%'}}>
                    <img src='img/discount.jpg'/>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="discount__text">
                    <div className="discount__text__title">
                        <span>Discount</span>
                        <h2>Year End</h2>
                        <h5><span>Sale</span> 50%</h5>
                    </div>
                    <h4 style={{fontFamily: "Montserrat"}}>Áp dụng khi mua tại cửa hàng</h4>
                    <a href="#">Shop now</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Discount
