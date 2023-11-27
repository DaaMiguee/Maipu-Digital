import "./ImprimeSection.css";
import mujerConCamara from "../../assets/mujer_con_camara.png";
import Modal from 'react-bootstrap/Modal';
import imgwsp from "../../images/wsp.png"
import React, { useState } from 'react'
import { Link } from "react-router-dom";

function ImprimeSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendSmsWsp = () => {
    const message = "Hola, ¿hay un asesor disponible que pueda ayudarme?"
    const whatsappLink = `https://api.whatsapp.com/send?phone=2616815426&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
  }
  return (
    <>
      <div id="ImprimeSection__container">
        <Modal dialogClassName="wp-modal" show={show} onHide={handleClose} centered>
          <Modal.Header>
            <img src={imgwsp} alt="" />
          </Modal.Header>
          <Modal.Body>
            Serás redirigido a nuestro chat de Whatsapp, alguien de nuestro equipo te asesorará en tu solicitud
          </Modal.Body>
          <Modal.Footer>
            <Link className='modal_close' onClick={() => { handleClose(); sendSmsWsp() }}>
              Entendido
            </Link>
          </Modal.Footer>
        </Modal>
        <div className="ImprimeSection">
          <div className="img__container">
            <img
              src={mujerConCamara}
              id="mujerImg"
              alt="imprime tus fotografias"
            />
          </div>
          <div className="ImprimeSection__text">
            <h3 className="imprime">
              Imprime <br />
              <b className="h3__orange">tus Fotografías</b>
            </h3>
            <p className="imprime__p">
              Impresión fotográfica de calidad premium: Transforma tus recuerdos
              en obras maestras. Colores vibrantes, detalles nítidos y entrega
              rápida
            </p>
            <div className="ImprimeSection__btn">
              <button className="btn habla" onClick={handleShow} >Habla con nosotros</button>
              <a className="btn venta" href="/productos">Venta de insumos</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImprimeSection;
