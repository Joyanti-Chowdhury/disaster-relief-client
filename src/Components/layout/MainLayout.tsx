// import { Button, Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { useAppDispatch } from "../../redux/features/hooks";
// import { logout } from "../../redux/features/auth/authSlice";

// const { Header, Content } = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: createElement(icon),
//   label: `nav ${index + 1}`,
// }));






const MainLayout = () => {
  // const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //       dispatch(logout())
  // }



  return (
    <div>
      {/* <Layout style={{ height: "100vh" }}>
       <Sidebar></Sidebar>
        <Layout>
          <Header style={{ padding: 0 }}>
            
            <Button onClick={handleLogout}>Logout</Button>
             </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
         
        </Layout>
      </Layout> */}
    </div>
  );
};

export default MainLayout;
