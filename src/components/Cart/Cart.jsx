import React, { useContext } from 'react'
import "./Cart.css"
import { ProductsContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const { cart, removeProduct } = useContext(ProductsContext);
    const handleRemoveProduct = (pid) => {
        removeProduct(pid);
    };

    const notify = () => toast("¡Eliminado de tu lista!", {
        className: 'deltoast',
        closeButton: false
    });
    return cart.map((product) => {
        return (
            <article className='cart_item' key={product.id}>
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
                        theme="deltoast"
                    />
                <div className='card_main'>
                    <div className='cart_img_container'>
                        <img src={product.images} alt={`imagen de ${product.title}`} />
                    </div>
                    <div className='cart_item_desc'>
                        <h3>{product.title}</h3>
                        <div className='description'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <Link onClick={() => { handleRemoveProduct(product.id); notify() }} >Quitar de favoritos</Link>
            </article>
        )
    })
}


export default Cart