import "./ImprimeSection.css";
import mujerConCamara from "../../assets/mujer_con_camara.png";

function ImprimeSection() {
  return (
    <>
      <div id="ImprimeSection__container">
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
              <button className="btn habla">Habla con nosotros</button>
              <button className="btn venta">Venta de insumos</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImprimeSection;
