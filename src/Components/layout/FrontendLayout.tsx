

import Nav from '../../pages/Home/Nav';
import { Outlet } from 'react-router-dom';

import Footer from '../../pages/Home/Footer';

const FrontendLayout = () => {
    return (
        <div>
             <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default FrontendLayout;