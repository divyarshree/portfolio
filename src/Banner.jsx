import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-in', // Easing function for animations
    });
  }, []);

  return (
    <div className="banner-section">
      <div className="container">
        <h1 data-aos="fade-up">Full-Stack Web Developer | Crafting Interactive Web Experiences</h1>
        <p data-aos="fade-in" data-aos-delay="500">Bridging Front-end Elegance with Back-end Power</p>
        <a href="#contact" className="cta-button" data-aos="fade-in" data-aos-delay="1000">Contact Me</a>
      </div>
    </div>
  );
}
