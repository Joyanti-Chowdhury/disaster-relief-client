
// import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import { useAppDispatch } from "../../redux/features/hooks";


// const { Header, Content } = Layout;

const AdminLayout = () => {
    // const dispatch = useAppDispatch();
    // const handleLogout = () => {
    //       dispatch(logout())
    // }
    return (
      <div className="grid grid-cols-12">
      <Sidebar></Sidebar>
      <div className="col-span-10 h-[200vh] px-5">
        <Outlet></Outlet>
      </div>
      
    </div>
      );
};

export default AdminLayout;