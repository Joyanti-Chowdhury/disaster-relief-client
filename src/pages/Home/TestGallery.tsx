import { Gallery } from "react-grid-gallery";
import gallery1 from '../../assets/cardImg1.jpg';
import gallery2 from '../../assets/cardImg2.jpg';
import gallery3 from '../../assets/cardImg3.jpg';
import gallery4 from '../../assets/cardImg4.jpg';
import gallery5 from '../../assets/cardImg5.jpg';
import gallery6 from '../../assets/cardImg6.jpg';
import gallery7 from '../../assets/cardImg7.jpg';
import gallery8 from '../../assets/cardImg8.jpg';
// import gallery9 from '../../assets/cardImg9.jpg';
// import gallery10 from '../../assets/cardImg10.jpg';
// import gallery11 from '../../assets/cardImg11.jpg';
import gallery12 from '../../assets/cardImg12.jpg';
import Container from "../../Components/ui/Container";

const images = [
    {
       src: gallery1,
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: gallery12,
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src:  gallery2,
       width: 320,
       height: 212,
    },
    {
       src:  gallery3,
       width: 320,
       height: 212,
    },
    {
       src:  gallery4,
       width: 320,
       height: 212,
    },
    {
       src:  gallery5,
       width: 320,
       height: 150,
    },
    {
       src:  gallery6,
       width: 320,
       height: 212,
    },
    {
       src:  gallery7,
       width: 320,
       height: 212,
    },
    {
       src:  gallery8,
       width: 320,
       height: 212,
    },
 ];
const TestGallery = () => {
    return (
        <Container>
             <div>
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
             Our Gallery
        </h1>
        <p className="m-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
        <div></div>
            <Gallery images={images} />
        </Container>
    );
};

export default TestGallery;