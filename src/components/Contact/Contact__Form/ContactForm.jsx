import "./contactForm.css";
import Swal from "sweetalert2";
function Contact__Form() {
  function formularioEnviado() {
    Swal.fire({
      title: "¡Consulta enviada!",
      text: "¡Responderemos a tu consulta en breve!",
      icon: "success",
    });
  }
  return (
    <>
      <div className="contact_form_container">
        <form
          action="https://formsubmit.co/maipudigitalmza@gmail.com"
          method="POST"
        >
          <div className="form__inputs">
            <input
              className="contact__input"
              placeholder="Nombre"
              type="text"
              id="nombre"
              name="nombre"
              required
            />

            <input
              className="contact__input"
              placeholder="Correo electrónico"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
            <input
              className="contact__input"
              placeholder="Teléfono"
              type="tel"
              id="telefono"
              name="telefono"
              required
            />

            <input
              className="contact__input"
              placeholder="Mensaje"
              type="mensaje"
              id="mensaje"
              name="mensaje"
              required
            />
            <input
              type="hidden"
              name="_next"
              value="https://maipudigital.netlify.app/"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <button
              type="submit"
              className="enviar"
              onClick={() => {
                formularioEnviado();
              }}
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact__Form;
