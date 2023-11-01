import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import HeroSection from '../components/hero';


 
const HomePage = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
       <Footer/>
      </div>
    );
};

export default HomePage;