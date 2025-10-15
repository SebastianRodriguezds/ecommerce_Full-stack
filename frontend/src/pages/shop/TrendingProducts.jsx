import React, { useState } from 'react'
import ProductCards from './ProductCards'
import { use } from 'react'
// import products from "../../data/products.json"

import { useFetchAllProductsQuery } from '../../redux/features/products/productAPI'

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }

    const {data : {products = []} = {}, error, isLoading} = useFetchAllProductsQuery({
        page: 1,
        limit: 8,
    });

    console.log("productos desde TrendingProducts:" ,products)
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
            </p>
            <div className='mt-12'>
            <ProductCards products={products} />
            </div>

            {/* load more prod. button */}
            <div className="product__button">
                {
                    visibleProducts < products.length && (
                        <button className='btn' onClick={loadMoreProducts}>Load More</button>
                    )
                }
            </div>
        </section>
    )
}

export default TrendingProducts