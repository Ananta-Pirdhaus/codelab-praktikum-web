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
    <section className="hero-section" data-aos="fade-in">
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          Welcome to Our Website
        </h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="100">
          Explore amazing content and discover new experiences.
        </p>
        <button className="hero-button" data-aos="fade-up" data-aos-delay="200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
