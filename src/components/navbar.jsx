import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/navbar.css";
import logoIlab from "../Assets/logo-ilab.png";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Menginisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  return (
    <>
      <div className="navbar">
        <a className="logo" href="/">
          <img src={logoIlab} alt="logo-ilab" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
        <div className="buttons">
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
