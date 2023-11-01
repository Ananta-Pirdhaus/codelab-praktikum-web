import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/navbar.css";


const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Menginisialisasi AOS dengan durasi animasi 1000ms
  }, []);


  return (
    <>
      <div class="navbar">
        <a class="logo" href="/">
          <img
            src="https://vscode.dev/github/Ananta-Pirdhaus/codelab-praktikum-web/blob/main/src/Assets/logo-lab.png"
            alt="yoloo"
          />
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
        <div class="buttons">
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
