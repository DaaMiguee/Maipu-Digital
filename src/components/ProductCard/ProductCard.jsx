import React, { useContext } from 'react'
import "./ProductCard.css"
import { ProductsContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ productsData }) => {
    const { addToCart } = useContext(ProductsContext)
    const notify = () => toast("¡Agregado a tu lista!", {
        className: 'addtoast',
        closeButton: false
    })
    if (!productsData.length) {
        return <div>
            <p className='no_products'>No se encontraron productos</p>
        </div>
    } else {
        return productsData.map((product) => {
            return (
                <article className='card' key={product.id}>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={700}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="addtoast"
                    />
                    <div className="img_container">
                        <img src={product.images} alt={`imagen de ${product.title}`} loading="lazy" />
                    </div>
                    <h3>{product.title}</h3>
                    <div className='desc_container'>
                        <p>{product.description}</p>
                    </div>
                    <Link onClick={() => { addToCart(product); notify() }}>Agregar a favoritos</Link>
                </article>
            )
        })
    }
}

export default ProductCard