import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "../../../Components/ui/carousel";

import Container from "../../../Components/ui/Container";
import Testimonlial from "../../../assets/testimonial1.jpg";
import Testimonlial2 from "../../../assets/tesimonial2.jpg";
import Testimonlial3 from "../../../assets/testmolial3.jpg";
import Testimonlial4 from "../../../assets/testmonial4.jpg";
import Testimonlial5 from "../../../assets/testmonial5.jpg";

const Testtimonial = () => {
  return (
    <Container>
      <div>
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
          Testimonials
        </h1>
        <p className="mt-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-100 m-5 border-solid rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-5">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={Testimonlial}
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              explicabo veniam nemo nesciunt esse beatae? Dolor ducimus atque
              libero ut, facere et. Doloribus, animi nemo magni illum dolorem!
            </p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-100 m-5 border-solid rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-5">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={Testimonlial2}
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              explicabo veniam nemo nesciunt esse beatae? Dolor ducimus atque
              libero ut, facere et. Doloribus, animi nemo magni illum dolorem!
            </p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-100 m-5 border-solid rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-5">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={Testimonlial3}
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              explicabo veniam nemo nesciunt esse beatae? Dolor ducimus atque
              libero ut, facere et. Doloribus, animi nemo magni illum dolorem!
            </p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-100 m-5 border-solid rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-5">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={Testimonlial4}
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              explicabo veniam nemo nesciunt esse beatae? Dolor ducimus atque
              libero ut, facere et. Doloribus, animi nemo magni illum dolorem!
            </p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-100 m-5 border-solid rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-5">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={Testimonlial5}
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              explicabo veniam nemo nesciunt esse beatae? Dolor ducimus atque
              libero ut, facere et. Doloribus, animi nemo magni illum dolorem!
            </p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default Testtimonial;
