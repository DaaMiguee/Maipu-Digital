import React, { useContext } from 'react'
import "./Count.css"
import { ProductsContext } from '../../context/ProductsContext'

const Count = () => {
    const { cart } = useContext(ProductsContext)
    if(cart.length > 0){
        return (
            <span className='count'>{cart.length}</span>  
        )
    }
    
}

export default Count