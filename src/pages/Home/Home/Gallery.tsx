
// import "~react-image-gallery/styles/scss/image-gallery.scss";


import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";




import gallery1 from '../../../assets/cardImg1.jpg';
import gallery2 from '../../../assets/cardImg2.jpg';
import gallery3 from '../../../assets/cardImg3.jpg';
import gallery4 from '../../../assets/cardImg4.jpg';
import gallery5 from '../../../assets/cardImg5.jpg';
import gallery6 from '../../../assets/cardImg6.jpg';
import gallery7 from '../../../assets/cardImg7.jpg';
import gallery8 from '../../../assets/cardImg8.jpg';
import gallery9 from '../../../assets/cardImg9.jpg';
// import gallery10 from '../../../assets/cardImg10.jpg';
// import gallery11 from '../../../assets/cardImg11.jpg';
// import gallery12 from '../../../assets/cardImg12.jpg';
import Container from "../../../Components/ui/Container";

const images = [
    {
      original:gallery1 ,
      thumbnail: gallery1,
    },
    {
      original: gallery2,
      thumbnail: gallery2,
    },
    {
      original: gallery3,
      thumbnail: gallery3,
    },
    {
      original: gallery4,
      thumbnail: gallery4,
    },
    {
      original: gallery5,
      thumbnail: gallery5,
    },
    {
      original: gallery6,
      thumbnail: gallery6,
    },
    {
      original: gallery7,
      thumbnail: gallery7,
    },
    {
      original: gallery8,
      thumbnail: gallery8,
    },
    {
      original: gallery9,
      thumbnail: gallery9,
    },
  ];

const Gallery = () => {
    return (
        <Container>

        {/* <div>
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
             Testimonials
        </h1>
        <p className="m-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div> */}
        <div>



       <ImageGallery  items={images} />;
  

        </div>
        </Container>
    );
};

export default Gallery;