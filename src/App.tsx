import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoriesBar from "./components/CategoriesBar/CategoriesBar";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";


function App() {
  return (
    <div className="App test">
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
