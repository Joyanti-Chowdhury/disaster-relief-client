// import { Layout, Menu } from "antd";

// import { Menu } from 'antd';
// import Sider from 'antd/es/layout/Sider';
// import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
// import { adminPaths } from '../../routes/AdminRoutes';
// import { facultyPath } from '../../routes/facultyRoutes';
// import { StudentPath } from '../../routes/studentRoutes';
// import { useAppSelector } from '../../redux/features/hooks';
// import { SelectCurrentUser } from '../../redux/features/auth/authSlice';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { cn } from "../../lib/utils"

// const {Sider} = Layout
;

// const userRole = {
//     ADMIN: 'admin',
//     FACULTY: 'faculty',
//     STUDENT:"student"
// }

const Sidebar = () => {


//  const user = useAppSelector(SelectCurrentUser);

//     let sidebarItems;

 
//     switch (user!.role) {
//         case userRole.ADMIN: 
//         sidebarItems =  sidebarItemsGenerator(adminPaths,userRole.ADMIN)
//         break;
//         case userRole.FACULTY: 
//         sidebarItems =  sidebarItemsGenerator(facultyPath, userRole.FACULTY)
//             break;
//         case userRole.STUDENT: 
//         sidebarItems =  sidebarItemsGenerator(StudentPath,userRole.STUDENT)
            
//             break;
    
//         default:
//             break;
    
//     }



    return (
  

    
<aside className=' bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 '>
            
            <nav className='flex flex-col gap-5'>
              <NavLink to='/admin/dashboard' className={({isActive}) =>
              cn('p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2',{
            
            
                  'bg-dark-gray text-white':isActive
              })
            
            
            
            }>
                  <LayoutDashboard className='shrink-0'></LayoutDashboard>
                  <span className='truncate'>   Dashboard</span>
                </NavLink>
            
                
              <NavLink to='/all-supply' className={({isActive}) =>
              cn('p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2',{
            
            
                  'bg-dark-gray text-white':isActive
              })
            
            
            
            }>
                  <LayoutDashboard className='shrink-0'></LayoutDashboard>
                  <span className='truncate'>   All Supply</span>
                </NavLink>
              <NavLink to='/admin/add-supply' className={({isActive}) =>
              cn('p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2',{
            
            
                  'bg-dark-gray text-white':isActive
              })
            
            
            
            }>
                  <LayoutDashboard className='shrink-0'></LayoutDashboard>
                  <span className='truncate'>  Add supply</span>
                </NavLink>
              <NavLink to='/admin/create-supply' className={({isActive}) =>
              cn('p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2',{
            
            
                  'bg-dark-gray text-white':isActive
              })
            
            
            
            }>
                  <LayoutDashboard className='shrink-0'></LayoutDashboard>
                  <span className='truncate'>  Create supply</span>
                </NavLink>

                 
            
            
            
            
            </nav>
            
            </aside>















    );
      }

export default Sidebar;