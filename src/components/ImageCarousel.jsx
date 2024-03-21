import React ,{ useState }  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




// import { useNavigate }  from "react-router-dom"

const ImageCarousel = ({setSelectedImage,images}) => {

    // const history = useNavigate (); 
     
    const [currentIndex, setCurrentIndex] = useState();

    // const images = [
    //     {
    //         alt: 'image1',
    //         url: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg'
    //     },
    //     {
    //         alt: 'image2',
    //         url: 'https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg'
    //     },
    //     {
    //         alt: "image3",
    //         url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg'
    //     },
    //     {
    //         alt: "image4",
    //         url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg'
    //     },
    //     {
    //         alt: "image5",
    //         url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg'
    //     },
    // ];

    const renderSlides = images.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
        </div>
        ));

        // the index parameter refers to the index of the selected image within the carousel.
        //  This parameter is automatically provided by the react-responsive-carousel library
        //   when the user navigates through the carousel.
    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    const handleBack = () => {
setSelectedImage(null);
        // history(-1); // Go back to the previous page
    };


  return (
    <div>
     
        <button onClick={handleBack}>Back</button>
    <Carousel
    centerSlidePercentage={40}
    thumbWidth={180}
    dynamicHeight={false}
    centerMode={false}
    showArrows={false}
    autoPlay={false}
    infiniteLoop={true}
    selectedItem={images[currentIndex]}
    onChange={handleChange}
    className="carousel-container"
    >
    {renderSlides}
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
