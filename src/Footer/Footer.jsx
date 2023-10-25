import logo from "../assets/maipu-logo.png"
import "../Footer/footer.css"
function Footer(){
    return <>
   <div className="Footer__container"> 
    <div className="Footer__columnas">
   
        {/* primera columna */}
        <div className="Footer__columna__uno">

            <img src={logo} id="maipu__logo" alt="logo de maipu digital"/>
            <p className="maipu__text__derechos">Derechos reservados © 2023 Maipú Digital. Todos los derechos protegidos</p>
    

        {/* redes sociales */}
        <div className="redes">
                {/* facebook */}
            <svg className="maipu__icon__redes" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path opacity="0.2" d="M26.25 15C26.25 17.225 25.5902 19.4001 24.354 21.2502C23.1179 23.1002 21.3609 24.5422 19.3052 25.3936C17.2495 26.2451 14.9875 26.4679 12.8052 26.0338C10.623 25.5997 8.61839 24.5283 7.04505 22.955C5.47171 21.3816 4.40025 19.3771 3.96617 17.1948C3.53209 15.0125 3.75487 12.7505 4.60636 10.6948C5.45785 8.63914 6.89979 6.88213 8.74984 5.64597C10.5999 4.4098 12.775 3.75 15 3.75C17.9837 3.75 20.8452 4.93526 22.955 7.04505C25.0647 9.15483 26.25 12.0163 26.25 15Z" fill="#00578E"/>
                <path d="M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM15.9375 25.2691V17.8125H18.75C18.9986 17.8125 19.2371 17.7137 19.4129 17.5379C19.5887 17.3621 19.6875 17.1236 19.6875 16.875C19.6875 16.6264 19.5887 16.3879 19.4129 16.2121C19.2371 16.0363 18.9986 15.9375 18.75 15.9375H15.9375V13.125C15.9375 12.6277 16.135 12.1508 16.4867 11.7992C16.8383 11.4475 17.3152 11.25 17.8125 11.25H19.6875C19.9361 11.25 20.1746 11.1512 20.3504 10.9754C20.5262 10.7996 20.625 10.5611 20.625 10.3125C20.625 10.0639 20.5262 9.8254 20.3504 9.64959C20.1746 9.47377 19.9361 9.375 19.6875 9.375H17.8125C16.8179 9.375 15.8641 9.77009 15.1609 10.4733C14.4576 11.1766 14.0625 12.1304 14.0625 13.125V15.9375H11.25C11.0014 15.9375 10.7629 16.0363 10.5871 16.2121C10.4113 16.3879 10.3125 16.6264 10.3125 16.875C10.3125 17.1236 10.4113 17.3621 10.5871 17.5379C10.7629 17.7137 11.0014 17.8125 11.25 17.8125H14.0625V25.2691C11.4197 25.0279 8.9716 23.7771 7.22747 21.7769C5.48334 19.7767 4.57743 17.1812 4.69819 14.5301C4.81894 11.879 5.95705 9.37659 7.8758 7.54325C9.79454 5.70991 12.3462 4.68684 15 4.68684C17.6538 4.68684 20.2055 5.70991 22.1242 7.54325C24.043 9.37659 25.1811 11.879 25.3018 14.5301C25.4226 17.1812 24.5167 19.7767 22.7725 21.7769C21.0284 23.7771 18.5803 25.0279 15.9375 25.2691Z" fill="#00578E"/>
            </svg>
                {/* instagram */}
            <svg className="maipu__icon__redes" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path opacity="0.2" d="M20.625 3.75H9.375C7.88316 3.75 6.45242 4.34263 5.39752 5.39752C4.34263 6.45242 3.75 7.88316 3.75 9.375V20.625C3.75 22.1168 4.34263 23.5476 5.39752 24.6025C6.45242 25.6574 7.88316 26.25 9.375 26.25H20.625C22.1168 26.25 23.5476 25.6574 24.6025 24.6025C25.6574 23.5476 26.25 22.1168 26.25 20.625V9.375C26.25 7.88316 25.6574 6.45242 24.6025 5.39752C23.5476 4.34263 22.1168 3.75 20.625 3.75ZM15 19.6875C14.0729 19.6875 13.1666 19.4126 12.3958 18.8975C11.6249 18.3824 11.0241 17.6504 10.6693 16.7938C10.3145 15.9373 10.2217 14.9948 10.4026 14.0855C10.5834 13.1762 11.0299 12.341 11.6854 11.6854C12.341 11.0299 13.1762 10.5834 14.0855 10.4026C14.9948 10.2217 15.9373 10.3145 16.7938 10.6693C17.6504 11.0241 18.3824 11.6249 18.8975 12.3958C19.4126 13.1666 19.6875 14.0729 19.6875 15C19.6875 16.2432 19.1936 17.4355 18.3146 18.3146C17.4355 19.1936 16.2432 19.6875 15 19.6875Z" fill="#00578E"/>
                <path d="M20.625 2.8125H9.375C7.63509 2.81436 5.96697 3.50636 4.73667 4.73667C3.50636 5.96697 2.81436 7.63509 2.8125 9.375V20.625C2.81436 22.3649 3.50636 24.033 4.73667 25.2633C5.96697 26.4936 7.63509 27.1856 9.375 27.1875H20.625C22.3649 27.1856 24.033 26.4936 25.2633 25.2633C26.4936 24.033 27.1856 22.3649 27.1875 20.625V9.375C27.1856 7.63509 26.4936 5.96697 25.2633 4.73667C24.033 3.50636 22.3649 2.81436 20.625 2.8125ZM25.3125 20.625C25.3125 21.8682 24.8186 23.0605 23.9396 23.9396C23.0605 24.8186 21.8682 25.3125 20.625 25.3125H9.375C8.1318 25.3125 6.93951 24.8186 6.06044 23.9396C5.18136 23.0605 4.6875 21.8682 4.6875 20.625V9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875H20.625C21.8682 4.6875 23.0605 5.18136 23.9396 6.06044C24.8186 6.93951 25.3125 8.1318 25.3125 9.375V20.625ZM15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6234 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6516 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z" fill="#00578E"/>
            </svg>
                {/* youtube */}
            <svg className="maipu__icon__redes" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path opacity="0.2" d="M26.5535 8.38253C26.4814 8.09346 26.3414 7.82574 26.1451 7.60157C25.9488 7.37739 25.702 7.20322 25.425 7.09347C21.5016 5.58409 15 5.62511 15 5.62511C15 5.62511 8.49844 5.58409 4.57031 7.09933C4.29332 7.20908 4.04647 7.38325 3.85021 7.60743C3.65396 7.8316 3.51395 8.09932 3.4418 8.38839C3.17227 9.43839 2.8125 11.495 2.8125 15.0001C2.8125 18.5052 3.17227 20.5618 3.44648 21.6177C3.519 21.9052 3.65867 22.1714 3.85403 22.3945C4.04939 22.6175 4.29487 22.7911 4.57031 22.9009C8.49844 24.4161 15 24.3751 15 24.3751C15 24.3751 21.5016 24.4161 25.4297 22.9009C25.706 22.7917 25.9524 22.6184 26.1486 22.3953C26.3448 22.1722 26.4852 21.9057 26.5582 21.6177C26.8324 20.563 27.1922 18.5052 27.1922 15.0001C27.1922 11.495 26.8277 9.43839 26.5535 8.38253ZM13.125 18.7501V11.2501L18.75 15.0001L13.125 18.7501Z" fill="#00578E"/>
                <path d="M19.2703 14.2195L13.6453 10.4695C13.5041 10.3753 13.3399 10.3212 13.1704 10.313C13.0008 10.3048 12.8322 10.3428 12.6825 10.4229C12.5328 10.503 12.4077 10.6223 12.3206 10.768C12.2334 10.9136 12.1874 11.0802 12.1875 11.25V18.75C12.1874 18.9198 12.2334 19.0864 12.3206 19.2321C12.4077 19.3777 12.5328 19.497 12.6825 19.5771C12.8322 19.6572 13.0008 19.6952 13.1704 19.687C13.3399 19.6788 13.5041 19.6247 13.6453 19.5305L19.2703 15.7805C19.3989 15.6949 19.5044 15.5789 19.5773 15.4427C19.6502 15.3065 19.6884 15.1545 19.6884 15C19.6884 14.8455 19.6502 14.6935 19.5773 14.5573C19.5044 14.4211 19.3989 14.3051 19.2703 14.2195ZM14.0625 16.9981V13.0078L17.0602 15L14.0625 16.9981ZM27.4605 8.14688C27.3501 7.71486 27.1386 7.31529 26.8433 6.98114C26.5481 6.64698 26.1776 6.38781 25.7625 6.225C21.7453 4.67344 15.3516 4.6875 15 4.6875C14.6484 4.6875 8.25469 4.67344 4.2375 6.225C3.82238 6.38781 3.45192 6.64698 3.15667 6.98114C2.86143 7.31529 2.64987 7.71486 2.53945 8.14688C2.23594 9.31641 1.875 11.4539 1.875 15C1.875 18.5461 2.23594 20.6836 2.53945 21.8531C2.64971 22.2854 2.86119 22.6852 3.15644 23.0195C3.45169 23.3539 3.82224 23.6133 4.2375 23.7762C8.08594 25.2609 14.1094 25.3125 14.9227 25.3125H15.0773C15.8906 25.3125 21.9176 25.2609 25.7625 23.7762C26.1778 23.6133 26.5483 23.3539 26.8436 23.0195C27.1388 22.6852 27.3503 22.2854 27.4605 21.8531C27.7641 20.6813 28.125 18.5461 28.125 15C28.125 11.4539 27.7641 9.31641 27.4605 8.14688ZM25.6453 21.3891C25.6096 21.5328 25.5403 21.6661 25.4432 21.7779C25.346 21.8898 25.2237 21.977 25.0863 22.0324C21.3773 23.4645 15.0691 23.4387 14.9941 23.4387C14.9191 23.4387 8.62266 23.4598 4.91602 22.0324C4.77864 21.977 4.65635 21.8898 4.55919 21.7779C4.46202 21.6661 4.39275 21.5328 4.35703 21.3891C4.07812 20.3191 3.75 18.3481 3.75 15C3.75 11.652 4.07812 9.68086 4.35469 8.6168C4.38974 8.47217 4.45872 8.33796 4.55592 8.22527C4.65312 8.11258 4.77575 8.02465 4.91367 7.96875C8.62266 6.54141 14.9297 6.5625 15.0059 6.5625C15.082 6.5625 21.3773 6.54141 25.084 7.96875C25.2214 8.0242 25.3436 8.11141 25.4408 8.22324C25.538 8.33507 25.6073 8.46834 25.643 8.61211C25.9219 9.68086 26.25 11.652 26.25 15C26.25 18.3481 25.9219 20.3191 25.6453 21.3832V21.3891Z" fill="#00578E"/>
            </svg>
                {/* tik tok */}
            <svg className="maipu__icon__redes" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path opacity="0.2" d="M26.25 14.0625C23.8951 14.0669 21.5988 13.3288 19.6875 11.9531V18.2812C19.6875 20.3947 18.8479 22.4216 17.3535 23.916C15.8591 25.4104 13.8322 26.25 11.7188 26.25C9.60531 26.25 7.57842 25.4104 6.08399 23.916C4.58956 22.4216 3.75 20.3947 3.75 18.2812C3.75 14.3602 6.58242 10.977 10.3125 10.3125V15.3152C9.78201 15.5669 9.32875 15.9562 9.00001 16.4427C8.67128 16.9292 8.4791 17.495 8.44353 18.0811C8.40796 18.6671 8.53029 19.252 8.79778 19.7747C9.06527 20.2974 9.4681 20.7387 9.96427 21.0527C10.4604 21.3666 11.0317 21.5417 11.6186 21.5596C12.2055 21.5775 12.7864 21.4376 13.3008 21.1545C13.8152 20.8714 14.2442 20.4555 14.5431 19.9501C14.842 19.4447 14.9998 18.8684 15 18.2812V2.8125H19.6875C19.6875 4.55298 20.3789 6.22218 21.6096 7.45289C22.8403 8.6836 24.5095 9.375 26.25 9.375V14.0625Z" fill="#00578E"/>
                <path d="M26.25 8.4375C24.7586 8.43595 23.3288 7.84282 22.2742 6.78826C21.2197 5.73371 20.6266 4.30387 20.625 2.8125C20.625 2.56386 20.5262 2.3254 20.3504 2.14959C20.1746 1.97377 19.9361 1.875 19.6875 1.875H15C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V18.2812C14.0623 18.7006 13.9496 19.1123 13.7361 19.4733C13.5226 19.8343 13.2161 20.1314 12.8487 20.3336C12.4813 20.5358 12.0663 20.6357 11.6471 20.6228C11.2279 20.61 10.8198 20.4849 10.4654 20.2607C10.111 20.0364 9.82331 19.7211 9.63227 19.3478C9.44124 18.9744 9.35388 18.5566 9.37931 18.138C9.40475 17.7194 9.54205 17.3153 9.77689 16.9678C10.0117 16.6203 10.3355 16.3422 10.7145 16.1625C10.8747 16.0864 11.0102 15.9664 11.105 15.8164C11.1998 15.6665 11.2501 15.4927 11.25 15.3152V10.3125C11.2501 10.1755 11.2201 10.0401 11.1622 9.91587C11.1042 9.79168 11.0198 9.68168 10.9148 9.59364C10.8098 9.50561 10.6867 9.44166 10.5543 9.40632C10.4219 9.37097 10.2834 9.36508 10.1484 9.38906C5.96602 10.1344 2.8125 13.957 2.8125 18.2812C2.8125 20.6433 3.75083 22.9087 5.42108 24.5789C7.09133 26.2492 9.35667 27.1875 11.7188 27.1875C14.0808 27.1875 16.3462 26.2492 18.0164 24.5789C19.6867 22.9087 20.625 20.6433 20.625 18.2812V13.6277C22.3613 14.5336 24.2916 15.0045 26.25 15C26.4986 15 26.7371 14.9012 26.9129 14.7254C27.0887 14.5496 27.1875 14.3111 27.1875 14.0625V9.375C27.1875 9.12636 27.0887 8.8879 26.9129 8.71209C26.7371 8.53627 26.4986 8.4375 26.25 8.4375ZM25.3125 13.0828C23.4804 12.9205 21.7262 12.2666 20.2348 11.1902C20.0946 11.0895 19.9293 11.0293 19.7571 11.0165C19.585 11.0037 19.4126 11.0387 19.259 11.1176C19.1055 11.1965 18.9767 11.3162 18.8869 11.4637C18.7971 11.6111 18.7497 11.7805 18.75 11.9531V18.2812C18.75 20.1461 18.0092 21.9345 16.6906 23.2531C15.372 24.5717 13.5836 25.3125 11.7188 25.3125C9.85395 25.3125 8.06552 24.5717 6.74691 23.2531C5.42829 21.9345 4.6875 20.1461 4.6875 18.2812C4.6875 15.2461 6.6375 12.5238 9.375 11.5312V14.7738C8.76896 15.1788 8.27818 15.7338 7.95047 16.3848C7.62276 17.0359 7.46931 17.7607 7.50508 18.4887C7.54085 19.2167 7.76462 19.923 8.15458 20.5387C8.54453 21.1545 9.08737 21.6587 9.73018 22.0023C10.373 22.3459 11.0939 22.517 11.8225 22.4991C12.5511 22.4812 13.2627 22.2748 13.8879 21.9C14.513 21.5253 15.0304 20.995 15.3896 20.3608C15.7488 19.7266 15.9376 19.0101 15.9375 18.2812V3.75H18.8086C19.0194 5.40127 19.7725 6.93583 20.9496 8.11293C22.1267 9.29003 23.6612 10.0431 25.3125 10.2539V13.0828Z" fill="#00578E"/>
            </svg>
        </div>

        </div>
{/* segunda columna */}
    <div className="Footer__columna__dos">
        {/* lista 1 */}
<div className="navegacion">
    <h3 className="navegacion__h3">Navegacion</h3>
        <ul>
    <li className="footer__li">Inicio</li>
    <li className="footer__li">Nosotros</li>
    <li className="footer__li">Servicios</li>
    <li className="footer__li">Productos</li>
</ul>
</div>
     {/* lista 2 */}
<div className="contacto">
     <h3 className="contacto__h3">Contacto</h3>
        <ul>
    <li className="footer__li">261-6815426</li>
    <li className="footer__li">+54 261-6815426</li>
    <li className="footer__li">romerocybertec@gmail.com</li>
    <li className="footer__li">Padre Vazquez N° 297 de Maipú</li>
</ul>
</div>
    </div>
</div>
</div>
    </>
}

export default Footer