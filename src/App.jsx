import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./services/ProtectedRoutes";
import DashBoardPage from "./pages/DashboardPage";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false}/>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage/>}></Route>
            
          {/* Protected routes */}
          <Route element={<ProtectedRoutes/>}>
          <Route element={<DashBoardPage/>}></Route>
          </Route>
        </Routes>
      
    </div>
  )
}

export default App
