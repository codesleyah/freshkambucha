import Link from "next/link";
import React from "react";
import { About, Blog, Contact, Home, Listing, Pages } from "../Menu";

const Header2 = () => {
  return (
    <header className="header-area header-area-two d-none d-xl-block">
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">   
            <div className="row align-items-center">

              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        height={50}
                        src="assets/images/logo/logol.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-3" ></div>
              <div className="col-md-3 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <About />   
                      <Contact />
                      <li className="nav-btn">
                        <Link href="tel:+263771720598">
                          <a className="main-btn icon-btn">Call Us Now</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="hero-nav-btn">
                      <Link href="tel:+263771720598">
                        <a className="main-btn icon-btn">Call Us Now</a>
                      </Link>
                    </li>
                    <li className="nav-toggle-btn">
                      <div className="navbar-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header2;
