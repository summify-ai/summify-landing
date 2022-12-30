import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-center gap-5 py-3">
          <div className="sm:flex-1 ">
            <Link to="/" className="flex items-center gap-1" aria-label="">
              <img
                className="h-12 md:h-14"
                src={Logo}
                alt=""
              />
              <span className="font-extrabold tracking-wide text-gray-900 text-3xl sm:block hidden">Lander</span>
            </Link>
          </div>

          <div className="flex-1 flex items-center md:gap-12 sm:gap-8 gap-4 justify-center ">
            <Link to="/pricing" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors ease-in-out duration-150">
              About
            </Link>
            <Link to="/pricing" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors ease-in-out duration-150 ">
              Pricing
            </Link>
          </div>

          <nav className="flex sm:flex-1 ">
            <ul className="flex flex-grow justify-end  gap-8 flex-wrap items-center">
              <li>

                <Link
                  to="/signup"
                  className="btn-sm sm:px-5 px-4 text-gray-100 bg-primary hover:bg-primary-dark ml-3 shrink-0"
                >
                  <span>Sign Up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-100 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link >


              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
