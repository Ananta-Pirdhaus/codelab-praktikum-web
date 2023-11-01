import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/hero.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Menginisialisasi AOS
    AOS.refresh(); // Memperbarui animasi setelah render pertama
  }, []);

  return (
    <div class="hero">
      <div class="container">
        <h1>Selamat Datang</h1>
        <p>di website Praktikum Pemprograman Website</p>
      </div>
    </div>
  );
};

export default HeroSection;
