import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState, useEffect } from 'react'
import { axios } from 'axios'
import dataOrder from '..'
import './Chart.css'

// Generate Order Data



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/order')
      .then(res => res.json())
      .then(rows => {
        setRows(rows)
      })

  }, []);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <div style={{ display: 'flex', margin: 'auto 15px' }}>



        <Table size="small" style={{ width: '45%', float: 'left' }}>
          <TableHead>
            <TableRow>
              <TableCell>Mã hóa đơn</TableCell>
              <TableCell>Tên khách hàng</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="right">Tổng tiền</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.map((row) => (
              <TableRow key={row._id} >
                <TableCell>{row.order_id}</TableCell>
                <TableCell>{row.customer_id.customer_name}</TableCell>
                <TableCell>{row.order_status}</TableCell>
                <TableCell align="right">{`$${row.order_total_price}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
         
          <Link href='orders' style={{width: '130px'}}>Xem chi tiết</Link>
        </Table>

        <div className='traffic-by-site'>



          <div className='box-dashboard'>
            <div className='box-icon' >
              <img src='../facebook.png' />

            </div>
            <h2 className='bd-data'>23.596</h2>
            <h4 className='bd-title'>Facebook</h4>
          </div>

          <div className='box-dashboard' >
            <div className='box-icon' >
              <img src='../instagram.png' />

            </div>
            <h2 className='bd-data'>13.753</h2>
            <h4 className='bd-title'>Instagram</h4>
          </div>

          <div className='box-dashboard' >
            <div className='box-icon' >
              <img src='../google.png' />

            </div>
            <h2 className='bd-data'>941</h2>
            <h4 className='bd-title'>Google</h4>
          </div>

          <div className='box-dashboard' >
            <div className='box-icon' >

              <img src='../twitter.png' />

            </div>
            <h2 className='bd-data'>1.251</h2>
            <h4 className='bd-title'>Twitter</h4>
          </div>

        </div>

      </div>


    </React.Fragment>
  );
}