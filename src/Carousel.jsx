import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
  const options = {
    loop: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  const items = [
    <div key={1}>
      <div className='item'>
        <img src="./html-5.svg" alt="HTML5" />
      </div>
    </div>,
    <div key={2}>
      <div className='item'>
        <img src="./css3.svg" alt="CSS3" />
      </div>
    </div>,
    <div key={3}>
      <div className='item'>
        <img src="./js.svg" alt="JavaScript" />
      </div>
    </div>,
    <div key={4}>
      <div className='item'>
        <img src="./jquery.svg" alt="jQuery" />
      </div>
    </div>,
    <div key={5}>
      <div className='item'>
        <img src="./php.svg" alt="PHP" />
      </div>
    </div>,
    <div key={6}>
      <div className='item'>
        <img src="./sass.svg" alt="Sass" />
      </div>
    </div>,
    <div key={7}>
      <div className='item'>
        <img src="./wordpress.svg" alt="WordPress" />
      </div>
    </div>,
    <div key={8}>
      <div className='item'>
        <img src="./api.svg" alt="API" />
      </div>
    </div>,
    <div key={9}>
      <div className='item'>
        <img src="./ai.svg" alt="AI" />
      </div>
    </div>
  ];

  return (
    <OwlCarousel className="owl-theme" {...options}>
      {items}
    </OwlCarousel>
  );
}

export default Carousel;
