import React from 'react'
import './ServicesSection.css'
import serv_accesorios from '../../images/serv_accesorios.png'
import serv_celulares from '../../images/serv-celulares.png'
import serv_computadoras from '../../images/serv-computadoras.png'
import { Link } from 'react-router-dom'
const ServicesSection = () => {
    const ArrowUpRight = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M23.4375 7.5V19.6875C23.4375 19.9361 23.3388 20.1746 23.1629 20.3504C22.9871 20.5262 22.7487 20.625 22.5 20.625C22.2514 20.625 22.0129 20.5262 21.8371 20.3504C21.6613 20.1746 21.5625 19.9361 21.5625 19.6875V9.76289L8.16331 23.1633C7.9874 23.3392 7.74881 23.438 7.50003 23.438C7.25125 23.438 7.01266 23.3392 6.83675 23.1633C6.66084 22.9874 6.56201 22.7488 6.56201 22.5C6.56201 22.2512 6.66084 22.0126 6.83675 21.8367L20.2371 8.4375H10.3125C10.0639 8.4375 9.82544 8.33873 9.64962 8.16291C9.47381 7.9871 9.37503 7.74864 9.37503 7.5C9.37503 7.25136 9.47381 7.0129 9.64962 6.83709C9.82544 6.66127 10.0639 6.5625 10.3125 6.5625H22.5C22.7487 6.5625 22.9871 6.66127 23.1629 6.83709C23.3388 7.0129 23.4375 7.25136 23.4375 7.5Z" fill="white" />
        </svg>
    )
    return (
        <section className='services_section'>
            <section className='services_header'>
                <div>
                    <h2>Nuestros <span>Servicios</span></h2>
                </div>
                <div className='services_subtitle'>
                    <h3>Reparación, insumos y laboratorio propio. Cubrimos tus necesidades tecnológicas. <span>¡Confía en nosotros!</span></h3>
                </div>
            </section>
            <div className='line'></div>
            <section className='cards_container'>
                <article className='article art_1'>
                    <section className='art_header'>
                        <h3>Computadores</h3>
                        <Link to="#">
                            {ArrowUpRight}
                        </Link>
                    </section>
                    <div className='line2'></div>
                    <section className='art_main'>
                        <p>Reparación de computadoras: Soluciones expertas para tu tecnología.</p>
                    </section>
                    <section className='art_footer'>
                        <img src={serv_computadoras} alt="" />
                    </section>
                </article>
                <article className='article art_2'>
                    <section className='art_header'>
                        <h3>Celulares</h3>
                        <Link to="#">
                            {ArrowUpRight}
                        </Link>
                    </section>
                    <div className='line2'></div>
                    <section className='art_main'>
                        <p>Reparación de celulares: Tu solución confiable para problemas tecnológicos.</p>
                    </section>
                    <section className='art_footer'>
                        <img src={serv_celulares} alt="" />
                    </section>
                </article>
                <article className='article art_3'>
                    <section className='art_header'>
                        <h3>Accesorios</h3>
                        <Link to="#">
                            {ArrowUpRight}
                        </Link>
                    </section>
                    <div className='line2'></div>
                    <section className='art_main'>
                        <p>Venta de accesorios: Amplia selección para mejorar tus dispositivos al máximo.</p>
                    </section>
                    <section className='art_footer'>
                        <img src={serv_accesorios} alt="" />
                    </section>
                </article>
            </section>
        </section>
    )
}

export default ServicesSection