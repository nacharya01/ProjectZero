import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route exact path="/" element={<Home />}>
                <Route path="/home" element={<Home />} />
                <Route path="RoomList" element={<RoomList />} />
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
