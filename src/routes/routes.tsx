import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";

import Login from "../pages/Login";
// import Register from "../pages/Register";

import Home from "../pages/Home/Home/Home";
import AllRelief from "../pages/Home/Home/AllRelief";
// import AllReliefGoods from "../pages/AllReliefGoods/AllReliefGoods";
import AllReliefGoodsTest from "../pages/AllReliefGoodsTest/AllReliefGoodsTest";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../Components/layout/AdminLayout";
import Supply from "../pages/Supply/Supply";
import SupplyDashboad from "../pages/Dashboard/SupplyDashboad";
import CreateSupply from "../pages/Dashboard/CreateSupply";
import Register from "../pages/Register";


// import {adminRoutes, } from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-relief",
        // element:<AllRelief></AllRelief>
        element: <AllRelief></AllRelief>,
      },
      {
        path: "all-relief-goods",
        // element:<AllReliefGoods></AllReliefGoods>
        element: <AllReliefGoodsTest></AllReliefGoodsTest>,
      },

      {
        path: "/supply/:id",
        element: <Supply></Supply>,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      // {
      //     index: true,
      //     element: <Navigate to='/dashboard'></Navigate>,
      // },

      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      // {
      //   path: "dashboard",
      //   element: <AllSupply></AllSupply>,
      // },
      {
        path: "supplies",
        element: <SupplyDashboad></SupplyDashboad>
      },
      {
        path: "create-supply",
        element: <CreateSupply></CreateSupply>
      },
    ],
   
  },


  // {
  //     path: '/login',
  //     element: <Login/>
  // },
  // {
  //     path: '/register',
  //     element: <Register/>
  // },
]);

export default router;
