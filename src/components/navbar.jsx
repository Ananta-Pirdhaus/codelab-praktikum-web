import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/navbar.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Menginisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li data-aos="fade-right">
            <a href="/">Home</a>
          </li>
          <li data-aos="fade-right" data-aos-delay="100">
            <a href="/about">About</a>
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
