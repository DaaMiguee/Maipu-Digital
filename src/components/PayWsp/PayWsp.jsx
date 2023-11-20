import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./PayWsp.css";
import imgwsp from "../../images/wsp.png"
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';

const PayWsp = () => {
    const {cart}= useContext(ProductsContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendSmsWsp = ()=>{
        const products = cart.map((product) => product.title);
        const message =  `¡Hola! Me interesan los siguientes productos: ${products.join(', ')}. ¿Pueden ayudarme?`
        const whatsappLink = `https://api.whatsapp.com/send?phone=2616815426&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
    }
    return (
        <section className="wsp_section">
            <div>
                <p>Pregunta y compra nuestros productos por Whatsapp, nuestro equipo te está esperando</p>
            </div>
            <Link onClick={handleShow}>
                Comprar por Whatsapp
            </Link>
            <Modal dialogClassName="wp-modal" show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <img src={imgwsp} alt="" />
                </Modal.Header>
                <Modal.Body>
                    Serás redirigido a nuestro chat de Whatsapp, alguien de nuestro equipo te asesorará en tu solicitud
                </Modal.Body>
                <Modal.Footer>
                    <Link className='modal_close' onClick={()=>{handleClose(); sendSmsWsp()}}>
                        Entendido
                    </Link>
                </Modal.Footer>
            </Modal>
        </section>
    );
};


export default PayWsp;