import React from 'react'

import { FaCrown } from 'react-icons/fa'
import SectionHead from '../Components/SectionHead'
import { programs } from '../Data/programs'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { VscTriangleRight } from "react-icons/vsc";

const Products = () => {
  return (
    <section className="products">
        <div className="container products-container">
            <SectionHead icon={<FaCrown />} title="Products" />
            
            <div className="product-cards">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="products-product" key={id} >
                                <span>{ icon }</span>
                                <h4>{ title }</h4>
                                <small>{ info }</small>
                                <Link to={path} className='btn-primary-sm'>Learn More  <VscTriangleRight />  </Link>
                            </Card>
                        )
                    })
                }
            </div> 
        </div>
    </section>
  )
}

export default Products


// import React from 'react'

// 
// 
// import { productsInfo } from '../Components/productsInfo'
// 

// const Products = () => {
//   return (
//     <section className="products">
//         <div className="container products-container">
//             
//         </div>
//         <div className="product-cards">
//             {
//                 productsInfo.map(({id, icon, title, info, path}) => {
//                     return (
//                       
//                     )
//                 })
//             }
//         </div>
//     </section>
//   )
// }

// export default Products