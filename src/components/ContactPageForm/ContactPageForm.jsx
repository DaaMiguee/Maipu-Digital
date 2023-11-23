import Map from "../Map/Map";
import "./contactPageFormStyle.css";

function ContactPageForm() {
  return (
    <>
      <div className="contacPageForm__layout">
        <section className="contactPageForm__container">
          <div className="contactPageForm__h1">
            <h1>¡Contactanos!</h1>
          </div>
          <div>
            <form
              className="contactPageForm__form"
              action="#"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="contactPageForm">
                <label className="contactPageForm__label" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="contactPageForm__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="contactPageForm">
                <label className="contactPageForm__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="contactPageForm__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
              </div>

              <div className="contactPageForm">
                <label className="contactPageForm__label" htmlFor="telephone">
                  Numero de telefono
                </label>
                <input
                  className="contactPageForm__input"
                  type="telephone"
                  name="telephone"
                  id="telephone"
                  placeholder="+54 3333 33333333"
                />
              </div>

              <div className="contactPageForm__text_area__container">
                <label
                  className="contactPageForm__label__text_area"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="contactPageForm__text_area"
                  name="message"
                  id="message"
                  placeholder="Escribe aqui tu mensaje..."
                ></textarea>
              </div>

              <div className="contactPageForm">
                <button className="contactPageForm__btn" type="submit">
                  <span className="contactPageForm__btn__span">
                    Enviar mensaje
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                  >
                    <path
                      d="M11.707 8.40188L3.6759 9.46163C3.58357 9.47383 3.49692 9.50507 3.42467 9.55221C3.35243 9.59935 3.29712 9.66072 3.26433 9.73015L0.495243 15.6056C0.23081 16.1461 0.944139 16.6612 1.59882 16.4011L20.7915 8.80129C20.9242 8.74864 21.0357 8.66779 21.1137 8.5678C21.1916 8.46781 21.2329 8.35262 21.2329 8.2351C21.2329 8.11759 21.1916 8.0024 21.1137 7.90241C21.0357 7.80242 20.9242 7.72157 20.7915 7.66892L1.59882 0.0691228C0.944139 -0.190115 0.23081 0.324983 0.495243 0.864568L3.26539 6.74006C3.29819 6.80949 3.35349 6.87086 3.42574 6.918C3.49799 6.96514 3.58464 6.99638 3.67697 7.00858L11.7081 8.06833C11.7582 8.07466 11.8038 8.09493 11.8367 8.1255C11.8696 8.15607 11.8877 8.19493 11.8877 8.2351C11.8877 8.27528 11.8696 8.31414 11.8367 8.34471C11.8038 8.37527 11.7582 8.39554 11.7081 8.40188H11.707Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>
        <Map />
      </div>
    </>
  );
}

export default ContactPageForm;
