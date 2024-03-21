import React, { useState } from 'react';
import './ScrollableCard.css'; // Import CSS file for styling
import ImageCarousel from './ImageCarousel';
import { images as appIm } from '../assets/Appaswamy/AppaIm';

// import ImageCarouselB from './ImageCarouselB';

const ScrollableCard = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
if(selectedImage==null){
  return (
    <div className="scrollable-card">
         <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          onClick={() => handleImageClick(image)}
        />
      ))}
      </div>
      </div>
  );  
    }else{
        return(
            <div className="image-carousel-container">
      {
       
          selectedImage.alt === 'A' && <ImageCarousel setSelectedImage={setSelectedImage} images={appIm}/>}
         </div> 
      )
        
        
      }
        
  
      
};

export default ScrollableCard
