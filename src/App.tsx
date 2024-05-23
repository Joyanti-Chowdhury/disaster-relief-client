import FrontendLayout from "./Components/layout/FrontendLayout"
import { useAppSelector } from "./redux/features/hooks";
// import MainLayout from "./Components/layout/MainLayout"
// import ProtectedRoute from "./Components/layout/ProtectedRoute"
// import AdminDashboard from "./pages/admin/AdminDashboard"


function App() {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div  className={` ${darkMode ? "bg-black text-white" : ""}`}>
       {/* <MainLayout></MainLayout>   */}
       {/* min-h-screen w-full */}
       <FrontendLayout></FrontendLayout>

       
    </div>
  )
}

export default App
