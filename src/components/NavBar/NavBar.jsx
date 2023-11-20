import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const navRef = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav_menu">
        <div className="logo_container">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="40"
              viewBox="0 0 74 40"
              fill="none"
            >
              <g clipPath="url(#clip0_5_22)">
                <path
                  d="M20.254 39.9714C20.4538 39.6904 20.6172 39.4667 20.7781 39.2404C27.2933 30.1509 33.8059 21.064 40.316 11.9719C40.4483 11.7872 40.578 11.7013 40.8167 11.7039C47.9599 11.7586 55.103 11.808 62.2461 11.8522C62.804 11.8548 63.3385 11.9173 63.7977 12.2815C63.9145 12.3751 64.0027 12.4714 64.0728 12.6041C64.3737 13.1764 64.4723 13.7747 64.4749 14.4277C64.4905 18.3897 64.5398 22.3543 64.5683 26.3163C64.5709 26.795 64.4879 27.2659 64.27 27.7029C63.8885 28.4651 63.2061 28.7851 62.42 28.7929C57.734 28.8345 53.048 28.8475 48.362 28.871C45.7388 28.884 43.1156 28.8996 40.4924 28.9256C40.22 28.9282 40.1473 28.8632 40.1473 28.5848C40.1395 24.217 40.1214 19.8465 40.1058 15.4787C40.1058 15.3694 40.1058 15.2601 40.1058 15.065C39.9864 15.2263 39.9242 15.307 39.8645 15.3902C37.4852 18.8059 35.1085 22.2242 32.7265 25.6399C32.602 25.8195 32.5475 25.9963 32.5449 26.2149C32.5294 29.576 32.5086 32.9344 32.4749 36.2955C32.4723 36.5713 32.5397 36.6363 32.8122 36.6363C42.5162 36.6129 52.2203 36.5999 61.9244 36.5843C63.6991 36.5817 65.4609 36.4698 67.2045 36.0822C69.7914 35.5073 71.2366 33.8684 71.727 31.3033C72.0099 29.8309 72.1759 28.3455 72.1733 26.8444C72.1655 22.1644 72.1863 17.4818 72.1552 12.8018C72.1448 11.1811 71.8516 9.59676 71.1381 8.11914C70.1599 6.0952 68.4993 4.95056 66.3716 4.40946C65.3208 4.14151 64.2492 4.05046 63.1672 4.04265C57.5368 4.00103 51.9089 3.95941 46.2785 3.91779C46.2162 3.91779 46.154 3.91779 46.0943 3.91779C46.0372 3.81113 46.1202 3.75389 46.1592 3.69146C46.7767 2.62226 47.402 1.55826 48.0117 0.483862C48.1207 0.293955 48.2375 0.234122 48.4477 0.23152C55.2172 0.184694 61.9866 0.130064 68.7587 0.0780345C70.4063 0.0650272 72.0566 0.0546214 73.7042 0.0312082C73.9377 0.0286068 73.9948 0.0884403 73.9948 0.322571C73.9844 13.4495 73.9792 26.5791 73.9844 39.706C73.9844 40.013 73.8417 39.9948 73.6315 39.9948C58.7744 39.9896 43.9174 39.987 29.0603 39.9818C26.1465 39.9818 23.2352 39.9818 20.2488 39.9818L20.254 39.9714Z"
                  fill="white"
                />
                <path
                  d="M45.2588 0.0520291C44.3325 1.35796 43.4452 2.60146 42.5682 3.84755C42.467 3.99063 42.3346 3.95682 42.2075 3.95942C40.2589 3.97763 38.3103 3.99844 36.3617 4.00624C36.1386 4.00624 36.0114 4.08169 35.8843 4.26119C31.6316 10.2575 27.3738 16.2513 23.1159 22.2451C23.0433 22.3465 22.9706 22.4454 22.8798 22.5676C22.4828 22.0057 22.1014 21.4672 21.72 20.9261C17.7813 15.3434 13.8426 9.76067 9.90645 4.17274C9.79229 4.00885 9.67553 3.94901 9.47574 3.94901C7.01858 3.96202 4.56143 3.97242 2.10428 3.96722C1.80589 3.96722 1.7514 4.06087 1.754 4.33663C1.80589 11.2331 1.85 18.1296 1.8967 25.0234C1.91746 28.1322 1.93562 31.2435 1.95898 34.3522C1.96417 35.0286 1.98233 35.705 1.97973 36.3814C1.97973 36.5583 2.03163 36.6103 2.20806 36.6103C4.55105 36.5895 6.89404 36.5739 9.23703 36.5635C9.40827 36.5635 9.48871 36.5166 9.46536 36.3371C9.45757 36.2643 9.46536 36.1915 9.46536 36.1186C9.47055 29.9402 9.47833 23.7617 9.48352 17.5832C9.48352 17.474 9.48352 17.3621 9.48352 17.2451C9.62104 17.2685 9.64439 17.3725 9.69369 17.4428C13.4456 22.8018 17.1923 28.1634 20.9468 33.5224C21.0817 33.7175 21.0921 33.8372 20.952 34.0297C19.5872 35.9261 18.2276 37.8278 16.8757 39.7321C16.7408 39.9194 16.6059 39.9974 16.3698 39.9974C11.0299 39.9792 5.69271 39.9688 0.352875 39.9688C0.0596774 39.9688 0 39.8855 0 39.6072C0.015568 28.0619 0.023352 16.5167 0.0337307 4.97138C0.0337307 3.43132 0.0492987 1.89386 0.0441094 0.353798C0.0441094 0.091051 0.0908135 0 0.378822 0C15.2255 0.0234131 30.0696 0.0364204 44.9163 0.0520291C45.0072 0.0520291 45.098 0.0520291 45.2588 0.0520291Z"
                  fill="#E58E13"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_22">
                  <rect width="74" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div
          className={`menu_toggle ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
      </div>
      <div className={`collapse ${isActive ? "expanded" : ""}`}>
        <ul className="navbar_nav">
          <li className="nav_item">
            <Link to="/">Inicio</Link>
          </li>

          <li className="nav_item">
            <Link to="/services">Servicios</Link>
          </li>
          <li className="nav_item">
            <Link to="#">Productos</Link>
          </li>
        </ul>
      </div>
      <Link className="contact_btn" to="/contact">
        Contáctanos
      </Link>
    </nav>
  );
};

export default NavBar;
