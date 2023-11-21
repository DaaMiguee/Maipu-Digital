import React, { useContext } from 'react'
import CartFilters from '../components/CartFilters/CartFilters'
import CartContainer from '../components/CartContainer/CartContainer'
import { ProductsContext } from '../context/ProductsContext'
import Loader from '../components/Loader/Loader'

const CartPage = () => {
    const { loading } = useContext(ProductsContext);

    return (
        <section>
            {loading ? <Loader /> :
                <section className='cart_section'>
                    <CartFilters />
                    <CartContainer />
                </section>}
        </section>
    )
}

export default CartPage