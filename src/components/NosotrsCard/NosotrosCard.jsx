import "./nosotrosCard.css";

function NosotrosCard({ image, title, paragraph, izq }) {
  return (
    <>
      {izq ? (
        <div className="nosotrosCard__container__izq">
          <div className="nosotrosCard__img__container">
            <img src={image} alt={"Técnico reparando"} />
          </div>
          <div className="nosotrosCard__content__izq">
            <h3 className="nosotrosCard__title">{title}</h3>
            <hr className="nosotrosCard__hr" />
            <p className="nosotrosCard__paragraph">{paragraph}</p>
          </div>
        </div>
      ) : (
        <div className="nosotrosCard__container">
          <div className="nosotrosCard__content__der">
            <h3 className="nosotrosCard__title">{title}</h3>
            <hr className="nosotrosCard__hr" />
            <p className="nosotrosCard__paragraph">{paragraph}</p>
          </div>
          <div className="nosotrosCard__img__container">
            <img src={image} alt={"Técnico reparando"} />
          </div>
        </div>
      )}
    </>
  );
}

export default NosotrosCard;
