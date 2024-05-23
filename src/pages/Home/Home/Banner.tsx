// import Container from '../../Components/ui/Container';
import Container from'../../../Components/ui/Container' 
// import bannerImg from '../../../assets/Disaster-Response-General-Banner.jpg';
import bannerImg from '../../../assets/banner6.jpg';
import { motion } from 'framer-motion';

const banner = {
    initial: { y: 0, rotate: 0, scale: 5 },
  
    animate: {
      y: 20,
      scale: 1,
  
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };




const Banner = () => {
    return (
        <Container>
        <div className='relative'>
            <motion.div
          variants={banner}
          initial="initial"
          animate="animate"
          className=" mt-10 w-3/4 lg:w-full mx-auto  "
        >
          <img className="h-[95%] rounded-sm  object-contain" src={bannerImg} alt="" />
        </motion.div>








            <div className='absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {/* <h1 className='text-5xl font-bold text-center mt-15 text-cyan-500'>Disaster Relief</h1> */}
                {/* <p className='font-bold text-center mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed mollitia esse laudantium totam molestias eos ea! Similique veritatis earum fugiat quam itaque laboriosam excepturi hic, cumque illo facere expedita.</p> */}
            </div>
        </div>
        </Container>
    );
};

export default Banner;