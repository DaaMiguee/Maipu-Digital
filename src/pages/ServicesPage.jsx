import NosotrosCard from "../components/NosotrsCard/NosotrosCard";
import card_one from "../assets/cables.png";
import card_two from "../assets/hdd.png";
import card_three from "../assets/cpu.png";
import card_four from "../assets/headset.png";
import "./servicesPage.css";
function ServicesPage() {
  return (
    <>
      <div className="services__container">
        <div className="title__line">
          <p className="services__title">
            Nuestros <b className="services__title__orange">Servicios</b>
          </p>
          <hr className="services__hr" />
        </div>
        <NosotrosCard
          image={card_one}
          title="Reparaciones rápidas"
          paragraph="Nuestros técnicos altamente capacitados están listos para diagnosticar y solucionar cualquier problema de hardware o software."
          izq={true}
        />
        <NosotrosCard
          image={card_two}
          title="Asesoramiento Experto"
          paragraph="Ofrecemos asesoramiento personalizado para ayudarte a elegir la mejor solución tecnológica para tus necesidades específicas."
        />
        <NosotrosCard
          image={card_three}
          title="Mantenimiento Preventivo"
          paragraph="Mantené tus dispositivos funcionando sin problemas con nuestros programas de mantenimiento periódico. Evitá problemas costosos y maximiza la vida útil de tus equipos."
          izq={true}
        />
        <NosotrosCard
          image={card_four}
          title="Accesorios de vanguardia"
          paragraph="Contamos con una amplia gama de productos, insumos y accesorios que van amejorar tu experiencia tecnológica."
        />
        <button className="services__btn__contactanos">
          <p className="services__btn__p">Contáctanos</p>
        </button>
      </div>
    </>
  );
}

export default ServicesPage;
