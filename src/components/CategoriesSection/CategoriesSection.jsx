import React, { useState } from 'react'
import "./CategoriesSection.css"

const CategoriesSection = ({ changeFilters }) => {
        const [selectedCategory, setSelectedCategory] = useState('');
        const handleSelectCategory = (category) => {
            setSelectedCategory(category);
            changeFilters((prevState) => ({
                ...prevState,
                category,
            }));
        };
    return (
        <section className='category_section'>
            <div className='cat_line'></div>
            <ul>
                <li
                    className={selectedCategory === 'auriculares-in-ear' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('auriculares-in-ear')}>
                    Auriculares in Ear
                </li>
                <li
                    className={selectedCategory === 'auriculares-vincha' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('auriculares-vincha')}>
                    Auriculares Vincha
                </li>
                <li className={selectedCategory === 'cables-adaptadores' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('cables-adaptadores')}>
                    Cables y adaptadores
                </li>
                <li
                    className={selectedCategory === 'charger' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('charger')}>
                    Cargadores
                </li>                <li
                    className={selectedCategory === 'joystick' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('joystick')}>
                    Joysticks
                </li>                <li
                    className={selectedCategory === 'led' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('led')}>
                    Lámparas
                </li>                <li
                    className={selectedCategory === 'mouse' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('mouse')}>
                    Mouse y teclado
                </li>
                <li
                    className={selectedCategory === 'speaker' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('speaker')}>
                    Parlantes
                </li>                <li
                    className={selectedCategory === 'smartwatch' ? 'selected' : ''}
                    onClick={() => handleSelectCategory('smartwatch')}>
                    Relojes
                </li>
            </ul>
        </section>
    )
}

export default CategoriesSection