import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import CategoriesSection from '../components/CategoriesSection/CategoriesSection'
import {ProductsContext} from '../context/ProductsContext'
import Filters from '../components/Filters/Filters'
import Loader from '../components/Loader/Loader'

const Products = () => {
    const { productsData, filters, setFilters, loading } = useContext(ProductsContext);

    const filterProd = (productsData)=>{
        return productsData.filter(product=>{
            return product.category === filters.category
        })
    }
    const filteredProd = filterProd(productsData)

    const style ={
        container:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
        }
    }

    return (
        <section>
            {loading ? <Loader/> :
            <section>
            <CategoriesSection changeFilters={setFilters}/>
            <Filters dataProducts={filteredProd}/>
            <div style={style.container}>
                <ProductCard productsData={filteredProd} />
            </div>
        </section>}
        </section>
        
    )
}

export default Products