import Container from "../../../Components/ui/Container";
import { motion } from 'framer-motion';
import protocol from '../../../assets/protocol1.png'
import protocol1 from '../../../assets/protocol4.jpg'
import protocol2 from '../../../assets/protocol2.jpg'
import protocol3 from '../../../assets/protocol6.jpeg'

const Protocols = () => {
  return (
    <Container>
      <div>
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
           Emergency Response Protocols 
        </h1>
        <p className="mt-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>


      {/* <motion.section 
            className="bg-gray-100 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div 
                        className="bg-white rounded-lg shadow p-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">1. Evacuation Procedures</h3>
                        <p>Provide detailed instructions on how to evacuate safely in case of an emergency.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-white rounded-lg shadow p-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">2. Communication Channels</h3>
                        <p>List communication channels such as emergency hotlines, social media accounts, etc.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-white rounded-lg shadow p-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">3. Emergency Contacts</h3>
                        <p>Include contact information for emergency services, hospitals, and local authorities.</p>
                    </motion.div>
                </div>
            </div>
        </motion.section> */}











      <motion.section className="py-16"   
      initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
      >
      <motion.div className="container mx-auto px-4">
       
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8"
          whileHover={{ scale: 1.05 }}>
          <motion.div className="bg-cyan-100 shadow-lg rounded-lg p-8 justify-center"  
           whileHover={{ scale: 1.05 }}>
             
           <div>
           <img className="w-full h-[200px]  mt-3 mb-4 rounded-md" src={protocol} alt="" />
           </div>
        <div>
        <h3 className="text-xl font-semibold mb-4">Before Disaster Strikes</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vitae neque venenatis fringilla. Nulla facilisi. Vivamus nec mauris vitae est posuere finibus ac at metus.</p>
        </div>
          </motion.div>
          <motion.div className="bg-cyan-100 shadow-lg rounded-lg p-8"
            whileHover={{ scale: 1.05 }}>
               <div>
           <img className="w-full h-[200px]  mt-3 mb-4 rounded-md" src={protocol1} alt="" />
           </div>
           
            <h3 className="text-xl font-semibold mb-4">During Disaster</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vitae neque venenatis fringilla. Nulla facilisi. Vivamus nec mauris vitae est posuere finibus ac at metus.</p>
          </motion.div>
          <motion.div className="bg-cyan-100 shadow-lg rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
          >
                <div>
           <img className="w-full h-[200px]  mt-3 mb-4 rounded-md" src={protocol2} alt="" />
           </div>
            <h3 className="text-xl font-semibold mb-4">After Disaster</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vitae neque venenatis fringilla. Nulla facilisi. Vivamus nec mauris vitae est posuere finibus ac at metus.</p>
          </motion.div>
          <motion.div className="bg-cyan-100 shadow-lg rounded-lg p-8"
            whileHover={{ scale: 1.05 }}>
               <div>
           <img className="w-full h-[200px]  mt-3 mb-4 rounded-md" src={protocol3} alt="" />
           </div>
            <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Emergency contact numbers</li>
              <li>Evacuation routes</li>
              <li>Emergency kit checklist</li>
              <li>Community shelters</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>



















      
    </Container>
  );
};

export default Protocols;
