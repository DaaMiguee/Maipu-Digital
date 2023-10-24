import React from 'react'
import './HeroSection.css'
import banner from '../../images/hero-img.webp'
import userimg1 from '../../images/Ellipse-2.svg'
import userimg2 from '../../images/Ellipse-3.svg'
import userimg3 from '../../images/Ellipse-4.svg'
import userimg4 from '../../images/Ellipse-5.svg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section className='hero_section'>
            <div className='content_block'>
                <div className='text_container'>
                    <div className='text_title'>
                        <h1><span>Servicio</span> Técnico y venta de insumos</h1>
                    </div>
                    <div className='text_subtitle'>
                        <p>En Maipú Digital, somos tu aliado confiable.</p>
                    </div>
                </div>
                <div className='button_container'>
                    <Link className='btn_1' to="#">Habla con nosotros</Link>
                    <Link className='btn_2' to="#">Deja un mensaje</Link>
                </div>
                <div className='users_container'>
                    <div className='users_sub_container'>
                        <div className='user_circle'>
                            <img src={userimg1} alt="" />
                        </div>
                        <div className='user_circle'>
                            <img src={userimg2} alt="" />
                        </div>
                        <div className='user_circle'>
                            <img src={userimg3} alt="" />
                        </div>
                        <div className='user_circle'>
                            <img src={userimg4} alt="" />
                        </div>
                        <div className='user_circle plus'>
                            <Link to="">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Plus">
                                        <path id="Vector" d="M26.25 15C26.25 15.2486 26.1512 15.4871 25.9754 15.6629C25.7996 15.8387 25.5611 15.9375 25.3125 15.9375H15.9375V25.3125C15.9375 25.5611 15.8387 25.7996 15.6629 25.9754C15.4871 26.1512 15.2486 26.25 15 26.25C14.7514 26.25 14.5129 26.1512 14.3371 25.9754C14.1613 25.7996 14.0625 25.5611 14.0625 25.3125V15.9375H4.6875C4.43886 15.9375 4.2004 15.8387 4.02459 15.6629C3.84877 15.4871 3.75 15.2486 3.75 15C3.75 14.7514 3.84877 14.5129 4.02459 14.3371C4.2004 14.1613 4.43886 14.0625 4.6875 14.0625H14.0625V4.6875C14.0625 4.43886 14.1613 4.2004 14.3371 4.02459C14.5129 3.84877 14.7514 3.75 15 3.75C15.2486 3.75 15.4871 3.84877 15.6629 4.02459C15.8387 4.2004 15.9375 4.43886 15.9375 4.6875V14.0625H25.3125C25.5611 14.0625 25.7996 14.1613 25.9754 14.3371C26.1512 14.5129 26.25 14.7514 26.25 15Z" fill="#E38C26" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className='users_desc'>
                        <span>+150</span>
                        <p>Clientes Felices</p>
                    </div>
                </div>
            </div>
            <div className='banner_container'>
                <div>
                    <svg className='big_circle' width="490" height="490" viewBox="0 0 490 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="245" cy="245" r="245" fill="#E38C26" />
                    </svg>
                    <svg className='small_circle' xmlns="http://www.w3.org/2000/svg" width="133" height="133" viewBox="0 0 133 133" fill="none">
                        <circle cx="66.5" cy="66.5" r="64" fill="#00578E" stroke="white" stroke-width="5" />
                    </svg>
                </div>
                <div className='img_container2'>
                    <img className='home_banner' src={banner} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection