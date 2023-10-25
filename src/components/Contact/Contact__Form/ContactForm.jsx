import "./contactForm.css"

function Contact__Form(){
    return <>
    <div>
    <form action=" " method="post">
        <div className="form__inputs">
        <input className="contact__input" placeholder="Nombre" type="text" id="nombre" name="nombre" required/>
        
        <input className="contact__input" placeholder="Correo electrónico" type="email" id="email" name="email" required/>
        <input className="contact__input" placeholder="Teléfono" type="tel" id="telefono" name="telefono" required/>
        
        <input className="contact__input" placeholder="Mensaje" type="mensaje" id="mensaje" name="mensaje" required/>
       
        <button type="submit" className="enviar">Enviar mensaje</button>
        </div>
    </form>
    </div>
    </>
}

export default Contact__Form