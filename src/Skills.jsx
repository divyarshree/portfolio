import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ImageCarousel = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
  ];

  const options = {
    loop: true,
    margin: 10,
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

  return (
    <OwlCarousel className="owl-theme" {...options}>
      {images.map((image, index) => (
        <div className="item" key={index}>
          <img src={`path_to_your_images/${image}`} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </OwlCarousel>
  );
};
export default ImageCarousel;
