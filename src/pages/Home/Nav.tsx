
// import Container from "@/Components/ui/Container";

import Container from"../../Components/ui/Container"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg'

const Nav = () => {
    return (


<Container>
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="h-16 w-full bg-white z-[999]"
  >
    <nav className="w-full h-full max-w-[1230px] mx-auto px-[20px] flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img className="h-25 w-24 mt-9" src={logo} alt="" />
        <p className="font-bold text-2xl mt-14 pl-6 text-cyan-500">Disaster Relief</p>
      </div>

      <ul className="hidden md:flex space-x-5 p-10 mt-5">
        <NavLink className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800" to="/">Home</NavLink>
        <NavLink to="/all-relief-goods" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">All Relief</NavLink>
        <NavLink to="/dashboard" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Dashboard</NavLink>
        <NavLink to="/login" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Login</NavLink>
        <NavLink to="/logout" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Logout</NavLink>
      </ul>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <svg className="w-8 h-8 cursor-pointer text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  </motion.header>
</Container>











    //   <Container>
    //   <motion.header
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 1, duration: 1 }}
    //     className="h-16 w-full bg-white z-[999]"
    //   >
    //     <nav className="w-full h-full max-w-[1230px] mx-auto px-[20px] flex justify-between items-center">
    //       <div className="flex justify-center items-center">
    //         <img className="h-25 w-24 mt-9" src={logo} alt="" />
    //         <p className="font-bold text-2xl mt-14 pl-6 text-cyan-500">Disaster Relief</p>
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <span className="text-3xl p-2 font-bold bg-gradient-to-r from-orange-800 to-fuchsia-800 bg-clip-text text-transparent"></span>
    //         <button className="block md:hidden focus:outline-none">
    //           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //           </svg>
    //         </button>
    //       </div>
    //       <ul className="space-x-5 p-10 mt-5 hidden md:flex">
    //         <NavLink className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800" to="/">Home</NavLink>
    //         <NavLink to="/all-relief-goods" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">All Relief</NavLink>
    //         <NavLink to="/dashboard" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Dashboard</NavLink>
    //         <NavLink to="/login" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Login</NavLink>
    //         <NavLink to="/login" className="bg-cyan-500 p-3 rounded-sm font-bold text-white hover:bg-cyan-800">Logout</NavLink>
    //       </ul>
    //     </nav>
    //   </motion.header>
    //   {/* // {({ isActive }) => isActive ? 'active' : ''} */}
    // </Container>
    

















  //    <Container>


  //       <motion.header
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ delay: 1, duration: 1 }}
  //         className="h-16 w-full bg-white z-[999]"
  //       >
  //         <nav className="w-full h-full max-w-[1230px] mx-auto  px-[20px] flex justify-between items-center ">
  //           <div className="">
  //               <div className="flex justify-center items-center  ">
  //               <img  className="h-25 w-24 mt-9" src={logo} alt="" />
  //                <p className="font-bold text-2xl mt-14 pl-6 text-cyan-500">Disaster Relief</p>
  //               </div>
           
             
  //             <span className="text-3xl p-2  font-bold bg-gradient-to-r from-orange-800 to-fuchsia-800 bg-clip-text text-transparent ">
              
  //             </span>
  //           </div>
  //           <ul className="space-x-5 p-10 mt-5 ">
  //             <NavLink className="bg-cyan-500 p-3  rounded-sm font-bold text-white hover:bg-cyan-800" to="/">Home</NavLink>
  //             <NavLink to="/all-relief-goods"  className="bg-cyan-500 p-3  rounded-sm font-bold text-white hover:bg-cyan-800">All Relief</NavLink>
  //             <NavLink to="/dashboard"  className="bg-cyan-500 p-3  rounded-sm font-bold text-white hover:bg-cyan-800">Dashboard</NavLink>
  //             <NavLink to="/login"  className="bg-cyan-500 p-3  rounded-sm font-bold text-white hover:bg-cyan-800">Login</NavLink>
  //             <NavLink to="/login"className="bg-cyan-500 p-3  rounded-sm font-bold text-white hover:bg-cyan-800">Logout</NavLink>
  //           </ul>
  //         </nav>
  //       </motion.header>
  // {/* // {({ isActive }) => isActive ? 'active' : ''} */}
  // </Container>
    );
};

export default Nav;