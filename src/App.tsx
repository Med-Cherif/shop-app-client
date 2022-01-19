import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import TopError from "./components/Errors/TopError";
import PublicRoute from "./components/PublicRoute";
import ConfirmationScreen from "./screens/ConfirmationScreen";


function App() {
  return (
    <div className="App test">
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<PublicRoute><RegisterScreen /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LoginScreen /></PublicRoute>} />
        <Route path="/confirmaion/:email/:token" element={<PublicRoute><ConfirmationScreen /></PublicRoute>} />
      </Routes>
      <Sidebar />
      <TopError />
    </div>
  );
}

export default App;
