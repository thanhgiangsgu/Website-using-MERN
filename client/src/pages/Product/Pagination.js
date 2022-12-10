import React from "react"
import { Link } from "react-router-dom"
import Pagination from '@mui/material/Pagination';


const Paginate = ({ pages, page }) => {
    console.log(page)
    return (
        // pages > 1 && (
        //     <Pagination>
        //         {[...Array(pages).keys()].map((x) => (
        //             <Link key={x + 1} to={`/keyboard/${x + 1}`}>
        //                 <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        //             </Link>
        //         ))}
        //     </Pagination>
        // )
        // <Pagination count={pages} page={page} onChange={handleChange} />
        <></>
    )
}

export default Paginate