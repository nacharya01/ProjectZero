import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoomList from "./components/RoomList";
import Maps from "./pages/Maps";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="RoomList" element={<RoomList />} />
            <Route path="Maps" element={<Maps />} />
          </Route>
          <Route path="RoomDetails" element={<RoomDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
