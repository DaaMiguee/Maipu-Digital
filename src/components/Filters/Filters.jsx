import React from 'react'
import "./Filters.css"

const Filters = ({ dataProducts }) => {
    return (
        <section className='filters_container'>
            <h2>{dataProducts.length} Productos</h2>
            <div>
                <label htmlFor="">Ordenar por:</label>
                <select name="" id="">
                    <option value="">antiguos</option>
                </select>
            </div>
        </section>
    )
}

export default Filters