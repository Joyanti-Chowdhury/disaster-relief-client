

import Nav from '../../pages/Home/Nav';
import { Outlet } from 'react-router-dom';

import Footer from '../../pages/Home/Footer';
import { useAppSelector } from '../../redux/features/hooks';

const FrontendLayout = () => {
    const { darkMode } = useAppSelector((store) => store.theme);
    return (
        <div className={` min-h-screen w-full ${darkMode ? "bg-black text-white" : ""}`}>
             <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default FrontendLayout;