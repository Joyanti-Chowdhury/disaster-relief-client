// import React from 'react';
// import Nav from '../Nav';
// import Footer from '../Footer';
// import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import AllRelief from './AllRelief';
import Testtimonial from './Testtimonial';
// import Gallery from './Gallery';
import TestGallery from '../TestGallery';
import About from '../../../pages/About';
import Protocols from './Protocols';
import DistributionCenter from './DistributionCenter';
import { useAppSelector } from '../../../redux/features/hooks';
// import ViewDetails from '../../../pages/AllReliefGoodsTest/ViewDetails';

const Home = () => {
    const { darkMode } = useAppSelector((store) => store.theme);
    return (
        <div className={` min-h-screen w-full ${darkMode ? "bg-black text-white" : ""}`}>
            {/* <Nav></Nav> */}
         
       <Banner></Banner>
       <AllRelief></AllRelief>
       <Testtimonial></Testtimonial>
       {/* <Gallery></Gallery> */}
       <TestGallery></TestGallery>
   
       <Protocols></Protocols>
       <DistributionCenter></DistributionCenter>
       <About></About>
       {/* <ViewDetails></ViewDetails> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;