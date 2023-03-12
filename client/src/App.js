import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoomList from "./components/RoomList";
import Maps from "./pages/Maps";
import RoomDetails from "./pages/RoomDetails";
import Checkout from "./pages/Checkout.tsx";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const openLogin = useSelector((state) => state.loginReducer);
  const openSignUp = useSelector((state) => state.signUpReducer);

  return (
    <div>
      {openLogin.open && <Login />}
      {openSignUp.open && <SignUp />}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="RoomList" element={<RoomList />} />
            <Route path="Maps" element={<Maps />} />
          </Route>
          <Route path="RoomDetails" element={<RoomDetails />} />
          <Route path="Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
