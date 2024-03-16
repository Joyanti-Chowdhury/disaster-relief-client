import { motion} from 'framer-motion';
import Container from '../../../Components/ui/Container';
import distribution1 from '../../../assets/distribution1.jpg'
import distribution2 from '../../../assets/distribution2.jpg'
import distribution3 from '../../../assets/distribution3.jpg'


const DistributionCenter = () => {
    return (
        <Container>

         <div>
         
         
         
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
        Distribution Center Locations
        </h1>
        <p className="mt-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div> 

      <motion.section className="bg-gray-100 py-12"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
    >
      <motion.div className="container mx-auto px-4"
      >
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
         >
          <motion.div className="bg-white shadow-md p-6 rounded-lg"
           whileHover={{ scale: 1.05 }}
          >
            <img src={distribution1} alt="Distribution Center Location 1" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Distribution Center 1</h3>
            <p className="text-gray-700">123 Main Street, City</p>
          </motion.div>
          <motion.div className="bg-white shadow-md p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}>
            <img src={distribution2} alt="Distribution Center Location 2" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Distribution Center 2</h3>
            <p className="text-gray-700">456 Elm Street, City</p>
          </motion.div>
          <motion.div className="bg-white shadow-md p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}>
            <img src={distribution3} alt="Distribution Center Location 3" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Distribution Center 3</h3>
            <p className="text-gray-700">789 Oak Street, City</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>






        </Container>
    );
};

export default DistributionCenter;