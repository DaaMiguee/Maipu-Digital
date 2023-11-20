import React from 'react'
import "./CartFilters.css"

const CartFilters = () => {
    return (
        <section className='cart_filters'>
            <h2>Mis Favoritos</h2>
            <div>
                <label htmlFor="">Ordenar por:</label>
                <select name="" id="">
                    <option value="">antiguos</option>
                    <option value=""></option>
                </select>
            </div>
        </section>
    )
}

export default CartFilters