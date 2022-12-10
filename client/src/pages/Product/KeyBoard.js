import React from 'react'
import { useState, useEffect, } from 'react';
import Axios from 'axios'
import toast from 'react-hot-toast'
import ProductItem from './ProductItem';
import { useParams, useLocation, Link } from 'react-router-dom'
import Paginate from './Pagination';
import Pagination from '@mui/material/Pagination';


var CartArray =[];
var FavouriteArray =[];



const KeyBoard = () => {

  const search = useLocation().search;
  const sort = new URLSearchParams(search).get('sort');
  const fitter = new URLSearchParams(search).get('search');
  console.log(fitter ,"tanggg ");
    const initialState = {
        product_id: "",
        product_name: "",
        product_img1: "",
        product_price: "",
        product_amount: "",
        product_tmp_amount: "1"
      }
    // const [info, setInfo] = useState(initialState)
    // const {product_id, product_name, product_img1, product_price, product_amount} = info

    const [rows, setRows] = useState([])
    const [page,setPage] = useState();
    const [pages,setPages] = useState();
  
  //   useEffect(() => {
  //   getDataProduct()
  // },[]);

  const pageNumber = useParams().pageNumber || 1
  const listProduct = async() =>  {
    
    // const res = await Axios.get(`http://localhost:3002/product/pagination?keyword=${keyWord}&pageNumber=${pageNumber}`)
    if (fitter == null)
    {
      const res = await Axios.get(`http://localhost:3002/product/pagination?pageNumber=${pageNumber}` )
    setPage(res.data.page)
    setPages(res.data.pages)
    if (sort == "tang")
      {
        for (var i = 0; i< res.data.products.length-1 ; i++)
          for (var j = i + 1; j<res.data.products.length ; j++)  
          {
            if (res.data.products[i].product_price > res.data.products[j].product_price)
            {
              var tam = res.data.products[i]
              res.data.products[i] = res.data.products[j]
              res.data.products[j] = tam
            }
          } 
      } else 
      if  (sort === "giam")
      {
        for (var i = 0; i< res.data.products.length-1 ; i++)
          for (var j = i + 1; j<res.data.products.length ; j++)  
          {
            if (res.data.products[i].product_price < res.data.products[j].product_price)
            {
              var tam = res.data.products[i]
              res.data.products[i] = res.data.products[j]
              res.data.products[j] = tam
            }
          } 
      }
    setRows(res.data.products)
    } else 
    {
      const res = await Axios.get(`http://localhost:3002/product/findbyname?name=${fitter}`)
      setRows(res.data)
    }
    console.log("loc va phan trang",rows)
  }
  useEffect(() => {
    listProduct()
  },[]);

  // const getDataProduct = React.useCallback(() => {
  //   let api = "http://localhost:3002/product/product-keyboard"
  //   if (params.search == undefined) {
  //     api = 'http://localhost:3002/product/product-keyboard'
  //   } else 
  //   {
  //     api = `http://localhost:3002/product/findbyname?name=${params.search}`
  //   }
  //   // console.log(params.search);
  //   fetch(api)
  //   .then(res => res.json())
  //   .then(rows => {
  //       // console.log("la m a",rows);
  //       if (sort == "tang")
  //     {
  //       for (var i = 0; i< rows.length-1 ; i++)
  //         for (var j = i + 1; j<rows.length ; j++)  
  //         {
  //           if (rows[i].product_price > rows[j].product_price)
  //           {
  //             var tam = rows[i]
  //             rows[i] = rows[j]
  //             rows[j] = tam
  //           }
  //         } 
  //     }
  //     setRows(rows)
  //   })
  //  }) 
  //  console.log(rows);

   

   

   const addCart = async (product) => {
    
    const res = await Axios.post(`http://localhost:3002/cart/check-cart/${product.product_id}`)
    if (res.data.check == "false")
    {
    const info = initialState
    info.product_id = product.product_id
    info.product_name = product.product_name
    info.product_img1 = product.product_img1
    info.product_price = product.product_price
    info.product_amount = product.product_amount
    info.product_tmp_amount = 1;
    
    Axios.post(`http://localhost:3002/cart/add-cart`, info)
    toast.success('Thêm thành công')
    } else 
    {
      toast.error('Sản phẩm đã tồn tại trong giỏ hàng')
    }

  };
  
  const addFavourite = async (product) => {

    const res = await Axios.post(`http://localhost:3002/wishlist/check-wishlist/${product.product_id}`)
    if (res.data.check == "false")
    {
    const info = initialState
    info.product_id = product.product_id;
    info.product_name = product.product_name;
    info.product_img1 = product.product_img1;
    info.product_price = product.product_price;
    info.product_amount = 1;

    Axios.post(`http://localhost:3002/wishlist/add-wishlist`, info)
    toast.success('Thêm thành công')
    } else 
    {
      toast.error('Sản phẩm đã tồn tại trong giỏ hàng')
    }
  }; 

  const handleChange = async (event, value) => {

    setPage(value);
    // const res = await Axios.get(`http://localhost:3002/product/pagination?pageNumber=${value}`)
    if (sort == "tang" || sort == "giam")
    {
    window.location.href=`http://localhost:3000/keyboard/${value}?sort=${sort}`
    } else 
    {window.location.href=`http://localhost:3000/keyboard/${value}`}

    
  };
  

  return (
    <>
  
         <div className="col-lg-9 col-md-9" style={{marginLeft: '50px'}}>
                    <div className="row">   
                    {
                      rows.map((items) => (
                        
                        <ProductItem dataProduct={items} />
                      ))
                    }
                    

                        
                    
                    </div>
                    <Pagination count={pages} page={page} onChange={handleChange} />
                </div>
    </>
  )
}

export default KeyBoard
