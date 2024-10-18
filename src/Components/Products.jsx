import React from 'react'

import { FaCrown } from 'react-icons/fa'
import SectionHead from '../Components/SectionHead'
import { productsInfo } from '../Components/productsInfo'
import Card from '../UI/Card'

const Products = () => {
  return (
    <section className="products">
        <div className="container products-container">
            <SectionHead icon={<FaCrown />} title="Products" />
        </div>
        <div className="product-cards">
            {
                productsInfo.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="products-product" key={id} >
                            <span>{ icon }</span>
                            <h4>{ title }</h4>
                            <small>{ info }</small>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Products