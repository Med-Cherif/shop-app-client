import "./App.css";
import { createPortal } from "react-dom";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import TopError from "./components/Errors/TopError";
import PublicRoute from "./components/PublicRoute";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import Portal from "./components/Portal";
import Product from "./screens/Product";
import Products from "./screens/Products";
import Address from "./screens/Address";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<PublicRoute><RegisterScreen /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LoginScreen /></PublicRoute>} />
        <Route path="/confirmation/:email/:token" element={<ConfirmationScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/address" element={<Address />} />
      </Routes>
      <Sidebar />
      <TopError />
      <Portal />
    </div>
  );
}

export default App;
