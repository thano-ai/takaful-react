import React from "react";

const Navbar = () =>{
    return(
        <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
            <h1>TAKAFUL<span>.</span></h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto" href="index.html">Home</a></li>
              <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
              <li><a className="nav-link scrollto" href="index.html#features">Features</a></li>
              <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
              <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none" />
          </nav>{/* .navbar */}
          <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>
        </div>
      </header>

    ) ;
}

export default Navbar;