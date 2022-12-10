import React, { useState, useEffect } from 'react'
import './Chart.css'

const Chart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch('http://localhost:3002/orderdetail/get-overview')
    .then(res => res.json())
    .then(rows => {
      setData(rows)
    })
  }

  return (
    
    <>
      <h3>Hi, Welcome back</h3>
    <div className='minimal-dashboard'>
        

        <div className='box-dashboard' style={{backgroundColor: '#8fd8fa'}}>
          <div className='box-icon' style={{backgroundColor: '#58c9fd'}}>
              <img src='../sale.png'/>
              
          </div>
          <h2 className='bd-data'>{data.product_stock}</h2>
              <h4 className='bd-title'>Sản phẩm tồn kho</h4>
        </div>

        <div className='box-dashboard' style={{backgroundColor: '#def6b4'}}>
          <div className='box-icon' style={{backgroundColor: '#c4f66e'}}>
              <img src='../order.png'/>
              
          </div>
          <h2 className='bd-data'>{data.index_order}</h2>
              <h4 className='bd-title'>Đơn hàng</h4>
        </div>

        <div className='box-dashboard' style={{backgroundColor: '#f3c9ed'}}>
          <div className='box-icon' style={{backgroundColor: '#fa97eb'}}>
              <img src='../keyboard.png'/>
              
          </div>
          <h2 className='bd-data'>{data.product_sold}</h2>
              <h4 className='bd-title'>Sản phẩm bán ra</h4>
        </div>

        <div className='box-dashboard' style={{backgroundColor: '#f0f2bb'}}>
          <div className='box-icon' style={{backgroundColor: '#edf255'}}>
          
              <img src='../sales.png'/>
              
          </div>
          <h2 className='bd-data'>{data.total_revenue}</h2>
              <h4 className='bd-title'>Tổng doanh thu</h4>
        </div>
    </div>
    </>
  )
}

export default Chart