import React, { useContext } from 'react'
import "./CartContainer.css"
import Cart from '../Cart/Cart'
import { ProductsContext } from '../../context/ProductsContext'
import PayWsp from '../PayWsp/PayWsp'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { cart } = useContext(ProductsContext)


    if (!cart.length) {
        return (<div className='no_products_cont'>
            <p>No hay productos en favoritos </p>
            <Link to= "/productos">Ver productos</Link>
        </div>)
    } else {
        return (
            <div>
                <section className='cart_container'>
                    <Cart />
                </section>
                <section className='wsp_container'>
                    <PayWsp />
                </section>
            </div>
        )
    }
}

export default CartContainer