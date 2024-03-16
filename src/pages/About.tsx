import { motion } from "framer-motion";
import Container from "../Components/ui/Container";
import aboutUs from "../assets/aboutus.jpg";
const About = () => {
  return (
    <Container>
      <div>
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
          About Us
        </h1>
        <p className="mt-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>


      <motion.div className="flex m-5 bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div className="w-1/2"
            whileHover={{ scale: 1.05 }}
        >
          <img  className="rounded-md" src={aboutUs} alt="" />
        </motion.div>
        <div className="ml-8 w-1/2 text-justify ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere eveniet quam. Hic eum ad quas nulla animi, est perspiciatis! Adipisci earum maiores corrupti vero est, perferendis aliquam non distinctio repellendus, dolor excepturi consequuntur molestias velit magnam recusandae perspiciatis a culpa impedit! Reiciendis iusto harum fugit fugiat unde et atque aliquam. Dolorum porro et nesciunt voluptatum itaque aliquid neque, at distinctio nobis, sit dignissimos? Aliquam sed ducimus placeat dolore quisquam, nisi sint. Asperiores debitis velit nulla ea eligendi harum vel. Eos facere expedita doloribus commodi at ut quisquam, nemo illum asperiores officiis, atque quas perspiciatis est quibusdam tenetur corporis inventore alias sunt dolores. Dicta expedita dignissimos quibusdam animi sed accusamus odio magnam natus reiciendis. Facilis, aspernatur veritatis? Aperiam corporis similique ex enim. Cumque hic voluptas ipsum nihil natus quod qui illo quas, odit debitis quisquam totam voluptatum accusamus quis ullam at nulla nemo porro temporibus culpa? Quidem quis dolore sequi.similique ex enim. Cumque hic voluptas ipsum nihil natus quod qui illo quas, odit debitis quisquam totam voluptatum accusamus quis ullam at nulla nemo porro  ?</p>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
